import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {


    console.log('a user connected', server.id);



    socket.on('disconnect', () => {
        console.log('user disconnected', server.id);
    });
    




});

export {app, io, server}; // exporting app, io, server to be used in server.js