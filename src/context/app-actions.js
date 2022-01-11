export const CHOOSE_ICON = 'CHOOSE_ICON';
export const CHANGE_SCENE = 'CHANGE_SCENE';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';

export const chooseIcon =(playerIcon, botIcon)=> ({
  type: CHOOSE_ICON,
  payload: {
    botIcon,
    playerIcon,
  },
});

export const  changeScene = (scene)=> ({
  type: CHANGE_SCENE,
  payload: {
    scene
  },
});

export const  changeTurn = (turn)=> ({
  type: CHANGE_TURN,
  payload: {
    turn
  },
});

export const  ResetGame = ()=> ({
  type: RESET_GAME
});