import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const isLogin = true;
  if (!isLogin) {
    navigate("/login");
  }
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/registration" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
