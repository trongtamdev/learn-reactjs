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
  onChange: PropTypes.func,
};

function FilterByService({ onChange }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
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

    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DỊCH VỤ</Typography>

      <ul>
        {['isPromotion' ,'isFreeShip'].map(service=>(
          <li key={service}>

          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
