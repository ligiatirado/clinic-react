import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

function CarouselImages() {
  const imagesList = getCarouselImageList();
  return <Carousel>{imagesList}</Carousel>;
}


// MANEIRA DIFERENTE DE ESCREVER UMA FUNCAO JS
// function MinhaFuncao(){} eh a mesma coisa que const MinhaFuncao = () =>{}
const getCarouselImageList = () => {
  return [banner1, banner2, banner3].map((image, index) => {
    return (
      <Carousel.Item className="carousel" interval={2000} key={index}>
        <img className="d-block w-100 carousel-img" src={image} alt="" />
      </Carousel.Item>
    );
  });
};

export default CarouselImages;
