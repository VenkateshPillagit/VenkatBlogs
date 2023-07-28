import {
  Button,
  Card,
  Container,
  Divider,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { GlobalContext } from '../BlogContext/GlobalContext';

function Login({ pathName }) {
  const navigate = useNavigate();
  const appState = useContext(GlobalContext);
  const { setLogin } = appState;

  return (
    <Container
      sx={{
        position: 'relative',
        top: '2rem',
        bottom: '2rem',
        width: '50%',
      }}
    >
      <Stack justifyContent="center" alignItems="center" sx={{ width: '100%', height: '100%' }}>
        <Card sx={{ width: '70%', height: '100%' }}>
          <Stack padding="2rem" rowGap={2} alignItems="center" width="100%" height="100%" justifyContent="center">
            <TextField sx={{ width: '100%' }} variant="outlined" label={<FormattedMessage id="blog.userName.label" />} />
            <TextField sx={{ width: '100%' }} variant="outlined" label={<FormattedMessage id="blog.password.label" />} />
            <Button sx={{ width: '100%', height: '3rem' }} variant="contained">Login</Button>
            <Stack direction="row" sx={{ width: '100%' }} justifyContent="center" alignItems="center">
              <Divider sx={{ width: '40%' }} />
              <Typography sx={{ padding: '0rem 0.5rem' }}>or</Typography>
              <Divider sx={{ width: '40%' }} />
            </Stack>
            <GoogleLogin
              onSuccess={() => {
                setLogin(true);
                navigate(`/${pathName}/home`);
              }}
            />
            <Stack flexDirection="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
              <Link href="test">
                <Typography paragraph>
                  <FormattedMessage id="blog.forgotPassword.text" />
                </Typography>
              </Link>
              <Link href="test">
                <Typography paragraph>
                  <FormattedMessage id="blog.forgotUserName.text" />
                </Typography>
              </Link>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}

Login.propTypes = {
  pathName: PropTypes.string.isRequired,
};

export default Login;
