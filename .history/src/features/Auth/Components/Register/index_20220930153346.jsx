import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';

import { register } from 'features/Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
const {enqueueSnackbar}=useSnackbar();

  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      //auto set user = email
      values.username=values.email;

      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      //do something here on register successfully
      console.log('New User', user);
      enqueueSnackbar('Register successfully !!!',{variant: 'success'});
    } catch (error) {
      console.log('Failed to register:', error);
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit}></RegisterForm>
    </div>
  );
}

export default Register;
