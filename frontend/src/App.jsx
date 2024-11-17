import "./App.css";
import Homepage from "./components/homepage";
import Login from "./components/Login";
import Registers from "./components/Registers";
import CalorieLog from "./components/CalorieLog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registers" element={<Registers />} />
          <Route path="/log" element={<CalorieLog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;