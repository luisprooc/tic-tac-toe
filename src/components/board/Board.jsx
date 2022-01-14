import { Table } from "reactstrap";
import "./board.css";
import React, { useState, useEffect,useContext } from "react";
import { AppContext } from "../../context/Api-context";

const Board = () => {
  const [table, setTable] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const {state, dispatch} = useContext(AppContext);;

  const selectBox = (e) => {
    if(state.scene === "GAME" && state.turn === "PLAYER") {
      const [row,col] = e.target.id.split(',');
      if (!table[row][col]) {
        setTable(value => [...value, value[row][col] = "X"]);
      } 
    }

  };

  useEffect(() => {
    if(state.scene === "INTRO") {
     
    }
  }, [table]);


  return (
    <Table borderless className="board-table">
      <thead>
        <tr>
          {table[0].map((value, index) => {
            return (
              <>
                {index === 0 && (
                  <th
                    className="board-border-right board-border-bottom"
                    id="0,0"
                    onClick={selectBox}
                    key={index}
                  >
                    {value}
                  </th>
                )}

                {index === 1 && (
                  <th
                    className="board-border-bottom board-border-right"
                    id="0,1"
                    onClick={selectBox}
                    key={index}
                  >
                    {value}
                  </th>
                )}
                {index === 2 && (
                  <th
                    className="board-border-bottom"
                    id="0,2"
                    onClick={selectBox}
                    key={index}
                  >
                    {value}
                  </th>
                )}
              </>
            );
          })}
        </tr>
        <tr>
          {table[1].map((value, index) => {
            return (
              <>
                {index === 0 && (
                  <th
                    className="board-border-bottom board-border-right"
                    id="1,0"
                    onClick={selectBox}
                    key={index}
                  >
                    {value}
                  </th>
                )}
                {index === 1 && (
                  <th
                    className="board-border-bottom board-border-right"
                    id="1,1"
                    onClick={selectBox}
                    key={index}
                  >
                    {value}
                  </th>
                )}
                {index === 2 && (
                  <th
                    className="board-border-bottom"
                    id="1,2"
                    onClick={selectBox}
                    key={index}
                  >
                    {value}
                  </th>
                )}
              </>
            );
          })}
        </tr>
        <tr>
          {table[2].map((value, index) => {
            return (
              <>
                {index === 0 && (
                  <th
                    className="board-border-right"
                    id="2,0"
                    onClick={selectBox}
                    key={index}
                  >
                    {value}
                  </th>
                )}

                {index === 1 && (
                  <th
                    className="board-border-right"
                    id="2,1"
                    onClick={selectBox}
                    key={index}
                  >
                    {value}
                  </th>
                )}

                {index === 2 && (
                  <th id="2,2" onClick={selectBox} key={index}>
                    {value}
                  </th>
                )}
              </>
            );
          })}
        </tr>
      </thead>
    </Table>
  );
};

export default Board;
