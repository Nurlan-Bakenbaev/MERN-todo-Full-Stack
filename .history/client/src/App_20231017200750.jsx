import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";

function App() {
  const { login, logOut, token, userId, isReady, email } = useAuth(); // Add parentheses to useAuth
  const isLogin = !!token;

  return (
    <AuthContext.Provider
      value={{ login, logOut, token, userId, isReady, isLogin }}
    >
      <BrowserRouter>
        <Navbar email={email} />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={<Home isLogin={isLogin} email={email} />}
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
