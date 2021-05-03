import React from 'react';
import { Link } from 'react-router-dom';

export const Refashions = () => {
    return (
        <>
          <h2 className='linkedSectionTitle'>Refashions</h2>
            <Link to='/'>
              <p className='buttonHome'>Home</p>
            </Link>
        </>
    )
}