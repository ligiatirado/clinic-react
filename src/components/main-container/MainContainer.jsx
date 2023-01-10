import CardContainer from "../card/CardContainer";
import CarouselImages from "../carousel/carousel";
import "./mainContainer.css";

export default function MainContainer() {
  return (
    <div>
      <CarouselImages className="carousel" />
      <h3>News</h3>
      <CardContainer />
    </div>
  );
}
