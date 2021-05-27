import React from 'react';
import { Link } from 'react-router-dom';

export const VoiceLessons = () => {
    return (
        <>
          <h2 className='linkedSectionTitle'>Voice Lessons</h2>
          <p>Add a Link to Voice Lessons</p>
          <p>Add a LInk to Studio Coaching</p>
          <p>Add a Link to Testimonials</p>
          <p>Add a Link to Rates</p>
            <Link to='/'>
              <p className='buttonHome'>Home</p>
            </Link>
        </>
    )
}