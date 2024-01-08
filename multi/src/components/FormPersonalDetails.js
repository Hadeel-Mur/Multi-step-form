import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormPersonalDetails = ({ nextStep, prevStep, handleChange, values }) => {
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
        >Enter Personal Details</Typography>
      </AppBar>
      <TextField
        label="Occupation"
        onChange={handleChange('occupation')}
        defaultValue={values.occupation}
        style={styles.TextField}
      />
      <br />
      <TextField
        label="City"
        onChange={handleChange('city')}
        defaultValue={values.city}
        style={styles.TextField}
      />
      <br />
      <TextField
        label="Bio"
        onChange={handleChange('bio')}
        defaultValue={values.bio}
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
  TextField: {
    margin: 15,
    width: 300,
  },
  typo: {
    margin: 20,
  }
};

export default FormPersonalDetails;
