import React, { createContext } from 'react';
import store from './store';

export const AppContext = createContext();

const MyContext = ({ children }) => {
  
  return (
    <AppContext.Provider value={store}>
      { children }
    </AppContext.Provider>
  )
};

export default MyContext;