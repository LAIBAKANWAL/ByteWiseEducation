import React from 'react';
import './Title.css';

const Title = ({title, size}) => {
  return (
    <div className='title' style={{ fontSize: size }}>
        <h2>{title}</h2>
    </div>
  )
}

export default Title