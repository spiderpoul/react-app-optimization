const fs = require("fs");
const http = require("http");
const path = require("path");
const PORT = 8081;

const STATIC_PATH = path.join(process.cwd(), "./");

const MIME_TYPES = {
  html: "text/html; charset=UTF-8",
  js: "application/javascript; charset=UTF-8",
  css: "text/css",
  json: "application/json",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  ico: "image/x-icon",
  svg: "image/svg+xml",
};

const serveFile = (name) => {
  const filePath = path.join(STATIC_PATH, name);
  if (!filePath.startsWith(STATIC_PATH)) {
    console.log(`Can't be served: ${name}`);
    return null;
  }
  const stream = fs.createReadStream(filePath);

  return stream;
};

http
  .createServer(async (req, res) => {
    const { url } = req;
    if (req.method === "GET") {
      const fileExt = path.extname(url).substring(1);
      const mimeType = MIME_TYPES[fileExt] || MIME_TYPES.html;
      res.writeHead(200, { "Content-Type": mimeType });
      const stream = fileExt === "" ? serveFile("/index.html") : serveFile(url);
      if (stream) stream.pipe(res);
    }
  })
  .listen(PORT, () => {
    console.log("Listening on port", PORT);
  });
