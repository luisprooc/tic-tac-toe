import { Button, Col, Container, Row, Badge } from "reactstrap";
import Board from "./board/Board";

const Home = () => {
  return (
    <Container className="mt-4" fluid="sm">
      <Row className="text-center">
        <h1 className="fw-bold fs-1">Tic Tac Toe</h1>
        <Col xs="12">
          <Board />
        </Col>
        <Col xs="6" className="my-2">
          <Button color="dark"><i>Player</i> <b>X</b></Button>
        </Col>
        <Col xs="6" className="my-2">
          <Button color="dark"><i>Player</i> <b>O</b></Button>
        </Col>
        <Col className="my-2" xs="12">
          <Badge color="primary">Choose your icon and defeat the bot</Badge>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
