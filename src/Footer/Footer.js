import React from 'react';
import Github from '../Github/Github';
import Instagram from '../Instagram/Instagram';
import Email from '../Email/Email';

export const Footer = () => {
  return (
    <section className='footerContainer'>
      <div className='contactContainer'>
        
        <a href="mailto:conconart.info@gmail.com" className='iconContainer'>
            <Email />
            <p className='emailTitle'>conconart.info@gmail.com</p>
        </a>
      </div>
    </section>
    )
}
