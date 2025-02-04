import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../assets/ConnieHongSoftwareEngineer.pdf';

export const DevSummary = () => {

    return (
      <section className='devContainer linkSection'>
        <div className="summaryContainer">
          <a href={resume} target='_blank' rel='noreferrer'>
            <p className='buttonTwo'>Resume</p>
          </a>
          <p>Connie Hong is an experienced developer, specializing in front end engineering and the user experience with a keen eye for design. She loves a collaborative environment but also enjoys solitary work and getting in the "zone".  She's a proud graduate from <a href='https://turing.edu/'>Turing School of Software and Design</a> with a certification in Front-End Engineering.
          </p>
          <h3>Skills:</h3>
          <ul className='techStackList'>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Ruby on Rails</li>
            <li>HTML</li>
            <li>CSS/ SCSS (Sass)</li>
            <li>Github</li>
            <li>Bootstrap</li>
            <li>TDD (Mocha, Chai, Jest, Cypress, Rspec)</li>
            <li>GIT</li>
            <li>Redux</li>
            <li>RESTful APIs</li>
            <li>UI/UX (User Experience/ User Interface Design)</li>
            <li>Wireframing</li>
            <li>Project Planning (Pivotal Tracker, GitHub Projects, Kanban)</li>
            <li>Agile workflow</li>
            <li>Figma</li>
            <li>Adobe Photoshop</li>
            <li>Responsive Web Design</li>
            <li>Deployment (Netlify, Vercel, Heroku, GH Pages)</li>
          </ul>
          <div className='buttonContainer'>
            <Link to='/portfolio'>
              <p className='buttonOne'>Portfolio</p>
            </Link>
            {/* <a href='https://www.conconartdigital.com' target='_blank' rel='noreferrer'>
              <p className='buttonOne'>Conconart Digital</p>
            </a> */}
            <Link to='/projects'>
              <p className='buttonOne'>Projects</p>
            </Link>
          </div>
        </div>
      </section>
    )
}
