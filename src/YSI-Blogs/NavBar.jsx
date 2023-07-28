import {
  AppBar, Box, Button, Stack, Toolbar, Typography,
} from '@mui/material';
import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { googleLogout } from '@react-oauth/google';
import { GlobalContext } from './BlogContext/GlobalContext';

function NavBar({ pathName }) {
  const navigate = useNavigate();
  const appState = useContext(GlobalContext);
  const { auth, setLogin } = appState;
  console.log('Auth value=', auth);
  return (
    <Box sx={{ width: '100%', height: '4rem' }}>
      <AppBar position="fixed" sx={{ height: '4rem' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box>
            <Typography><FormattedMessage id="nav.heading" /></Typography>
          </Box>
          <Stack direction="row" columnGap={3} justifyContent="flex-end" alignItems="center">
            <NavLink style={{ color: 'white', textDecoration: 'none' }} to={`${pathName}/home`}>
              <Typography><FormattedMessage id="nav.home.text" /></Typography>
            </NavLink>
            <NavLink style={{ color: 'white', textDecoration: 'none' }} to={`${pathName}/newpost`}>
              <Typography><FormattedMessage id="nav.newPost.text" /></Typography>
            </NavLink>
            <NavLink style={{ color: 'white', textDecoration: 'none' }} to={`${pathName}/aboutus`}>
              <Typography><FormattedMessage id="nav.aboutUs.text" /></Typography>
            </NavLink>
            <NavLink style={{ color: 'white', textDecoration: 'none' }} to={`${pathName}/contactus`}>
              <Typography><FormattedMessage id="nav.contactUs.text" /></Typography>
            </NavLink>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                navigate(`${pathName}/login`);
                if (auth) {
                  googleLogout();
                  setLogin(false);
                }
              }}
            >
              {
                auth ? <FormattedMessage id="blog.secondary.logout" /> : <FormattedMessage id="blog.secondary.login" />
              }
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

NavBar.propTypes = {
  pathName: PropTypes.string.isRequired,
};

export default React.memo(NavBar);
