import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const counter=useSelector()

    return (
        <div>
            Counter Feature
        </div>
    );
}

export default CounterFeature;