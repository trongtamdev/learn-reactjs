import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList =[
        {
            id: 1,
            name: 'Quá Đáng (Single)',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/5/a/a/e5aa3f0446dcf105ff81bb97185113a0.jpg'
        },
        {
            id: 2,
            name: 'This Love (Single)',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/5/8/f/658ff37673c5f770b636bf97118552de.jpg'
        },
        {
            id: 3,
            name: 'Em đau lắm đấy',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/a/1/a/1a1a0e394dbbca4f789c33e85952cbf9.jpg'
        }
    ]

    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumLis}
        </div>
    );
}

export default AlbumFeature;