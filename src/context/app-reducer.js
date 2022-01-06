import {CHOOSE_ICON, CHANGE_SCENE} from './app-actions';

export const appInitialState = {
  playerIcon: '',
  botIcon: '',
  scene: 'Intro',
  botScore: 0,
  playerScore: 0,
  rounds: 0
};

function appReducer(state, action) {
  switch (action.type) {
    case CHOOSE_ICON:
      return {
        ...state, 
        botIcon: action.payload.botIcon, 
        playerIcon: action.payload.playerIcon
      };
    case CHANGE_SCENE:
      return {...state, scene: action.payload.scene};
    default:
      return state;
  }
}

export default appReducer;