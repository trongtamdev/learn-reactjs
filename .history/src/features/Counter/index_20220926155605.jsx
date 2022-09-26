import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const count=useSelector(state => state.count);

    return (
        <div>
            Counter: {count}


            <div >Increase</div>
        </div>
    );
}

export default CounterFeature;