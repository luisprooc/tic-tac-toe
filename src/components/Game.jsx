import { Button, Col } from "reactstrap";
import React, { useContext } from "react";
import { AppContext } from "../context/Api-context";
// import { changeScene } from "../context/app-actions";

const Game = () => {

  const {state} = useContext(AppContext);

  return (
    <>
      <Col xs="6" className="my-2">
        <h6 className="fw-bold">PlayerScore: {state.playerScore}</h6>
      </Col>
      <Col xs="6" className="my-2">
        <h6 className="fw-bold">BotScore: {state.botScore}</h6>
      </Col>
      <Col xs="12" className="my-2">
        <Button color="primary"> Go Back </Button>
      </Col>
    </>
  );
};

export default Game;
