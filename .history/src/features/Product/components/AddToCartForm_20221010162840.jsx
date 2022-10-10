
import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from 'components/form-controls/PasswordField';

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
};

function AddToCartForm({onSubmit=null}) {
    const schema = yup.object().shape({
        identifier: yup.string().required('Please enter your email !').email('Please enter a valid email address !'),
        password: yup.string().required('Please enter your password !'),
      });
      const form = useForm({
        defaultValues: {
          identifier: '',
          password: '',
        },
        resolver: yupResolver(schema),
      });
    
      const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
          await onSubmit(values);
        }
      };
    
    return (
        <div>
            
        </div>
    );
}

export default AddToCartForm;