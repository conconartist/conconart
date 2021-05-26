import React from 'react';
import { Link } from 'react-router-dom';
import bookwormintro from '../assets/bookwormintro.gif';
import lyriclavademo from '../assets/lyriclavademo.gif';
import faceitdemo from '../assets/faceitdemo.gif';
import swansondemo from '../assets/swansondemo.gif';
import tomatillosdemo from '../assets/tomatillosdemo.gif';

export const Portfolio = () => {

    return (
        <>
          <h2 className='linkedSectionTitle'>Portfolio</h2>
          <section className='linkedSection'>

            <div className='projectSection'>
              <h3>BookWorm</h3>
              <div className='projectLink'>
                <a href='https://github.com/conconartist/book-worm-fe'>
                  <button className='buttonOutsideLink'>Github Repo</button>
                </a>
                <a href='https://book-worm-2.herokuapp.com/home'>
                  <button className='buttonOutsideLink'>Deployed Site</button>
                </a>
              </div>
              <img className='projectDemo' src={bookwormintro} alt='bookWorm app demo'></img>
              <p className='projectSummary'>BookWorm is an app aimed at young readers that allows a user be able track their reading progress. The app includes features that let the user add "bookmarks", comments, and ratings of each book during the user's reading journey.</p>
              <ul className='projectTechStack'>
                <h4 className='techStackTitle'>Technologies Used:</h4>
                <li>React with React Hooks</li>
                <li>JavaScript(ES6)</li>
                <li>JSX</li>
                <li>SCSS</li>
                <li>Cypress</li>
                <li>Circle CI</li>
                <li>Lighthouse</li>
                <li>Heroku</li>
                <li>Miro</li>
                <li>Figma</li>
                <li>D3</li>
                <li>GSAP (Greensock)</li>
              </ul>
            </div>

            <div className='projectSection'>
              <h3>Lyric Lava</h3>
              <div className='projectLink'>
                <a href='https://github.com/conconartist/lyric-lava'>
                  <button className='buttonOutsideLink'>Github Repo</button>
                </a>
                <a href='https://lyric-lava.vercel.app/'>
                  <button className='buttonOutsideLink'>Deployed Site</button>
                </a>
              </div>
              <img className='projectDemo' src={lyriclavademo} alt='Lyric Lava app demo'></img>
              <p className='projectSummary'>Lyric Lava is a songwriting app for those who are suffering from writer's block. It utilizes the Words API and generating random prompts, as well as a thesaurus and rhyming resource when the user is writing out lyrics for a song.</p>
              <ul className='projectTechStack'>
                <h4 className='techStackTitle'>Technologies Used:</h4>
                <li>React with React Hooks</li>
                <li>JavaScript(ES6)</li>
                <li>JSX</li>
                <li>CSS</li>
                <li>Cypress</li>
                <li>Lighthouse</li>
                <li>Vercel</li>
                <li>Miro</li>
              </ul>
            </div>

            <div className='projectSection'>
              <h3>FaceIt</h3>
              <div className='projectLink'>
                <a href='https://github.com/conconartist/face-it'>
                  <button className='buttonOutsideLink'>Github Repo</button>
                </a>
                <a href='https://face-it.vercel.app/'>
                  <button className='buttonOutsideLink'>Deployed Site</button>
                </a>
              </div>
              <img className='projectDemo' src={faceitdemo} alt='FaceIt app demo'></img>
              <p className='projectSummary'>FaceIt is a Progressive Web Application that informs and helps the concerned & conscientious consumer find curated beauty products that match their lifestyle.</p>
              <ul className='projectTechStack'>
                <h4 className='techStackTitle'>Technologies Used:</h4>
                <li>React</li>
                <li>JavaScript(ES6)</li>
                <li>CSS</li>
                <li>Cypress</li>
                <li>Lighthouse</li>
                <li>Heroku</li>
              </ul>
            </div>

            <div className='projectSection'>
              <h3>Swanson Says</h3>
              <div className='projectLink'>
                <a href='https://github.com/conconartist/swanson-sayings'>
                  <button className='buttonOutsideLink'>Github Repo</button>
                </a>
                <a href='https://swanson-says.herokuapp.com/'>
                  <button className='buttonOutsideLink'>Deployed Site</button>
                </a>
              </div>
              <img className='projectDemo' src={swansondemo} alt='Swanson Sayings app demo'></img>
              <p className='projectSummary'>Swanson Says is an app utilizing the open API of random generated quotes from the TV show "Parks and Recreation" as said by the character, Ron Swanson.</p>
              <ul className='projectTechStack'>
                <h4 className='techStackTitle'>Technologies Used:</h4>
                <li>React</li>
                <li>JavaScript(ES6)</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            </div>

            <div className='projectSection'>
              <h3>Rancid Tomatillos</h3>
              <div className='projectLink'>
                <a href='https://github.com/conconartist/rancid-tomatillos'>
                  <button className='buttonOutsideLink'>Github Repo</button>
                </a>
                <a href='https://rancid-tomatillos-lake.vercel.app/'>
                  <button className='buttonOutsideLink'>Deployed Site</button>
                </a>
              </div>
              <img className='projectDemo' src={tomatillosdemo} alt='Rancid Tomatillos app demo'></img>
              <p className='projectSummary'>Inspired by the popular film rating sites, Rancid Tomatillos is a single page application where users can interact with a display of several movies and view specific information based on the movies chosen. A user can search movies by title, sort movies alphabetically, or see movies in order of their average rating.</p>
              <ul className='projectTechStack'>
                <h4 className='techStackTitle'>Technologies Used:</h4>
                <li>React with React Hooks</li>
                <li>JavaScript(ES6)</li>
                <li>SCSS</li>
                <li>Cypress</li>
                <li>Moment.js</li>
                <li>Lighthouse</li>
                <li>Vercel</li>
                <li>Miro</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </section>

          <Link to='/'>
            <p className='buttonHome'>Home</p>
          </Link>
        </>
    )

}