import React from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, makeStyles } from '@material-ui/core';

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

const FILTER_LIST = [
  {
    id: 1,
    getLabel: (filters) => 'Giao hàng miễn phí',
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
        const newFilters={...filters};
        if()

        return newFilters;
    },
  },
  {
    id: 2,
    getLabel: (filters) => 'Có khuyến mãi',
    isActive: (filters) => true,
    isVisible: (filters) => true,
    isRemovable: true,
    onRemove: (filters) => {},
    onToggle: (filters) => {},
  },
  {
    id: 3,
    getLabel: (filters) => 'Khoảng giá',
    isActive: (filters) => true,
    isVisible: (filters) => true,
    isRemovable: true,
    onRemove: (filters) => {},
    onToggle: (filters) => {},
  },
  {
    id: 4,
    getLabel: (filters) => 'Danh mục',
    isActive: (filters) => true,
    isVisible: (filters) => true,
    isRemovable: true,
    onRemove: (filters) => {},
    onToggle: (filters) => {},
  },
];

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterViewer({ filters = {}, onChange = null }) {
  const classes = useStyles();
  return (
    <Box component="ul" className={classes.root}>
      {FILTER_LIST.filter((x) => x.isVisible(filters)).map((x) => (
        <li key={x.id}>
          <Chip
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? 'primary' : 'default'}
            clickable={x.isRemovable ? null : () => {}}
            onDelete={x.isRemovable ? () => {} : null}
          ></Chip>
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;
