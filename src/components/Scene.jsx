import { Col, Container, Row } from "reactstrap";
import Board from "./board/Board";
import React, { useContext } from "react";
import { AppContext } from "../context/Api-context";
import Intro from "./Intro";
import Game from "./Game";

const Scene = () => {
  const {
    state,
  } = useContext(AppContext);

  return (
    <Container className="mt-4" fluid="sm">
      <Row className="text-center">
        <h1 className="fw-bold fs-1">Tic Tac Toe</h1>
        <Col xs="12">
          <Board />
        </Col>
        {state.scene === "Intro" ? <Intro />: <Game />}
      </Row>
    </Container>
  );
};

export default Scene;
