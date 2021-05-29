import React from 'react';
import Github from '../Github/Github';
import Twitter from '../Twitter/Twitter';
import Instagram from '../Instagram/Instagram';
import Email from '../Email/Email';

export const Footer = () => {
  return (
    <section className='displaySummary'>
      <p className='summaryContainer'>Connie Hong is a software developer, vocalist, songwriter, teacher, lifelong learner, and creative thinker.  She is the lead singer and songwriter for Ivory Circle and Fair Elle, and vocal teacher/ coach in Denver, Colorado.</p>
      <div className='contactContainer'>
        <div className='socialMediaContainer'>
          <a href='https://github.com/conconartist'><Github /></a>
          <a href='https://twitter.com/conconartist'><Twitter /></a>
          <a href='https://www.instagram.com/conconartist'><Instagram /></a>
        </div>
        <div className='emailContainer'>
        <a href="mailto:conconart.info@gmail.com"><Email /></a>
        </div>
      </div> 
    </section>
    )
}