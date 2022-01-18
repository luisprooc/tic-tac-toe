import {CHOOSE_ICON, CHANGE_SCENE, CHANGE_TURN, RESET_GAME, SET_ROUNDS} from './app-actions';

export const appInitialState = {
  playerIcon: '',
  botIcon: '',
  scene: 'INTRO',
  botScore: 0,
  playerScore: 0,
  rounds: 0,
  turn: ''
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

    case CHANGE_TURN:
      return {...state, turn: action.payload.turn};

    case RESET_GAME:
      return {...appInitialState};

    case SET_ROUNDS:
      return {...state, rounds: action.payload.reset ? 0 : state.rounds + 1};

    default:
      return state;
  }
}

export default appReducer;