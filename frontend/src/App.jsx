import { Routes, Route, Navigate } from "react-router";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

const App = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"}/>} />
        <Route path="/login" element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to='/' /> : <Signup />} />
      </Routes>
      <Toaster/>
    </div>
  );
};

export default App;
