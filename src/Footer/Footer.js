import React from 'react';
import Github from '../Github/Github';
import Instagram from '../Instagram/Instagram';
import Email from '../Email/Email';

export const Footer = () => {
  return (
    <section className='summaryContainer'>
      <div className='contactContainer'>
        <div className='socialMediaContainer'>
          <a href='https://github.com/conconartist' className='iconContainer'>
            <Github />
            <p className='ghTitle'>GitHub</p>
          </a>
          <a href='https://www.instagram.com/conconartist' className='iconContainer'>
            <Instagram />
            <p className='instaTitle'>Instagram</p>
          </a>
        </div>
        <a href="mailto:conconart.info@gmail.com" className='iconContainer'>
            <Email />
            <p className='emailTitle'>conconart.info@gmail.com</p>
        </a>
      </div>
    </section>
    )
}
