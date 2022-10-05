import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from '@material-ui/core';

ProductSort.propTypes = {
    activeIndex:PropTypes.number.isRequired,
    onchange:PropTypes.func,
};

function ProductSort(props) {
    return (
        <Tabs>
            <Tabs >

            </Tabs>
        </Tabs>
    );
}

export default ProductSort;