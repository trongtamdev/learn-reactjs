import React from 'react';
import PropTypes from 'prop-types';
import moduleName from 'module';

Album.propTypes = {
    
};

function Album({album}) {
    return (
        <div className="album">
            <div className="album__thumbnail">
                <img src={album.thumbnailUrl} alt={album.name}></img>
            </div>


            <p className="album__name">{album.name}</p>
        </div>
    );
}

export default Album;