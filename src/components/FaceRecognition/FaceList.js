import React from 'react';
import './FaceRecognition.css';

const FaceList = ({ box }) => {
    if (box.length > 0) {
        return (
            box.map((boundingBox) => {
                return (
                    <div key={boundingBox.topRow} className='bounding-box'
                        style={{ top: boundingBox.topRow, right: boundingBox.rightCol, bottom: boundingBox.bottomRow, left: boundingBox.leftCol }}>
                    </div>
                );
            })
        );
    } else {
        return (<div></div>);
    }

}

export default FaceList;