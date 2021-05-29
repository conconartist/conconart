import React from 'react';
import Twitter from '../Twitter/Twitter';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <section className='contactContainer'>
      <div className='socialMediaContainer'>
        <a href='https://twitter.com/conconartist'><Twitter /></a>
      </div>
      <div className='emailContainer'>

      </div>
    </section> 
        
    )
}