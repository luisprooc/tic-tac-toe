import {CHOOSE_ICON, CHANGE_SCENE} from '../actions/home-actions';

export const homeInitialState = {
  playerIcon: '',
  botIcon: '',
  scene: 'Home'
};

function homeReducer(state, action) {
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

export default homeReducer;