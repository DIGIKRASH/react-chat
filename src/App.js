import io from "socket.io-client";

const socket = io("http://localhost:8080");

function App() {
  return <button>connect</button>;
}

export default App;
