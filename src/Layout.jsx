import React, { useReducer } from 'react';
import { Global } from '@emotion/core';
import ResetStyle from './lib/resetStyle';
import Theme from './lib/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import AppContext from './Context/AppContext';
import reducer from './Reducers/reducer';

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, false);
  return (
    <>
      <Global styles={ResetStyle} />
        <Theme>
          <AppContext.Provider value={{ state, dispatch }}>
            <Header />
            {children}
            <Footer />
          </AppContext.Provider>
        </Theme>
    </>
  );
}