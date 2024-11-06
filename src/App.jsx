import { Route, Routes } from "react-router-dom";
import "./App.css";
import StartGame from "./Screens/StartGame";
import PlayGame from "./Screens/PlayGame";
import Home from "./Screens/index";

function App() {
  return (
    <Routes>
      <Route path="/start" element={<StartGame />} />
      <Route path="/" element={<PlayGame />} />
      <Route path="/play" element={<Home />} />
    </Routes>
  );
}

export default App;
