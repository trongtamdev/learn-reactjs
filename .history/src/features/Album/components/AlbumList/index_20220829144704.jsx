import React from 'react';
import PropTypes from 'prop-types';

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AlbumList({albumList}) {

    return (
        <ul className="alum-list">
            {albumList.map()}
            
        </ul>
    );
}

export default AlbumList;