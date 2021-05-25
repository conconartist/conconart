import React from 'react';
import { Link } from 'react-router-dom';
import bookwormintro from '../assets/bookwormintro.gif';

export const Portfolio = () => {
    //Bookworm and description
    //link to github
    //link to deployed
    //tech stack

    //Lyric Lava
    //link to github
    //link to deployed
    //tech stack

    //FaceIt
    //link to github
    //link to deployed
    //tech stack

    //Rancid Tomatillos
    //link to github
    //link to deployed
    //tech stack

    //Swanson Sayings
    //link to github
    //link to deployed
    //tech stack

    return (
        <>
          <h2 className='linkedSectionTitle'>Portfolio</h2>
          <section className='linkedSection'>
            <div className='projectSection'>
              <h3>BookWorm</h3>
              <p className='projectSummary'>A web application that tracks reading progress, aimed at young readers.</p>
              <img src={bookwormintro}></img>
              <h4 className='techStackTitle'>Tech Stack:</h4>
              <ul className='projectTechStack'>
                <li>React</li>
                <li>SCSS</li>
              </ul>
            </div>
            <div className='projectSection'>
              <h3>Lyric Lava</h3>
              <h4 className='techStackTitle'>Tech Stack:</h4>
            </div>
            <div className='projectSection'>
              <h3>FaceIt</h3>
              <h4 className='techStackTitle'>Tech Stack:</h4>
            </div>
            <div className='projectSection'>
              <h3>Swanson Sayings</h3>
              <h4 className='techStackTitle'>Tech Stack:</h4>
            </div>
            <div className='projectSection'>
              <h3>Rancid Tomatillos</h3>
              <h4 className='techStackTitle'>Tech Stack:</h4>
            </div>
          </section>

          <Link to='/'>
            <p className='buttonHome'>Home</p>
          </Link>
        </>
    )

}