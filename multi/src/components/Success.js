import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

const Success = () => {

  return (
    <React.Fragment>
       <AppBar position="static">
        <Typography 
        variant="h6"
        style={styles.typo}
        >Success
        </Typography>
        <h1 style={styles.typo}>Thank You For Your Submission!</h1>
        <p style={styles.typo}>You will receive an email for further instructions!</p>
      </AppBar>
    </React.Fragment>
  );
};

const styles = {
  typo: {
    margin: 20,
  }
};

export default Success;
