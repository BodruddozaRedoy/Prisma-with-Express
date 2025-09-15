import { createServer, Server } from 'node:http';

let server: Server | null = null;

async function startServer() {
  try {
    server = createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('OK');
    });

    const port = Number(process.env.PORT ?? 5000);
    server.listen(port, () => {
      console.log(`HTTP server listening on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    throw error;
  }
}

// Only start the server if this file is executed directly
// (useful if you later export startServer for tests)
startServer();
