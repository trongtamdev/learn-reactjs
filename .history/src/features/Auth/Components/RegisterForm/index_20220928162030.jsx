import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
// import InputField from 'components/form-controls/InputField';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required('Please enter title').min(5, 'Title is too short'),
  });
  const form = useForm({
    defaultValues: {
      title: '',
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

  return (
    <div>
        <Avatar>
            <LockOutlined
        </Avatar>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="title" label="Todo" form={form}></InputField>
      </form>
    </div>
  );
}

export default RegisterForm;
