
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

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
        if (onSubmit) {
          await onSubmit(values);
        }
      };
    
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form}></InputField>
        <PasswordField name="password" label="Password" form={form}></PasswordField>

        <Button
          disabled={isSubmitting}
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Sign In
        </Button>
      </form>
    );
}

export default AddToCartForm;