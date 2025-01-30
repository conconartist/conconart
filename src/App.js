import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';
import { Portfolio } from './Portfolio/Portfolio';
import { Discography } from './Discography/Discography';
import { Licensing } from './Licensing/Licensing';
import { Press } from './Press/Press';
import { DevSummary } from './DevSummary/DevSummary';
import { MusicianSummary } from './MusicianSummary/MusicianSummary';
import { Footer } from './Footer/Footer';
import Headshot from './Headshot/Headshot.js';
import headshotReal from './headshotReal.jpg';
import OutArrow from './OutArrow/OutArrow.js';
import resume from './assets/ConnieHongSoftwareEngineer.pdf';
import Github from './Github/Github';
import Instagram from './Instagram/Instagram';

const App = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if(section === openSection) {
      setOpenSection(null)
    } else if(section === 'dev') {
      setOpenSection('dev')
    } else if(section === 'music') {
      setOpenSection('music')
    } else if(section === 'maker') {
      setOpenSection('maker')
    }
  }

  const displaySection = (type) => {

  }
  return (
    <>
    <header>
      <div class="topHeaderRow">
        <h1 className='siteTitle'><a href="/">CONCONART</a></h1>
        <div class="socialIconContainer">
          <a href='https://github.com/conconartist' className='iconContainer'>
            <Github />
            <p className='ghTitle'>GitHub</p>
          </a>
          <a href='https://www.instagram.com/conconartist' className='iconContainer'>
            <Instagram />
            <p className='instaTitle'>Instagram</p>
          </a>
        </div>
      </div>
      <div className='headingText'>
        <p><b>Connie Hong</b> is a software developer, vocalist, songwriter, teacher, lifelong learner, and creative thinker.</p>
      </div>
    </header>
      <main>
      <Route
        exact
        path='/'
        render={ () => {
          return (
            <>
              <ul className='linkContainer'>
                <li className='devLink'>
                  <div className='titleContainer' onClick={() => toggleSection('dev')}>
                    <h2 className='mainPageLink'>Developer</h2>
                  </div>
                </li>
                <li className='musicianLink'>
                  <div className='titleContainer' onClick={() => toggleSection('music')}>
                    <h2 className='mainPageLink'>Musician</h2>
                  </div>
                </li>
                <li className='sewistLink'>
                  <div className='titleContainer' onClick={() => toggleSection('maker')}>
                    <h2 className='mainPageLink'>Maker</h2>
                  </div>
                </li>
              </ul>
              {openSection === 'dev' &&
                <section className='linkSection'>
                  <div className='summaryContainer'>
                    <a href={resume}>
                        <p className='buttonTwo'>Resume <OutArrow /></p>
                      </a>
                    <DevSummary />
                    <div className='buttonContainer'>
                      <Link to='/portfolio'>
                        <p className='buttonOne'>Portfolio</p>
                      </Link>
                      <a href="https://www.conconartdigital.com">
                        <p className='buttonOne'>Conconart Digital <OutArrow /></p>
                      </a>
                    </div>
                  </div>
                </section>
              }
              {openSection === 'music' &&
                <section className='linkSection'>
                  <div className='summaryContainer'>
                    <MusicianSummary />
                    <div className='buttonContainer'>
                      <Link to='/discography'>
                        <p className='buttonOne'>Discography</p>
                      </Link>
                      <Link to='/licensing'>
                        <p className='buttonOne'>As Heard On</p>
                      </Link>
                      <Link to='/press'>
                        <p className='buttonOne'>Press</p>
                      </Link>
                      <a href='https://www.ivorycircle.com/'>
                        <p className='buttonTwo'>Ivory Circle <OutArrow /></p>
                      </a>
                      <a href='https://www.fairelle.me/'>
                        <p className='buttonTwo'>Fair Elle <OutArrow /></p>
                      </a>
                    </div>
                    <p>As a voice teacher, Connie has taught private lessons, choirs, vocal ensembles, and other small vocal groups for over 10 years.  She has a Bachelor’s degree in Music Education with an emphasis in voice for K-12 from the University of Northern Colorado, as well as extensive performing experience in Classical, Jazz, Musical Theatre (Broadway) and contemporary technique.  A lifelong learner and student of music, she has studied voice with Diane Bolden-Taylor, Greg Jasperse, Julie Williams, Peter Eldridge (New York Voices), Dana Landry, Jerry VanderDoes, Celeste Delgado, Britt Quintin, and many others.  Some of Connie’s students have won local talent shows, been selected for All-State Choir, gotten lead roles in musical productions, and/or pursued music in college (and beyond).</p>
                    <div className='buttonContainer'>
                      <a href='https://conconartstudio.com'>
                        <p className='buttonTwo'>Conconart Studio <OutArrow /></p>
                      </a>
                    </div>
                  </div>
                </section>
              }
              {openSection === 'maker' &&
                <section className='linkSection'>
                  <div className='summaryContainer'>
                    <p>As a sewist, Connie learned to sew at <a href='http://winter-session.com'>Winter Session</a>, making canvas and leather goods.  Eventually, her sewing hobby turned to making clothes and posts her makes on social media. Most recently, she's partnered with ARC Thrift Stores to showcase repurposed fashion. She's passionate about sustainable fashion, having attended the Sustainable Fashion Forum Conference and is a Remake Ambassador.</p>
                    <div className='buttonContainer'>
                      <a href='https://www.instagram.com/concansew/'>
                        <p className='buttonTwo'>ConCanSew Instagram <OutArrow /></p>
                      </a>
                    </div>
                  </div>
                </section>
              }

              <div className='aboutMe'>
                <section className='summary'>
                <h3>I'm Connie Hong (she/her).</h3>
                <img
                  className='realHeadshotImg'
                  src={headshotReal}
                  alt='Connie Hong sitting in a chair and smiling'>
                </img>
                <h4 className="summaryHeader">I strive to find beauty and artistic expression in everything I do.</h4>
                  <p>Experienced musician, singer-songwriter, and creative thinker. I love that I am able to explore my interests and curiosities, while helping my community (and beyond), through software engineering. Past endeavors in design, crafts, and sewing have led to a passion for sustainable and minimal waste-living (especially in the realm of slow-fashion) and content creation. These passions have helped hone an intuitive knack for digital marketing, using social media and SEO practices. I strive to cultivate a life of creativity where I can also help better the world working with a company that shares my values of authenticity and building relationships through creativity and collaboration.</p>
                  <p>My interests include thrifting, travel, sitting in coffee shops, and taking my dogs anywhere I can bring them with me.</p>
                  <p>I collect mugs (they're the best souvenirs), things my friends made, stickers, and mechanical keyboards.</p>
              </section>
              </div>
          </>
          )
        }}
      />
      <Route
        exact
        path='/portfolio'
        render={ () => {
          return (
            <Portfolio />
          )
        }}
      />
      <Route
        exact
        path='/discography'
        render={ () => {
          return (
            <Discography />
          )
        }}
      />
      <Route
        exact
        path='/licensing'
        render={ () => {
          return (
            <Licensing />
          )
        }}
      />
      <Route
        exact
        path='/press'
        render={ () => {
          return (
            <Press />
          )
        }}
      />
      <Footer />
    </main>
    </>
  );
}

export default App;
