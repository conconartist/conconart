import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/stylesheets/partials/Nav.scss';

export const Nav = () => {
  return (
    <nav>
      <li className='devLink'>
        <div className='titleContainer'>
          <Link to='/dev'>
            <h2 className='mainPageLink'>Developer</h2>
          </Link>
        </div>
      </li>
      <li className='musicianLink'>
        <div className='titleContainer'>
          <Link to='/music'>
            <h2 className='mainPageLink'>Musician</h2>
          </Link>
        </div>
      </li>
      <li className='sewistLink'>
        <div className='titleContainer'>
          <Link to='/maker'>
            <h2 className='mainPageLink'>Maker</h2>
          </Link>
        </div>
      </li>
    </nav>
  )
}
