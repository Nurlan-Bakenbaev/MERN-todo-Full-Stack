import Navbar from "./components/Navbar"
import AuthPage from "./pages/AuthPage"
import { BrowserRouter,Routes,Route  } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     Routes
     <AuthPage/>
    </BrowserRouter>
  )
}

export default App
