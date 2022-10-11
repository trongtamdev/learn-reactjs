import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link } from '@material-ui/core';


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