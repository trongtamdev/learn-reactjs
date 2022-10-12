import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';

Footer.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    height: '75px',
    margin: theme.spacing()
    paddingTop: theme.spacing(5),
    backgroundColor: theme.palette.grey[300],
  },
  text: {
    textAlign: 'center',
  },
}));

function Footer(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.text}>Made by me with love !</Typography>
      <Typography className={classes.text}>"Learn to work, work to learn"</Typography>
    </Box>
  );
}

export default Footer;
