import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from 'components/form-controls/PasswordField';
// import InputField from 'components/form-controls/InputField';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },

  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    margin: theme.spacing(2, 0, 2, 0),
    textAlign: 'center',
  },

  submit: {
    margin: theme.spacing(2, 0, 2, 0),
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    // title: yup.string().required('Please enter title').min(5, 'Title is too short'),
    fullName: yup
      .string()
      .required('Please enter your full name !')
      .test('should has at least two words', 'Please enter at least two words !', (value) => {
        console.log('Value', value);
        return value.split(' ').length >= 2;
      }),
    email: yup.string().required('Please enter your email !').email('Please enter a valid email address !'),
    password: yup.string().required('Please enter your password !').min(6, 'Please enter at least 6 characters !'),
    retypePassword: yup
      .string()
      .required('Please retype your password !')
      .oneOf([yup.ref('password')], 'Password does not match'),
  });
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  const {isSubmitting}=form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && }

      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Create An Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form}></InputField>
        <InputField name="email" label="Email" form={form}></InputField>
        <PasswordField name="password" label="Password" form={form}></PasswordField>
        <PasswordField name="retypePassword" label="Retype Password" form={form}></PasswordField>

        <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
          Create an Account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
