import React from 'react';
import { HomeButton } from '../HomeButton/HomeButton';
import bookwormintro from '../assets/images/bookwormintro.gif';
import lyriclavademo from '../assets/images/lyriclavademo.gif';
import faceitdemo from '../assets/images/faceitdemo.gif';
import swansondemo from '../assets/images/swansondemo.gif';
import tomatillosdemo from '../assets/images/tomatillosdemo.gif';
import BackButton from '../BackButton/BackButton';
import OutArrow from '../OutArrow/OutArrow';

export const Portfolio = () => {

    return (
        <>
          <div className='linkedSectionTitle'>
            <div className='categoryTitleContainer'>
              <BackButton previousPage={'/dev'}/>
              <h2>Portfolio</h2>
            </div>
          </div>
          <section className='linkedSection'>
            <div className='projectSection'>
              <h3 className='projectTitle'>FaceIt</h3>
              <img className='projectDemo' src={faceitdemo} alt='FaceIt app demo'></img>
              <p className='projectSummary'>FaceIt is a Progressive Web Application that informs and helps the concerned & conscientious consumer find curated beauty products that match their lifestyle.</p>
              <div className='projectTechStack'>
                <h4 className='techStackTitle'>Technologies Used:</h4>
                <ul className='techStackList'>
                  <li>React</li>
                  <li>JavaScript(ES6)</li>
                  <li>CSS</li>
                  <li>Cypress</li>
                  <li>Lighthouse</li>
                  <li>Heroku</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MySQL</li>
                </ul>
              </div>
              <div className='projectLink'>
                <a href='https://github.com/conconartist/face-it'>
                  <button className='buttonOutsideLink'>
                    <p>Github Repo</p>
                    <OutArrow />
                  </button>
                </a>
                <a href='https://face-it-blue.vercel.app/'>
                  <button className='buttonOutsideLink'>
                    <p>Deployed Site</p>
                    <OutArrow />
                  </button>
                </a>
              </div>
            </div>

            <div className='projectSection'>
              <h3 className='projectTitle'>BookWorm</h3>
              <img className='projectDemo' src={bookwormintro} alt='bookWorm app demo'></img>
              <p className='projectSummary'>BookWorm is an app aimed at young readers that allows a user be able track their reading progress. The app includes features that let the user add "bookmarks", comments, and ratings of each book during the user's reading journey.</p>
              <div className='projectTechStack'>
                <h4 className='techStackTitle'>Technologies Used:</h4>
                <ul className='techStackList'>
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
              <div className='projectLink'>
                <a href='https://github.com/conconartist/book-worm-fe'>
                  <button className='buttonOutsideLink'>
                    <p>Github Repo</p>
                    <OutArrow />
                  </button>
                </a>
                <a href='https://book-worm-2.herokuapp.com/home'>
                  <button className='buttonOutsideLink'>
                    <p>Deployed Site</p>
                    <OutArrow />
                  </button>
                </a>
              </div>
            </div>

            <div className='projectSection'>
              <h3 className='projectTitle'>Lyric Lava</h3>
              <img className='projectDemo' src={lyriclavademo} alt='Lyric Lava app demo'></img>
              <p className='projectSummary'>Lyric Lava is a songwriting app for those who are suffering from writer's block. It utilizes the Words API and generating random prompts, as well as a thesaurus and rhyming resource when the user is writing out lyrics for a song.</p>
              <div className='projectTechStack'>
                <h4 className='techStackTitle'>Technologies Used:</h4>
                <ul className='techStackList'>
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
              <div className='projectLink'>
                <a href='https://github.com/conconartist/lyric-lava'>
                  <button className='buttonOutsideLink'>
                    <p>Github Repo</p>
                    <OutArrow />
                  </button>
                </a>
                <a href='https://lyric-lava.vercel.app/'>
                  <button className='buttonOutsideLink'>
                    <p>Deployed Site</p>
                    <OutArrow />
                  </button>
                </a>
              </div>
            </div>

            <div className='projectSection'>
              <h3 className='projectTitle'>Swanson Says</h3>
              <img className='projectDemo' src={swansondemo} alt='Swanson Sayings app demo'></img>
              <p className='projectSummary'>Swanson Says is an app utilizing the open API of random generated quotes from the TV show "Parks and Recreation" as said by the character, Ron Swanson.</p>
              <div className='projectTechStack'>
                <h4 className='techStackTitle'>Technologies Used:</h4>
                <ul className='techStackList'>
                  <li>React</li>
                  <li>JavaScript(ES6)</li>
                  <li>CSS</li>
                  <li>HTML</li>
                </ul>
              </div>
              <div className='projectLink'>
                <a href='https://github.com/conconartist/swanson-sayings'>
                  <button className='buttonOutsideLink'>
                    <p>Github Repo</p>
                    <OutArrow />
                  </button>
                </a>
                <a href='https://swanson-says.herokuapp.com/'>
                  <button className='buttonOutsideLink'>
                    <p>Deployed Site</p>
                    <OutArrow />
                  </button>
                </a>
              </div>
            </div>

            <div className='projectSection'>
              <h3 className='projectTitle'>Rancid Tomatillos</h3>
              <img className='projectDemo' src={tomatillosdemo} alt='Rancid Tomatillos app demo'></img>
              <p className='projectSummary'>Inspired by the popular film rating sites, Rancid Tomatillos is a single page application where users can interact with a display of several movies and view specific information based on the movies chosen. A user can search movies by title, sort movies alphabetically, or see movies in order of their average rating.</p>
              <div className='projectTechStack'>
                <h4 className='techStackTitle'>Technologies Used:</h4>
                <ul className='techStackList'>
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
              <div className='projectLink'>
                <a href='https://github.com/conconartist/rancid-tomatillos'>
                  <button className='buttonOutsideLink'>
                    <p>Github Repo</p>
                    <OutArrow />
                  </button>
                </a>
                <a href='https://rancid-tomatillos-lake.vercel.app/'>
                  <button className='buttonOutsideLink'>
                    <p>Deployed Site</p>
                    <OutArrow />
                  </button>
                </a>
              </div>
            </div>
          </section>
          <HomeButton />
        </>
    )
}
