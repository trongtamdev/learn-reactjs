import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow:'row wrap',
    
  },
}));

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterViewer({filters={}, onChange=null}) {
  const classes = useStyles();
  return <Box component="ul"></Box>;
}

export default FilterViewer;
