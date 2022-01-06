import { Button, Col, Badge } from "reactstrap";
import React, { useContext } from "react";
import { AppContext } from "../context/Api-context";
import { changeScene, chooseIcon } from "../context/app-actions";

const Intro = () => {
  const {
    dispatch,
  } = useContext(AppContext);

  const handleChooseIcon = (e) => {
    const botIcon = e.target.id === "X" ? "O" : "X";
    dispatch(chooseIcon(e.target.id, botIcon));
    dispatch(changeScene("GAME"));
  };

  return (
    <>
      <Col xs="6" className="my-2">
        <Button color="dark" onClick={handleChooseIcon} id="X">
          <i>Player</i> <b>X</b>
        </Button>
      </Col>
      <Col xs="6" className="my-2">
        <Button color="dark" onClick={handleChooseIcon} id="O">
          <i>Player</i> <b>O</b>
        </Button>
      </Col>
      <Col className="my-2" xs="12">
        <Badge color="primary">Choose your icon and defeat the bot</Badge>
      </Col>
    </>
  );
};

export default Intro;
