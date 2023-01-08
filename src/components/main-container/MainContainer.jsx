import CardContainer from "../card/CardContainer";
import CarouselImages from "../carousel/carousel";
import "./mainContainer.css";

export default function MainContainer() {
  return (
    <div >
      <CarouselImages className="body" />
      <h1>News</h1>
      <CardContainer />
    </div>

  );
}





