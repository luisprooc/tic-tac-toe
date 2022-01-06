export const CHOOSE_ICON = 'CHOOSE_ICON';
export const CHANGE_SCENE = 'CHANGE_SCENE';

export const chooseIcon =(playerIcon, botIcon)=>({
  type: CHOOSE_ICON,
  payload: {
    botIcon,
    playerIcon,
  },
});

export const  changeScene = (scene)=>({
  type: CHANGE_SCENE,
  payload: {
    scene
  },
});
