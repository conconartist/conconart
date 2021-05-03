import React from 'react';
import { Link } from 'react-router-dom';

export const StudioCoaching = () => {
    return (
        <>
          <h2 className='linkedSectionTitle'>Studio Coaching</h2>
            <Link to='/'>
              <p className='buttonHome'>Home</p>
            </Link>
        </>
    )
}