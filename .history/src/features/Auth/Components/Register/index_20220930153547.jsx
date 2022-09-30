import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';

import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      //auto set user = email
      values.username = values.email;

      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      //close dialog
      const{closeDialog}=props;
      if(closeDialog){
        closeDialog()
      }

      //do something here on register successfully
      console.log('New User', user);
      enqueueSnackbar('Register successfully !!!', { variant: 'success' });
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
