import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import NavegationBar from "./components/navbar/navbar";
import Navsup from "./components/navbar/Navsup";
import About from "./Pages/About";
import SigIn from "./Pages/SignIn";

const App = () => {
  return (
    <>
      <Navsup />
      <NavegationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SigIn />} />
      </Routes>      
    </>
  );
}

export default App;
