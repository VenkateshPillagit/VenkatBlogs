import {
  Box, Card, Container, Typography,
} from '@mui/material';
import React from 'react';
import { FormattedMessage } from 'react-intl';

function AboutUs() {
  return (
    <Container sx={{ position: 'relative', top: '2rem', bottom: '2rem' }}>
      <Card sx={{ padding: '3rem' }}>
        <Box>
          <Typography variant="h4">
            <FormattedMessage id="nav.aboutUs.text" />
          </Typography>
        </Box>
        <Box sx={{ marginTop: '1rem' }}>
          <FormattedMessage id="blog.aboutus.text" />
        </Box>
      </Card>
    </Container>
  );
}

export default AboutUs;
