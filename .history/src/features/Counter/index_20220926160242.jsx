import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const count=useSelector(state => state.count);


    const handleIncreaseClick=()=>{
        const action=
    }
    return (
        <div>
            Counter: {count}


            <div onClick={handleIncreaseClick}>Increase</div>
        </div>
    );
}

export default CounterFeature;