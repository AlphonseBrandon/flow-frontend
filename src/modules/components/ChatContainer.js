import React from 'react';

import { Paper, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const ChatContainer = () => {
  return (
    <Paper elevation={3} style={{ padding: '16px', maxHeight: '400px', overflowY: 'auto' }}>
      {/* Message display area */}
      <Typography variant="h5" component="h1" gutterBottom>
      <List>
        <ListItem>
          <ListItemText primary="User1" secondary="Hello, how are you?" />
        </ListItem>
        <ListItem>
          <ListItemText primary="User2" secondary="I'm doing well. Thanks for asking!" />
        </ListItem>
        {/* Add more ListItem components for additional messages */}
      </List>

      {/* Input field */}
      <TextField label="Enter your message" variant="outlined" fullWidth />

      {/* Submit button */}
      <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
        Send
      </Button>
      </Typography>
    </Paper>
  );
}

export default ChatContainer;
