const { Server } = require("socket.io");

let io;

function initSocket(server) {
	io = new Server(server, {
		cors: {
			origin: "*",
		},
	});

	io.on("connection", (socket) => {
		console.log("Client connected:", socket.id);

		socket.on("joinBugRoom", (bugId) => {
			socket.join(bugId);
		});

		socket.on("disconnect", () => {
			console.log("Client disconnected:", socket.id);
		});
	});
}

function emitBugUpdate(bugId, data) {
	if (io) {
		io.to(bugId).emit("bugUpdated", data);
	}
}

module.exports = {
	initSocket,
	emitBugUpdate,
};
