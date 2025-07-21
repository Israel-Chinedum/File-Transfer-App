import { createContext } from "react";
import { io } from "socket.io-client";

export const socket = io("http://localhost:2100/", { withCredentials: true });

export const SocketContext: any = createContext(null);
