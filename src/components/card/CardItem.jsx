import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./card-item.css";

function CardItem(props) {
  return (
    <Card className="card" style={{ width: "28rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className="title">{props.title}</Card.Title>
        <Card.Text className="text">{props.text}</Card.Text>
        <Button className="btn" variant="primary">Read more</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
