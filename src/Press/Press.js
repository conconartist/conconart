import React from 'react';
import { Link } from 'react-router-dom';

export const Press = () => {
    return (
        <>
          <h2 className='linkedSectionTitle'>Press</h2>
            <Link to='/'>
              <p className='buttonHome'>Home</p>
            </Link>
        </>
    )
}