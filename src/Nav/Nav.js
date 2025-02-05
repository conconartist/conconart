import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/stylesheets/partials/Nav.scss';

export const Nav = () => {
  return (
    <nav>
      <li className='devLink'>
        <div className='titleContainer'>
          <Link to='/dev' className='mainPageLink'>
            Developer
          </Link>
        </div>
      </li>
      <li className='musicianLink'>
        <div className='titleContainer'>
          <Link to='/music' className='mainPageLink'>
            Musician
          </Link>
        </div>
      </li>
      <li className='sewistLink'>
        <div className='titleContainer'>
          <Link to='/maker' className='mainPageLink'>
            Maker
          </Link>
        </div>
      </li>
    </nav>
  )
}
