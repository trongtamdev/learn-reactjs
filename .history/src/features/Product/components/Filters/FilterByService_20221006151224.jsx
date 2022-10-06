import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
  range: {
    display: 'flex',
    flexbox: 'row nowrap',
    alignItems: 'center',

    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),

    '&>span': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
}));

FilterByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterByService({ filters = {}, onChange }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    isPromotion: Boolean(filters.isPromotion),
    isFreeShip: Boolean(filters.isFreeShip),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DỊCH VỤ</Typography>

      <ul>
        {['isPromotion', 'isFreeShip'].map((service) => (
          <li key={service}
          ></li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
