export default function handler(request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Expose-Headers', 'X-Streaming-Mode');

  if (request.method === 'OPTIONS') {
    response.status(204).end();
    return;
  }

  const totalChunks = 5;
  const delayMs = 400;

  const buildChunk = (index) => ({
    id: index + 1,
    message: `Chunk ${index + 1} of ${totalChunks}`,
    timestamp: new Date().toISOString(),
  });

  const streamingSupported =
    typeof response.write === 'function' &&
    typeof response.flushHeaders === 'function';

  if (streamingSupported) {
    response.setHeader('Content-Type', 'text/event-stream');
    response.setHeader('Cache-Control', 'no-cache, no-transform');
    response.setHeader('Connection', 'keep-alive');
    response.setHeader('X-Accel-Buffering', 'no');
    response.setHeader('X-Streaming-Mode', 'streaming');
    response.flushHeaders();

    let index = 0;
    const sendNext = () => {
      if (index < totalChunks) {
        const chunk = buildChunk(index);
        response.write(`data: ${JSON.stringify(chunk)}\n\n`);
        index++;
        setTimeout(sendNext, delayMs);
      } else {
        response.write(`data: ${JSON.stringify({ done: true, total: totalChunks })}\n\n`);
        response.end();
      }
    };
    sendNext();
  } else {
    const chunks = Array.from({ length: totalChunks }, (_, i) => buildChunk(i));
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Streaming-Mode', 'buffered');
    response.status(200).json({
      mode: 'buffered',
      message: 'Streaming not supported on this platform — full response buffered',
      chunks,
      total: totalChunks,
    });
  }
}
