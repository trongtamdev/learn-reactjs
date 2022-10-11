import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, makeStyles } from '@material-ui/core';
import { NavLink, useRouteMatch } from 'react-router-dom';

ProductMenu.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',

    padding: 0,
    listStyleType: 'none',

    '& > li': {
      padding: theme.spacing(2, 4),
    },
    '& > li> a': {
      color:theme.palette.grey[700],
    },
  },
}));

function ProductMenu(props) {
  const classes = useStyles();

  const { url } = useRouteMatch();

  return (
    <Box component="ul">
      <li>
        <Link component={NavLink} to={url}>
          Description
        </Link>
      </li>

      <li>
        <Link component={NavLink} to={`${url}/additional`}>
          Additional Information
        </Link>
      </li>

      <li>
        <Link component={NavLink} to={`${url}/reviews`}>
          Reviews
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
