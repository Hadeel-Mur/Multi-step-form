import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormUserDetails = ({ nextStep, handleChange, values }) => {
  const continueClick = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <React.Fragment>
       <AppBar position="static">
        <Typography 
        variant="h6"
        style={styles.typo}
        >Enter User Details</Typography>
      </AppBar>
      <TextField
        label="First Name"
        onChange={handleChange('firstName')}
        defaultValue={values.firstName}
        style={styles.TextField}
      />
      <br />
      <TextField
        label="Last Name"
        onChange={handleChange('lastName')}
        defaultValue={values.lastName}
        style={styles.TextField}
      />
      <br />
      <TextField
        label="Email"
        onChange={handleChange('email')}
        defaultValue={values.email}
        style={styles.TextField}
      />
      <br />
      <Button
        variant="contained"
        color="primary"
        style={styles.button}
        onClick={continueClick}
      >
        Continue
      </Button>
    </React.Fragment>
  );
};

const styles = {
  button: {
    margin: 15,
  },
  TextField: {
    margin: 15,
    width: 300,
  },
  typo: {
    margin: 20,
  }
};

export default FormUserDetails;
