import {
  Box,
  Button,
  Container, Paper, Stack, TextField,
} from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

function NewPost({ setBlogsList, pathName }) {
  const [post, setPost] = useState({
    title: '',
    content: '',
    path: '',
    author: '',
  });
  const navigate = useNavigate();
  return (
    <Container sx={{
      position: 'relative', top: '2rem',
    }}
    >
      <Paper sx={{ padding: '2rem' }}>
        <Stack spacing={2}>
          <TextField
            label={<FormattedMessage id="newPost.title.label" />}
            value={post.title}
            onChange={(event) => setPost((prevState) => {
              const newPost = {
                ...prevState,
                title: event.target.value,
              };
              return newPost;
            })}
          />
          <TextField
            rows={10}
            variant="outlined"
            multiline
            label={<FormattedMessage id="newPost.content.label" />}
            value={post.content}
            onChange={(event) => setPost((prevState) => {
              const newPost = {
                ...prevState,
                content: event.target.value,
              };
              return newPost;
            })}
          />
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
          >
            <TextField
              label={<FormattedMessage id="newPost.path.label" />}
              sx={{ width: '90%' }}
              value={post.path}
              onChange={(event) => setPost((prevState) => {
                const newPost = {
                  ...prevState,
                  path: event.target.value,
                };
                return newPost;
              })}
            />
            <Button
              variant="contained"
              onClick={() => {
                setBlogsList((prevState) => [...prevState, post]);
                navigate(`/${pathName}/blogs/${post.path}`);
              }}
            >
              <FormattedMessage id="newPost.button.label" />
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
}

NewPost.propTypes = {
  setBlogsList: PropTypes.func.isRequired,
  pathName: PropTypes.string.isRequired,
};

export default NewPost;
