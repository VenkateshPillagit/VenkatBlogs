import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [auth, setAuth] = useState(false);

  const setLogin = (login) => {
    setAuth(login);
  };

  const appState = useMemo(() => ({
    auth,
    setLogin,
  }));

  return (
    <GlobalContext.Provider value={appState}>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GlobalContextProvider;
