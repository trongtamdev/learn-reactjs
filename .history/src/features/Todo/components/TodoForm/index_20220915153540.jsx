import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const form = useForm({
    defaultValues:{
        title:'',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) =>{
    console.log('TODO FORM:',  values)
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      Todo Form
      <InputField name="tittle" label="Todo" form={form}></InputField>
    </form>
  );
}

export default TodoForm;
