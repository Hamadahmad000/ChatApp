import {io} from 'socket.io-client';

const SocketConnection = async () => {
  try {
    const socket = io('http://localhost:8000');
    socket.on('connect', () => {
      console.log(`Socket connected ===`);
    });
    socket.on('disconnect', () => {
      console.log(`Socket disconnected ===`);
    });
    socket.on('error', data => {
      console.log(`Error while connecting socket ===` + data);
    });
  } catch (error) {
    console.log(error);
  }
};

// Created By Hamad Mirza
