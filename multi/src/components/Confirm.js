import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const Confirm = ({ nextStep, prevStep, values }) => {
  const continueClick = (e) => {
    e.preventDefault();
    nextStep();
  };

  const backClick = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <React.Fragment>
       <AppBar position="static">
        <Typography 
        variant="h6"
        style={styles.typo}
        >Confirm User Data</Typography>
      </AppBar>
      <List>
      <ListItem>
          <ListItemText primary="First Name" secondary={values.firstName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Last Name" secondary={values.lastName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={values.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Occupation" secondary={values.occupation} />
        </ListItem>
        <ListItem>
          <ListItemText primary="City" secondary={values.city} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Bio" secondary={values.bio} />
        </ListItem>
      </List>
      <br />
      <Button
        variant="contained"
        color="primary"
        style={styles.button}
        onClick={continueClick}
      >
        Confirm
      </Button>
      <br />
      <Button
        variant="contained"
        color="primary"
        style={styles.button}
        onClick={backClick}
      >
        Back
      </Button>
    </React.Fragment>
  );
};

const styles = {
  button: {
    margin: 15,
  },
  typo: {
    margin: 20,
  }
};

export default Confirm;
