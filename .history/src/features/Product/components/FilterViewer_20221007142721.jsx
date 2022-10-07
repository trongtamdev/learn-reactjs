import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',

    margin: theme.spacing(2, 0),
    listStyleType: 'none',

    '&>li': {
      margin: 0,
      padding: theme.spacing(1),
    },
  },
}));

const FILTER_LIST=[
    {
        id:1,
        getLabel:filter=>'',
        isActive:filter=>true,
        isVisible:filter=>true,
        isRemovable:1,
        onRemove:1,
        onToggle:1,
    }
]

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterViewer({ filters = {}, onChange = null }) {
  const classes = useStyles();
  return <Box component="ul" className={classes.root}></Box>;
}

export default FilterViewer;
