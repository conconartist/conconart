import React from 'react';
import { Nav } from '../Nav/Nav.js';
import Github from '../Github/Github';
import Instagram from '../Instagram/Instagram';
import Email from '../Email/Email';

export const Header = () => {
  return (
    <header>
      <div className="topHeaderRow">
        <div className="leftHeaderColumn">
          <h1 className='siteTitle'><a href="/">CONCONART</a></h1>
          <div className='headingText'>
        <p>I'm <b>Connie Hong</b>, a software developer, vocalist, songwriter, teacher, lifelong learner, and creative thinker.</p>
      </div>
          <div className="socialIconContainer">
            <a href='https://github.com/conconartist' alt='find me on github as conconartist' className='iconContainer' target='_blank' rel='noreferrer'>
              <Github />
            </a>
            <a href='https://www.instagram.com/conconartist' alt='find me on instagram under conconartist' className='iconContainer' target='_blank' rel='noreferrer'>
              <Instagram />
            </a>
            <a href="mailto:connie.hae.hong@gmail.com" alt='email me at connie.hae.hong@gmail.com' className='iconContainer' target='_blank' rel='noreferrer'>
              <Email />
            </a>
          </div>
        </div>
        <Nav />
      </div>

    </header>
  )
}
