import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavegationBar from "./components/navbar/navbar";
import MainContainer from "./components/main-container/MainContainer";
import Footer from "./components/footer/footer";



function App() {
  return (
    <>
      <div className="App">
        <NavegationBar />
        <MainContainer />
        <Footer />
      </div>      
    </>
  );
}

export default App;
