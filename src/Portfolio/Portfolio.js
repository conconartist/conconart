import React from 'react';
import { Link } from 'react-router-dom';
import bookwormintro from '../assets/bookwormintro.gif';
import lyriclavademo from '../assets/lyriclavademo.gif';

export const Portfolio = () => {

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
              <h3>Swanson Sayings</h3>
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
              <h3>Rancid Tomatillos</h3>
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
          </section>

          <Link to='/'>
            <p className='buttonHome'>Home</p>
          </Link>
        </>
    )

}