import { makeStyles } from '@mui/styles'
import React, { useState } from 'react';
import { TextField, Button, CircularProgress, List, ListItem, ListItemAvatar, Avatar, ListItemText, } from '@mui/material';
import axios from 'axios';
import Markdown from 'react-markdown';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '400px',
  },
  inputContainer: {
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  textField: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
  button: {
    alignSelf: 'flex-end',
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100px',
  },
}));

const ChatScreen = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (inputValue.trim() === '') {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('API_ENDPOINT_URL', { question: inputValue });
      const newMessage = {
        id: messages.length,
        content: response.data.answer,
        fromUser: false,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    } catch (error) {
      console.error('API request error:', error);
    }

    setLoading(false);
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <List>
        {messages.map((message) => (
          <ListItem key={message.id}>
            <ListItemAvatar>
              <Avatar>{message.fromUser ? 'U' : 'A'}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={<Markdown source={message.content} />}
              primaryTypographyProps={{ variant: 'body1' }}
            />
          </ListItem>
        ))}
      </List>

      <div className={classes.inputContainer}>
        <TextField
          className={classes.textField}
          label="Type your question"
          variant="outlined"
          value={inputValue}
          onChange={handleInputChange}
          disabled={loading}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSubmit}
          disabled={loading}
        >
          Send
        </Button>
      </div>

      {loading && (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default ChatScreen;
