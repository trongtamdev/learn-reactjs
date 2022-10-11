import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

CartFeature.propTypes = {
    
};

function CartFeature(props) {
    const cartTotal=useSelector(cartTota)
    return (
        <div>
            Cart Feature
        </div>
    );
}

export default CartFeature;