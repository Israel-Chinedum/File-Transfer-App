import { createContext } from "react";
import { Socket, io } from "socket.io-client";

export const socket: Socket = io("http://localhost:2100/", { withCredentials: true });

export const SocketContext: any = createContext(null);
