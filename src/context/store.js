import homeReducer, { homeInitialState } from './reducers/home-reducer';

const store = {
  homeState: { homeReducer,  homeInitialState}
};

export default store;