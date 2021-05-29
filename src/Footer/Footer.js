import React from 'react';
import Twitter from '../Twitter/Twitter';
import Instagram from '../Instagram/Instagram';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <section className='contactContainer'>
      <div className='socialMediaContainer'>
        <a href='https://twitter.com/conconartist'><Twitter /></a>
        <a href='https://www.instagram.com/conconartist'><Instagram /></a>
      </div>
      <div className='emailContainer'>

      </div>
    </section> 
        
    )
}