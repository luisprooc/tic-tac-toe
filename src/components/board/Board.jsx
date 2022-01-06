import { Table } from "reactstrap";
import "./board.css"

const Board = () => {
  return (
    <Table borderless className="board-table">
      <thead>
        <tr>
          <th
            className="board-border-right board-border-bottom"
          >
           
          </th>
          <th
            className="board-border-bottom board-border-right"
          ></th>
          <th className="board-border-bottom"></th>
        </tr>
        <tr>
          <th
            className="board-border-bottom board-border-right"
          >
            
          </th>
          <th
            className="board-border-bottom board-border-right"
          ></th>
          <th className="board-border-bottom"></th>
        </tr>
        <tr>
          <th className="board-border-right">
            
          </th>
          <th className="board-border-right"></th>
          <th></th>
        </tr>
      </thead>
    </Table>
  );
};

export default Board;
