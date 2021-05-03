import React from 'react';
import { Link } from 'react-router-dom';

export const IvoryCircle = () => {
    return (
        <>
          <h2 className='linkedSectionTitle'>Ivory Circle</h2>
            <Link to='/'>
              <p className='buttonHome'>Home</p>
            </Link>
        </>
    )
}