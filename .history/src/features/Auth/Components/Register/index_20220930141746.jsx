import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

Register.propTypes = {};

function Register(props) {
  const dispatch =useDispatch();

  const handleSubmit = (values) => {
    console.log('Form submit:', values);

    const resultAction = await dispatch()
    const user= unwrapResult(resultAction)
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit}></RegisterForm>
    </div>
  );
}

export default Register;
