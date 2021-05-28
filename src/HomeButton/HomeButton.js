import React from 'react';
import { Link } from 'react-router-dom';

export const HomeButton = () => {
    return (
        <div className='buttonContainer'>
            <Link to='/'>
              <p className='buttonHome'>Home</p>
            </Link>
        </div>
    )
}