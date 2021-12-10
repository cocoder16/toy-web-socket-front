import { createContext } from "react";
import socketIo from "socket.io-client";

import { URL } from "src/config/environments";

export const socket = socketIo(String(URL.BACK), { withCredentials: true });
export const SocketContext = createContext(socket);

socket.on("connect", () => {
  console.log("socket server connected.");
});

socket.on("disconnect", () => {
  console.log("socket server disconnected.");
});
