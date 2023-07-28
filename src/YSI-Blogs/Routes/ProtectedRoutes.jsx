import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GlobalContext } from '../BlogContext/GlobalContext';

function ProtectedRoutes({ pathName, children }) {
  const appState = useContext(GlobalContext);
  const { auth } = appState;

  if (!auth) {
    return (
      <Navigate to={`/${pathName}/login`} />
    );
  }

  return (
    <Box>
      {children}
    </Box>
  );
}

ProtectedRoutes.propTypes = {
  pathName: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ProtectedRoutes;
