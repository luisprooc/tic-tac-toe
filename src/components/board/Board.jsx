import { Table } from "reactstrap";
import "./board.css";
import React, { useState, useEffect,useContext, useCallback } from "react";
import { AppContext } from "../../context/Api-context";
import { changeTurn, setRounds } from "../../context/app-actions";
import { botPlay } from "./helpers/bot";
import WinnerModal from "../utils/Modal";

const Board = () => {
  const initialState = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  const [table, setTable] = useState(initialState);
  const {state, dispatch} = useContext(AppContext);
  const [activeModal, setActiveModal] = useState(false);
  const [winner, setWinner] = useState('Tier');

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
    setTable(botPlay(table, state.botIcon));
    dispatch(changeTurn("PLAYER"));
    dispatch(setRounds());  
  }, [state, table, dispatch]);

  useEffect(() => {
    if(state.turn === "BOT") {
      botTurn();
    }
  }, [state, botTurn]);

  useEffect(() => {
    if(state.rounds === 9) {
      setTable([
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]);
      dispatch(setRounds(true));
      setActiveModal(true);
    }
  }, [state.rounds, dispatch, setActiveModal]);

  useEffect(() => {
    setTimeout(() => {
      setActiveModal(false);
    },1700)
  },[activeModal])


  return (
    <Table borderless className="board-table">
      <WinnerModal show={activeModal} winner={winner}/>
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
