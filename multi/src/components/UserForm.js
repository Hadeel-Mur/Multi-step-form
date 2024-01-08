import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
  });

  // Next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle input changes
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const values = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    occupation: formData.occupation,
    city: formData.city,
    bio: formData.bio,
  };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return <h1>confirm</h1>;
    case 4:
      return <h1>success</h1>;
    default:
      return null; 
  }
};

export default UserForm;


