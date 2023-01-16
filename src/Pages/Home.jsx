import "./home.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainContainer from "../components/main-container/MainContainer";
import Footer from "../components/footer/footer";


function Home() {
    return (
      <>
        <div className="home">
          <MainContainer />
          <Footer />
        </div>      
      </>
    );
  }
  
export default Home;