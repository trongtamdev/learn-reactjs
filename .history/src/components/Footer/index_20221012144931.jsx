import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';

Footer.propTypes = {
    
};

const useStyles=makeStyles((theme)=>({
    root:{
        height:'200px'
    },
    text:{},
}))

function Footer(props) {
    const classes=useStyles()
    return (
        <Box className={classes.root}>
            <Typography>Made by me with love </Typography>
        </Box>
    );
}

export default Footer;