import { Table } from "reactstrap";
import "./board.css";
import React, { useState, useEffect,useContext, useCallback } from "react";
import { AppContext } from "../../context/Api-context";
import { changeTurn, setRounds } from "../../context/app-actions";
import { botPlay } from "./helpers/bot";

const Board = () => {
  const initialState = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  const [table, setTable] = useState(initialState);
  const {state, dispatch} = useContext(AppContext);;

  const selectBox = (e) => {
    if(state.scene === "GAME" && state.turn === "PLAYER") {
      const [row,col] = e.target.id.split(',');
      if (!table[row][col]) {
        setTable(value => [...value, value[row][col] = state.playerIcon]);
        dispatch(changeTurn("BOT"));
        dispatch(setRounds());
      } 
    }

  };
  const botTurn = useCallback(() => {
    setTable(botPlay(table, state.botIcon, dispatch))
    dispatch(changeTurn("PLAYER"));
    dispatch(setRounds());  
  }, [state, table, dispatch]);

  useEffect(() => {
    if(state.turn === "BOT") {
      botTurn();
    }
  }, [state, botTurn]);


  return (
    <Table borderless className="board-table">
      <thead>
        <tr>
          {table[0].map((value, index) => {
            return (
              <React.Fragment key={index}>
                {index === 0 && (
                  <th
                    className="board-border-right board-border-bottom"
                    id="0,0"
                    onClick={selectBox}
                  >
                    <p>{value}</p>
                  </th>
                )}

                {index === 1 && (
                  <th
                    className="board-border-bottom board-border-right"
                    id="0,1"
                    onClick={selectBox}
                  >
                    <p>{value}</p>
                  </th>
                )}
                {index === 2 && (
                  <th
                    className="board-border-bottom"
                    id="0,2"
                    onClick={selectBox}
                  >
                    <p>{value}</p>
                  </th>
                )}
              </React.Fragment >
            );
          })}
        </tr>
        <tr>
          {table[1].map((value, index) => {
            return (
              <React.Fragment key={index + 5}>
                {index === 0 && (
                  <th
                    className="board-border-bottom board-border-right"
                    id="1,0"
                    onClick={selectBox}
                  >
                    <p>{value}</p>
                  </th>
                )}
                {index === 1 && (
                  <th
                    className="board-border-bottom board-border-right"
                    id="1,1"
                    onClick={selectBox}
                  >
                    <p>{value}</p>
                  </th>
                )}
                {index === 2 && (
                  <th
                    className="board-border-bottom"
                    id="1,2"
                    onClick={selectBox}
                  >
                    <p>{value}</p>
                  </th>
                )}
              </React.Fragment>
            );
          })}
        </tr>
        <tr>
          {table[2].map((value, index) => {
            return (
              <React.Fragment key={index + 10}>
                {index === 0 && (
                  <th
                    className="board-border-right"
                    id="2,0"
                    onClick={selectBox}
                  >
                    <p>{value}</p>
                  </th>
                )}

                {index === 1 && (
                  <th
                    className="board-border-right"
                    id="2,1"
                    onClick={selectBox}
                  >
                    <p>{value}</p>
                  </th>
                )}

                {index === 2 && (
                  <th id="2,2" onClick={selectBox}>
                    <p>{value}</p>
                  </th>
                )}
              </React.Fragment>
            );
          })}
        </tr>
      </thead>
    </Table>
  );
};

export default Board;
