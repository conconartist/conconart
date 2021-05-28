import React from 'react';
import { Link } from 'react-router-dom';

export const Licensing = () => {
    return (
        <>
          <h2 className='linkedSectionTitle'>As Heard On</h2>
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