export default function handler(request, response) {
  const appInfo = {
    name: "React-CRA-Static-Site",
    branch: "main",
    version: "0.1.0",
    features: [
      "Create React App",
      "React 18",
      "React Router DOM v6",
      "TypeScript",
      "Static Site Generation",
      "Contentstack Cloud Functions",
    ],
    timestamp: new Date().toISOString(),
    source: "contentstack-cloud-function",
  };
  
  response.status(200).json(appInfo);
}

