import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';

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
      return <h1>FormPersonalDetails</h1>;
    case 3:
      return <h1>confirm</h1>;
    case 4:
      return <h1>success</h1>;
    default:
      return null; 
  }
};

export default UserForm;


// import React, { Component } from 'react'
// import FormUserDetails from "./FormUserDetails"


// export class UserForm extends Component {
//     state = {
//         step: 1,
//         firstName: '',
//         lasttName: '',
//         email: '',
//         occupation: '',
//         city: '', 
//         bio: '',
//     }

//     // next step
//     nextStep = () => {
//         const {step} = this.state;
//         this.setState({
//             step : step +1
//         })
//     }
    
//      // prev  step
//      prevStep = () => {
//         const {step} = this.state;
//         this.setState({
//             step : step -1
//         })
//     }

//     // handle inputs changing values
//     handleChange = input => e => {
//         this.setState({[input]: e.target.value})
//     }

//   render() {
//     const {step} = this.state;
//     const {firstName, lastName, email, occupation, city, bio} = this.state;
//     const values = {firstName, lastName, email, occupation, city, bio}

//     switch(step){
//         case 1:
//             return(
//                 <FormUserDetails
//                 nextStep={this.nextStep}
//                 handleChange={this.handleChange}
//                 values={values}
//                 />
//             )
//             case 2:
//                 return <h1>FormPersonalDetails</h1>
//             case 3:
//                 return <h1>confirm</h1>
//             case 4:
//                 return <h1>success</h1>
//             default :
//                 return null;

//     }
//   }
// }

// export default UserForm;


