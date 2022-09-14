import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};

function ColorBox(props) {
    const [color, setColor] = useState('white')

    return (
        <div>
            {color}
            
        </div>
    );
}

export default ColorBox;