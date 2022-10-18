import React from 'react';
import PropTypes from 'prop-types';

listItems.propTypes = {
    listItems: PropTypes.array,
};

listItems.propTypes={
    listItems:[]
}

function listItems({listItems}) {
    return (
        <div>
            <ul>
                {listItems.map(list=>{})}
            </ul>
        </div>
    );
}

export default listItems;