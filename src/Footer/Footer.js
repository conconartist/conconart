import React from 'react';
import Github from '../Github/Github';
import Twitter from '../Twitter/Twitter';
import Instagram from '../Instagram/Instagram';
import Email from '../Email/Email';

export const Footer = () => {
  return (
    <section className='summaryContainer'>
      <p className='summaryText'><b>Connie Hong</b> is a software developer, vocalist, songwriter, teacher, lifelong learner, and creative thinker.  She is the lead singer and songwriter for Ivory Circle and Fair Elle, and vocal coach in Denver, Colorado.</p>
      <div className='contactContainer'>
        <div className='socialMediaContainer'>
          <a href='https://github.com/conconartist' className='iconContainer'>
            <Github />
            <p className='ghTitle'>GitHub</p>
          </a>
          <a href='https://twitter.com/conconartist' className='iconContainer'>
            <Twitter />
            <p className='twitterTitle'>Twitter</p>
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