import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';

const useStyles=makeStyles(theme =>({

}))

FilterViewer.propTypes = {
    filters: PropTypes.object,
    onchange: PropTypes.func,
};

function FilterViewer(props) {
    return (
        <Box component="ul">

        </Box>
    );
}

export default FilterViewer;