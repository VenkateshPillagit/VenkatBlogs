import { Add } from '@mui/icons-material';
import {
  Box, Button, Card, Container, Link, List, ListItem, Stack, Typography,
} from '@mui/material';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

function BlogContent({ selectedBlog, blogsList, pathName }) {
  const navigate = useNavigate();

  return (
    <Container sx={{ position: 'relative', top: '2rem' }}>
      <Stack
        direction="row"
        flexWrap="nowrap"
        justifyContent="space-evenly"
        columnGap={2}
        sx={{
          position: 'relative',
        }}
      >
        <Box flexBasis="70%">
          <Card sx={{
            padding: '2rem', boxSizing: 'border-box',
          }}
          >
            <Typography sx={{ paddingBottom: '1rem' }} variant="h4">{selectedBlog.title}</Typography>
            <Typography sx={{ paddingBottom: '1rem' }}>
              { new Date().toDateString() }
              {' '}
              by
              <Link href="testing">{selectedBlog.author}</Link>
            </Typography>
            <Typography>
              {selectedBlog.content}
            </Typography>
          </Card>
        </Box>
        <Box flexBasis="30%">
          <Stack direction="column" rowGap={2}>
            <Card sx={{ textAlign: 'center' }}>
              <Button sx={{ width: '100%' }} endIcon={<Add />} onClick={() => navigate(`/${pathName}/newpost`)}>
                <FormattedMessage id="blog.newPost.text" />
              </Button>
            </Card>
            <Card sx={{ padding: '1rem 0rem 2rem 1rem' }}>
              <Typography variant="h5">Recent Posts</Typography>
              <List>
                {
                  blogsList.map((blog) => (
                    <ListItem key={blog.title}>
                      <NavLink to={`/${pathName}/blogs/${blog.path}`}>{blog.title}</NavLink>
                    </ListItem>
                  ))
                }
              </List>
            </Card>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

BlogContent.propTypes = {
  selectedBlog: PropTypes.objectOf(PropTypes.string).isRequired,
  blogsList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  pathName: PropTypes.string.isRequired,
};

export default BlogContent;
