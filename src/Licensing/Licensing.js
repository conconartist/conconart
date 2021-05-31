import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';

export const Licensing = () => {
    return (
        <>
          <div className='linkedSectionTitle'>
            <div className='categoryTitleContainer'>
              <BackButton />
              <h2>As Heard On</h2>
            </div>
          </div>
            <p>“Fading Out” by Ivory Circle, as heard on CW Network’s Charmed.</p>

            <p>“Beat the Drum” by Ivory Circle, as heard on the feature film Flatball.</p>

            <p>“Beat the Drum” by Ivory Circle, as heard on the short film The Last Year.</p>

            <p>“Ashes to Ashes” by Ivory Circle, as heard on promotional spots for Showtime Network’s The Affair.</p>

            <p>“Pretend” by Ivory Circle, as heard on VH1’s Couple’s Therapy.</p>
            <Link to='/'>
              <p className='buttonHome'>Home</p>
            </Link>
        </>
    )
}