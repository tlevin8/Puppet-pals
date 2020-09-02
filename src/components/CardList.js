import React from "react";
import Card from "./Card";

const CardList = ({ puppets }) => {
  const CardsArray = puppets.map((user, i) => {
    return (
      <Card
        key={puppets[i].id}
        id={puppets[i].id}
        name={puppets[i].name}
        email={puppets[i].email}
        photo={puppets[i].photo}
        moto={puppets[i].moto}
      />
    );
  });
  return <div>{CardsArray}</div>;
};

export default CardList;
