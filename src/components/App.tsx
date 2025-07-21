import { Home } from "./Home";
import { SocketContext } from "@/Context/SocketContext";
import { socket } from "@/Context/SocketContext";
import "../CSS/App.css";
function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Home />
    </SocketContext.Provider>
  );
}

export default App;
