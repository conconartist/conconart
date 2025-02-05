import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';
import resume from '../assets/ConnieHongSoftwareEngineer.pdf';

export const DevSummary = () => {

    return (
      <>
        <div className='linkedSectionTitle'>
            <div className='categoryTitleContainer'>
              <BackButton previousPage={'/'}/>
              <h2>Developer</h2>
            </div>
        </div>
        <section className='linkSection'>
          <div className='summaryContainer'>
            <div className='buttonContainerGrid'>
              <a href={resume} target='_blank' rel='noreferrer'>
                <p className='buttonTwo'>Resume</p>
              </a>
              <a href='https://www.linkedin.com/in/connie-h-hong/' target='_blank' rel='noreferrer'>
                <p className='buttonTwo'>LinkedIn</p>
              </a>
              <Link to='/portfolio'>
                <p className='buttonOne'>Portfolio</p>
              </Link>
              {/* <a href='https://www.conconartdigital.com' target='_blank' rel='noreferrer'>
                <p className='buttonOne'>Conconart Digital</p>
              </a> */}
              <Link to='/projects'>
                <p className='buttonOne'>Other Projects</p>
              </Link>
            </div>
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
            <p>Growing up in a household with one shared desktop computer on a bulky desk against a wall in the living room, coding was a unique mystery to me.  I would spend some evenings after school customizing my Angelfire website devoted to scanned drawings I made of myself playing the piano and figuring out how to upload 30 second clips of songs I recorded. When I had a Myspace profile, I would spend hours browsing user profiles, wondering how they got theirs to look the way it did.</p>
            <p>Back then, I'm not even sure I knew what programming was but I knew it was a skill that would help me to create more.  I was limited by templates and choosing only what was in front of me.  I wanted to know how to build something from scratch.</p>
            <p>After years of teaching and playing music, I seized my opportunity in 2020 when being forced indoors gave me time to pursue other endeavors I might not have otherwise.  Initially, I considered the path of UX design but what I really wanted to do was learn how to code and further implement the designs in a more kinesthetic way by implementation.  As I had hoped, learning Javascript was the gateway to bring ideas to life in a new format and I haven't looked back since!</p>
            <p>I specialize in front end engineering and the user experience with a keen eye for design. I love a collaborative environment but I also enjoy solitary work and getting in the "zone". I am a proud graduate from <a href='https://turing.edu/' target='_blank' rel='noreferrer'>Turing School of Software and Design</a> with a certification in Front-End Engineering.</p>
          </div>
        </section>
      </>
    )
}
