import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onchange: PropTypes.func,
};

function FilterViewer(filters={}, onChange) {
  const classes = useStyles();
  return <Box component="ul"></Box>;
}

export default FilterViewer;
