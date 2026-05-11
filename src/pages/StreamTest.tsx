import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

type Chunk = {
  id: number;
  message: string;
  timestamp: string;
};

type TestState = 'idle' | 'running' | 'done' | 'error';

const STREAM_URL = process.env.REACT_APP_FUNCTIONS_URL
  ? `${process.env.REACT_APP_FUNCTIONS_URL}/api/stream`
  : '/api/stream';

const StreamTest: React.FC = () => {
  const [state, setState] = useState<TestState>('idle');
  const [mode, setMode] = useState<string | null>(null);
  const [chunks, setChunks] = useState<Chunk[]>([]);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const runTest = async () => {
    setState('running');
    setMode(null);
    setChunks([]);
    setError(null);

    abortRef.current = new AbortController();

    try {
      const response = await fetch(STREAM_URL, {
        signal: abortRef.current.signal,
      });

      const detectedMode = response.headers.get('X-Streaming-Mode') || 'unknown';
      setMode(detectedMode);

      const contentType = response.headers.get('Content-Type') || '';

      if (contentType.includes('text/event-stream')) {
        // True streaming — read body incrementally (AWS / platforms that pass headers through)
        const reader = response.body?.getReader();
        if (!reader) throw new Error('ReadableStream not available on response body');

        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const events = buffer.split('\n\n');
          buffer = events.pop() ?? '';

          for (const event of events) {
            const dataLine = event.split('\n').find((l) => l.startsWith('data: '));
            if (!dataLine) continue;
            const parsed = JSON.parse(dataLine.slice(6).trim());
            if (parsed.done) continue;
            setChunks((prev) => [...prev, parsed as Chunk]);
          }
        }
      } else {
        // Platform buffered the response — read as text and sniff the format.
        // GCP / Azure rewrite Content-Type when buffering, so the body may still
        // be SSE-formatted even though the header no longer says so.
        const text = await response.text();
        if (text.trim().startsWith('data:')) {
          const events = text.split('\n\n');
          for (const event of events) {
            const dataLine = event.split('\n').find((l) => l.startsWith('data: '));
            if (!dataLine) continue;
            const parsed = JSON.parse(dataLine.slice(6).trim());
            if (parsed.done) continue;
            setChunks((prev) => [...prev, parsed as Chunk]);
          }
        } else {
          const data = JSON.parse(text);
          setChunks(data.chunks ?? []);
        }
      }

      setState('done');
    } catch (err: any) {
      if (err.name === 'AbortError') return;
      setError(err.message);
      setState('error');
    }
  };

  const reset = () => {
    abortRef.current?.abort();
    setState('idle');
    setMode(null);
    setChunks([]);
    setError(null);
  };

  return (
    <div className="page-container">
      <h1>HTTP Streaming Test</h1>
      <p>
        Calls <code>/api/stream</code> and detects whether Contentstack Launch supports
        HTTP streaming (SSE) or falls back to a buffered response.
      </p>

      <div className="stream-controls">
        <button
          className="stream-btn"
          onClick={runTest}
          disabled={state === 'running'}
        >
          {state === 'running' ? 'Streaming…' : 'Start Test'}
        </button>
        {state !== 'idle' && (
          <button className="stream-btn stream-btn--reset" onClick={reset}>
            Reset
          </button>
        )}
      </div>

      {mode && (
        <div
          className={`stream-mode-badge ${
            mode === 'streaming' ? 'stream-mode-badge--stream' : 'stream-mode-badge--buffer'
          }`}
        >
          Mode:{' '}
          <strong>
            {mode === 'streaming' ? 'STREAMING (SSE)' : 'BUFFERED'}
          </strong>
          {mode === 'streaming'
            ? ' — chunks arrive one by one in real-time'
            : ' — all chunks arrive at once after function completes'}
        </div>
      )}

      {error && <div className="stream-error">Error: {error}</div>}

      {chunks.length > 0 && (
        <div className="stream-chunks">
          <h2>Received Chunks ({chunks.length})</h2>
          {chunks.map((chunk) => (
            <div key={chunk.id} className="stream-chunk">
              <span className="stream-chunk-id">#{chunk.id}</span>
              <span className="stream-chunk-msg">{chunk.message}</span>
              <span className="stream-chunk-ts">
                {new Date(chunk.timestamp).toLocaleTimeString()}
              </span>
            </div>
          ))}
          {state === 'done' && (
            <div className="stream-done">
              Stream complete — {chunks.length} chunks received
            </div>
          )}
        </div>
      )}

      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
    </div>
  );
};

export default StreamTest;
