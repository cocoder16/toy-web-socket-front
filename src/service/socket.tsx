import { createContext } from "react";
import socketIo from "socket.io-client";

import { URL } from "src/config/environments";

export const socket = socketIo(String(URL.BACK), { withCredentials: true });
export const SocketContext = createContext(socket);
console.log("socket server connected.");
