import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route element=<Home /> path="/" exact />
        <Route element=<Login /> path="/login" />
        <Route element=<Register /> path="/register" />
        <Route element=<Profile /> path="/profile" />
        <Route element=<NotFoundPage /> path="*" />
      </Routes>
    </>
  );
}

export default App;
