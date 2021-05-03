import React from 'react';
import { Link } from 'react-router-dom';

export const Memades = () => {
    return (
        <>
          <h2 className='linkedSectionTitle'>Memades</h2>
            <Link to='/'>
              <p className='buttonHome'>Home</p>
            </Link>
        </>
    )
}