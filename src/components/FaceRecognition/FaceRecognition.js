import React from 'react';
import './FaceRecognition.css';
import FaceList from './FaceList';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' src={imageUrl} alt='' width='500px' height='auto' />
                <FaceList box={box} />
            </div>
        </div>
    );
}

export default FaceRecognition;