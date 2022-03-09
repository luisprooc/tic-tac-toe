import { Button, Col, Badge } from "reactstrap";
import React, { useContext } from "react";
import { AppContext } from "../context/Api-context";
import { changeScene, chooseIcon, changeTurn } from "../context/app-actions";

const Intro = () => {
  const {
    dispatch,
  } = useContext(AppContext);

  const handleChooseIcon = (e) => {
    const botIcon = e.target.value === "X" ? "O" : "X";
    dispatch(chooseIcon(e.target.value, botIcon));
    dispatch(changeScene("GAME"));

    const initialTurn = e.target.value === "X" ? "PLAYER" : "BOT";
    dispatch(changeTurn(initialTurn));
  };

  return (
    <>
      <Col xs="6" className="my-2">
        <Button color="dark" onClick={handleChooseIcon} value="X" className="fw-bold fst-italic">
          Player X
        </Button>
      </Col>
      <Col xs="6" className="my-2">
        <Button color="dark" onClick={handleChooseIcon} value="O" className="fw-bold fst-italic">
          Player O
        </Button>
      </Col>
      <Col className="my-2" xs="12">
        <Badge color="primary">Choose your icon and defeat the bot</Badge>
      </Col>
    </>
  );
};

export default Intro;
