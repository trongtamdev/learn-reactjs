import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const form = useForm({
    defaultValues:{
        title:'',
    }
  });

  return (
    <form>
      Todo Form
      <InputField name="tittle" label form={form}></InputField>
    </form>
  );
}

export default TodoForm;
