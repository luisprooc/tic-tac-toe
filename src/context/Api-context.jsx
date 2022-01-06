import React, { createContext, useReducer } from 'react';
import appReducer, { appInitialState } from './app-reducer';

export const AppContext = createContext();

const MyContext = ({ children }) => {

  const [state, dispatch] = useReducer(appReducer, appInitialState);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      { children }
    </AppContext.Provider>
  )
};

export default MyContext;