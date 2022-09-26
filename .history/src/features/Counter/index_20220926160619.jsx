import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { increase } from './counterSlice';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const dispatch= useD
    const count=useSelector(state => state.count);


    const handleIncreaseClick=()=>{
        const action= increase(); //action creator
    }
    return (
        <div>
            Counter: {count}


            <div onClick={handleIncreaseClick}>Increase</div>
        </div>
    );
}

export default CounterFeature;