import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
    
};

function Album({album}) {
    return (
        <div className="album">
            <div>
                
            </div>


            <p>{album.name}</p>
        </div>
    );
}

export default Album;