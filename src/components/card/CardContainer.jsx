import React from "react";
import CardItem from "./CardItem";
import "./card-container.css";
import card2 from "../../assets/images/card2.jpg";
import card3 from "../../assets/images/card3.jpg";
import card4 from "../../assets/images/card4.jpg";
import card6 from "../../assets/images/card6.jpg";

export default function CardContainer() {
  const cards = [
    {
      title: "Menstruation pain is not normal",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: card2,
    },
    {
      title: "How to prepare yourself for pregnancy",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: card3,
    },
    {
      title: "First signs of breast cancer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: card4,
    },
    {
      title: "What is endometriosis?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: card6,
    },
  ];

  return (
    <div className="card-container">
      {cards.map((card, i) => {
        return (
          <CardItem 
            title={card.title}
            text={card.text}
            image={card.image}
            key={i}
          />
        );
      })}
    </div>
  );

}
