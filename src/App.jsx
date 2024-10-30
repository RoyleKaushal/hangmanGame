import { Route, Routes } from "react-router-dom";
import "./App.css";
import StartGame from "./Components/Screens/StartGame";
import PlayGame from "./Components/Screens/PlayGame";
import Home from "./Components/Screens";

function App() {
  return (
    <Routes>
      <Route path="/start" element={<StartGame />} />
      <Route path="/play" element={<PlayGame />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
