import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavegationBar from "./components/navbar/navbar";
import MainContainer from "./components/main-container/MainContainer";
import Footer from "./components/footer/footer";
import Navsup from "./components/navbar/Navsup";



function App() {
  return (
    <>
      <div className="App">
        <Navsup />
        <NavegationBar />
        <MainContainer />
        <Footer />
      </div>      
    </>
  );
}

export default App;
