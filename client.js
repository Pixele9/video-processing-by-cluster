const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io-client');
const ss = require('socket.io-stream');
const socket = io.connect('http://example.com/user');
const stream = ss.createStream();
const videoFile = "./iphone12.mp4";

io.on('connection', () => {
	console.log("Should send video")
	ss(socket).emit('profile-image', stream, {name: videoFile});
	fs.createReadStream(videoFile).pipe(stream);
});
server.listen(5001);