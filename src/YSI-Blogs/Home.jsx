import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ExpandMoreOutlined, FavoriteOutlined, ShareOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const replace = (str) => str.replace(/\s/g, '');

const getKeys = (blogsList) => blogsList.map((item) => replace(item.path));

function Home({ blogsList, pathName }) {
  const titleKeys = getKeys(blogsList);
  const newObj = {};
  titleKeys.forEach((key) => {
    newObj[key] = false;
  });
  const [expanded, setExpanded] = useState(newObj);
  const handleExpandClick = (key) => {
    setExpanded((prevState) => {
      const newState = {
        ...prevState,
        [key]: !prevState[key],
      };
      return newState;
    });
  };

  return (
    <Container sx={{ position: 'relative', top: '2rem', bottom: '2rem' }}>
      <Grid container direction="row" columnGap={2} flexWrap="wrap" rowGap={2}>
        {
          blogsList.map((item) => (
            <Grid key={item.path} item>
              <Card sx={{ width: '23.2rem', padding: '1rem' }}>
                <CardHeader
                  avatar={<Avatar>V</Avatar>}
                  title={item.title}
                  subheader={item.posteddate}
                />
                <CardContent>
                  <Typography>
                    <NavLink to={`/${pathName}/blogs/${item.path}`}>{item.title}</NavLink>
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton aria-label="add to favorites">
                    <FavoriteOutlined />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareOutlined />
                  </IconButton>
                  <ExpandMoreOutlined
                    onClick={() => handleExpandClick(replace(item.path))}
                    aria-expanded={expanded[replace(item.path)]}
                    aria-label="show more"
                    sx={{ marginLeft: 'auto' }}
                  >
                    <ExpandMoreOutlined />
                  </ExpandMoreOutlined>
                </CardActions>
                <Collapse in={expanded[replace(item.path)]} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>{item.content}</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}

Home.propTypes = {
  pathName: PropTypes.string.isRequired,
  blogsList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Home;
