import React from 'react';
import { Link } from 'react-router-dom';

export const HomeButton = () => {
    return (
        <>
            <Link to='/'>
              <p className='buttonHome'>Home</p>
            </Link>
        </>
    )
}