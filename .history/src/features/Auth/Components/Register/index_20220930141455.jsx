import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';

Register.propTypes = {};

function Register(props) {
  const dispatch =useD
  const handleSubmit = (values) => {
    console.log('Form submit:', values);
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit}></RegisterForm>
    </div>
  );
}

export default Register;
