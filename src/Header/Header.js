import React from 'react';
import Github from '../Github/Github';
import Instagram from '../Instagram/Instagram';
import Email from '../Email/Email';

export const Header = () => {
  return (
    <header>
      <div class="topHeaderRow">
        <h1 className='siteTitle'><a href="/">CONCONART</a></h1>
        <div class="socialIconContainer">
          <a href='https://github.com/conconartist' className='iconContainer'>
            <Github />
          </a>
          <a href='https://www.instagram.com/conconartist' className='iconContainer'>
            <Instagram />
          </a>
          <a href="mailto:connie.hae.hong@gmail.com" className='iconContainer'>
            <Email />
          </a>
        </div>
      </div>
      <div className='headingText'>
        <p><b>Connie Hong</b> is a software developer, vocalist, songwriter, teacher, lifelong learner, and creative thinker.</p>
      </div>
    </header>
  )
}
