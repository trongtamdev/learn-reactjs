
import { yupResolver } from '@hookform/resolvers/yup';
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
        <div>
            
        </div>
    );
}

export default AddToCartForm;