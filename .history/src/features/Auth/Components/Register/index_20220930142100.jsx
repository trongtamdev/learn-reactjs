import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {


    try {
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log('New User',user);
    } catch (error) {
      console.log('object');
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit}></RegisterForm>
    </div>
  );
}

export default Register;
