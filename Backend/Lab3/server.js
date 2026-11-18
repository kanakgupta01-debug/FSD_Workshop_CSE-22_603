import http from "node:http";

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain",
        "X-Powered-By": "Node.js HTTP Server"
    });

    res.end("Hello World");
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});