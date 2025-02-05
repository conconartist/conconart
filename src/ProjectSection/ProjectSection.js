import React from 'react';
import { HomeButton } from '../HomeButton/HomeButton';
import innosolvedemo from '../assets/images/innosolve.gif';
import eagleslayhairdemo from '../assets/images/eagleslayhair.gif';
import eagleslayhairLogo from '../assets/images/eagleslayhairLogo.png';
import BackButton from '../BackButton/BackButton';

export const ProjectSection = () => {

    return (
        <>
          <div className='linkedSectionTitle'>
            <div className='categoryTitleContainer'>
              <BackButton previousPage={'/dev'}/>
              <h2>Other Projects</h2>
            </div>
          </div>
          <section className='linkedSection'>
            <div className='projectSection'>
              <h3 className='projectTitle'>Innosolve</h3>
              <img className='projectDemo' src={innosolvedemo} alt='Innosolve site demo'></img>
              <p className='projectSummary'>Innosolve.net was built with a bespoke theme on Wordpress.  A company that sells products and consultation for 3D imaging products, this site has custom CSS, designed to be responsive for mobile and tablet.  I was given the marketing materials and the client wanted to showcase their catalog on the website in a way that was concise and easy to read.</p>
              <div className='projectLink'>
                <a href='https://innosolve.net' target='_blank' rel='noreferrer'>
                  <button className='buttonOutsideLink'>
                    <p>Innosolve Website</p>
                  </button>
                </a>
              </div>
            </div>

            <div className='projectSection'>
              <h3 className='projectTitle'>Eagleslayhair</h3>
              <img className='projectDemo' src={eagleslayhairdemo} alt='Eagleslayhair site demo'></img>
              <p className='projectSummary'>Eagleslayhair.com is a portfolio website for Katie Eglsaer, a hair stylist in San Diego. I customized a template on Wix by creating a color template based around the bright colors Katie enjoys.  I had fun drawing the animation featured on the homepage, displaying Katie in the myriad of hairstyles she's sported through the years. I also created the logo for her to use on her business cards and social media.</p>
              <img className='projectPhoto' src={eagleslayhairLogo} alt='Eagleslayhair logo with turquoise background'></img>
              <div className='projectLink'>
                <a href='https://www.eagleslayhair.com' target='_blank' rel='noreferrer'>
                  <button className='buttonOutsideLink'>
                    <p>Eagleslayhair Website</p>
                  </button>
                </a>
              </div>
            </div>
          </section>
          <HomeButton />
        </>
    )
}
