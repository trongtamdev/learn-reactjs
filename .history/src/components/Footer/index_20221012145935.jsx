import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';

Footer.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100px',
    backgroundColor: theme.palette.grey[300],
  },
  text: {
    paddingTop:theme.spacing(5),
    textAlign:'center',
  },
}));

function Footer(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.text}><p>Made by me with love ! </p>
      <p>"Learn to work, work to learn"</p></Typography>
      <Typography className={classes.text}>"Learn to work, work to learn"</Typography>
    </Box>
  );
}

export default Footer;
