import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';

Footer.propTypes = {
    
};

const useStyles=makeStyles((theme)=>({
    root:{}
}))

function Footer(props) {
    const classes=useStyles()
    return (
        <Box className={classes.root}>
            <Typo
        </Box>
    );
}

export default Footer;