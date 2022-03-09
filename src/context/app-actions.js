export const CHOOSE_ICON = "CHOOSE_ICON";
export const CHANGE_SCENE = "CHANGE_SCENE";
export const CHANGE_TURN = "CHANGE_TURN";
export const RESET_GAME = "RESET_GAME";
export const SET_ROUNDS = "SET_ROUNDS";
export const ADD_BOT_SCORE = "ADD_BOT_SCORE"
export const ADD_PLAYER_SCORE = "ADD_PLAYER_SCORE"

export const chooseIcon = (playerIcon, botIcon) => ({
  type: CHOOSE_ICON,
  payload: {
    botIcon,
    playerIcon,
  },
});

export const changeScene = (scene) => ({
  type: CHANGE_SCENE,
  payload: {
    scene
  },
});

export const changeTurn = (turn) => ({
  type: CHANGE_TURN,
  payload: {
    turn
  },
});

export const ResetGame = () => ({
  type: RESET_GAME
});

export const setRounds = (reset = false) => ({
  type: SET_ROUNDS,
  payload: {
    reset
  }
});

export const addBotScore = () => ({
  type: ADD_BOT_SCORE,
});

export const addPlayerScore = () => ({
  type: ADD_PLAYER_SCORE,

});