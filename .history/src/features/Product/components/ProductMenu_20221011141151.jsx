import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link } from '@material-ui/core';
import { NavLink } from 'react-router-dom';


ProductMenu.propTypes = {
    
};

function ProductMenu(props) {
    return (
        <Box component="ul">
            <li>
                <Link component={NavLink}></Link>
            </li>
        </Box>
    );
}

export default ProductMenu;