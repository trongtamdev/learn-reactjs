
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
};

function AddToCartForm({onSubmit=null}) {
    const schema = yup.object().shape({
        quantity:yup.number().min(1,'Please enter at least 1').required(),
      });
      const form = useForm({
        defaultValues: {
          identifier: '',
          password: '',
        },
        resolver: yupResolver(schema),
      });
    
      const handleSubmit = async (values) => { 
        if (onSubmit) {
          await onSubmit(values);
        }
      };
    
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="quantity" label="Email" form={form}></InputField>

        <Button
      
          type="submit"

          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
         Buy
        </Button>
      </form>
    );
}

export default AddToCartForm;