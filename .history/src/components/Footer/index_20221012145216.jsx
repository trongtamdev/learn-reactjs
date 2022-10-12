import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';

Footer.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100px',
    backgroundColor: theme.palette.grey[200],
  },
  text: {
    marginTop:theme.spacing(5),
    textAlign:'center',
  },
}));

function Footer(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.text}>Made by me with love !</Typography>
    </Box>
  );
}

export default Footer;
