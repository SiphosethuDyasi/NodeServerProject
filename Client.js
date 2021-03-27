const http = require("http");
const host = 'localhost';
const port = 3000;

const requestListener = function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.end("My First server!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

