import React from 'react';
import PropTypes from 'prop-types';
import Album f

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AlbumList({albumList}) {

    return (
        <ul className="alum-list">
            {albumList.map(album =>(
                <li key={album.id}>
                    <Album album = {album} />
                </li>
            ))}
            
        </ul>
    );
}

export default AlbumList;