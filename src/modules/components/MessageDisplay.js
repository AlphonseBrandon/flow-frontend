import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const MessageDisplay = () => {
  return (
    <List>
      <ListItem>
        <ListItemText primary="User1" secondary="Hello, how are you?" />
      </ListItem>
      <ListItem>
        <ListItemText primary="User2" secondary="I'm doing well. Thanks for asking!" />
      </ListItem>
      {/* Add more ListItem components for additional messages */}
    </List>
  );
}

export default MessageDisplay;
