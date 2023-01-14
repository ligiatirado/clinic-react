import CardContainer from "../card/CardContainer";
import CarouselImages from "../carousel/carousel";
import "./mainContainer.css";

export default function MainContainer() {
  return (
    <div className="main-container">
      <CarouselImages />
      <h4>Let's talk about...</h4>
      <CardContainer />
    </div>
  );
}
