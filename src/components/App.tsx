import { Layout } from "./Layout";
import { SocketContext } from "@/Context/SocketContext";
import { socket } from "@/Context/SocketContext";
import "../CSS/App.css";
function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Layout />
    </SocketContext.Provider>
  );
}

export default App;
