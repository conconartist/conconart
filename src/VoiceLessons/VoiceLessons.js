import React from 'react';
import { Link } from 'react-router-dom';

export const VoiceLessons = () => {
    return (
        <>
          <h2 className='linkedSectionTitle'>Voice Lessons</h2>
            <Link to='/'>
              <p className='buttonHome'>Home</p>
            </Link>
        </>
    )
}