const app = require("./src/app");
const connectToDB = require("./src/config/db");

const PORT = 5000 || process.env.BACKEND_PORT;

connectToDB();

app.listen(PORT, () => {
	console.log(`Server is running at port: ${PORT}`);
});

/*
const http = require("http");

const app = require("./app");
const connectDB = require("./config/db");
const { PORT } = require("./config/env");
const { initSocket } = require("./sockets/socket");

async function startServer() {
  try {
    await connectDB();

    const server = http.createServer(app);

    initSocket(server);

    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Server failed to start", err);
    process.exit(1);
  }
}

startServer();
*/
