import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavegationBar from "./components/navbar/navbar";
import MainContainer from "./components/main-container/MainContainer";

function App() {
  return (
    <div className="App">
      <NavegationBar />
      <MainContainer />
    </div>
  );
}

export default App;
