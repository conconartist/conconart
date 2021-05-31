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
import Arrow from './Arrow/Arrow.js';
import OutArrow from './OutArrow/OutArrow.js';
import resume from './assets/ConnieHongResume.pdf';

const App = () => {
  const [openDevSection, setOpenDevSection] = useState(false);
  const [openMusicSection, setOpenMusicSection] = useState(false);
  const [openVocalSection, setOpenVocalSection] = useState(false);
  const [openMakerSection, setOpenMakerSection] = useState(false);
  const [openAboutMeSection, setOpenAboutMeSection] = useState(false);
  const [devArrowDirection, setDevArrowDirection] = useState('down');
  const [musicArrowDirection, setMusicArrowDirection] = useState('down');
  const [vocalArrowDirection, setVocalArrowDirection] = useState('down');
  const [makerArrowDirection, setMakerArrowDirection] = useState('down');

  const toggleDevSection = () => {
    if(openDevSection === false){
      setOpenDevSection(true)
      setDevArrowDirection('up')
    } else {
      setOpenDevSection(false)
      setDevArrowDirection('down')
    }
  } 

  const toggleMusicSection = () => {
    if(openMusicSection === false) {
      setOpenMusicSection(true)
      setMusicArrowDirection('up')
    } else {
      setOpenMusicSection(false)
      setMusicArrowDirection('down')
    }
  }

  const toggleVocalSection = () => {
    if(openVocalSection === false) {
      setOpenVocalSection(true)
      setVocalArrowDirection('up')
    } else {
      setOpenVocalSection(false)
      setVocalArrowDirection('down')
    }
  }

  const toggleMakerSection = () => {
    if(openMakerSection === false) {
      setOpenMakerSection(true)
      setMakerArrowDirection('up')
    } else {
      setOpenMakerSection(false)
      setMakerArrowDirection('down')
    }
  }

  const toggleAboutMeSection = () => {
    if(openAboutMeSection === false) {
      setOpenAboutMeSection(true)
    } else {
      setOpenAboutMeSection(false)
    }
  }
  return (
    <>
    <header>
      <h1>Conconart</h1>
    </header>
      <main>
      <Route
        exact
        path='/'
        render={ () => {
          return (
            <div className='linkContainer'>

              <div className='devLink'>
                <div className='titleContainer' onClick={toggleDevSection}>
                  <h2 className='mainPageLink'>Software Engineer</h2>
                  <Arrow category='devSection' direction={devArrowDirection}/>
                </div>
                {openDevSection && 
                  <section className='linkSection'>
                    <div className='summaryContainer'>
                      <DevSummary />
                      <div className='buttonContainer'>
                        <Link to='/portfolio'>
                          <p className='buttonOne'>Portfolio</p>
                        </Link> 
                        <a href={resume}>
                          <p className='buttonTwo'>Resume <OutArrow /></p>
                        </a>
                        {/* Link to conconart Digital */}
                      </div>
                    </div>
                  </section>
                }
              </div>

              <div className='musicianLink'>
                <div className='titleContainer' onClick={toggleMusicSection}>
                  <h2 className='mainPageLink'>Musician</h2>
                  <Arrow category='musicianSection' direction={musicArrowDirection} />
                </div>
                {openMusicSection && 
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
                    </div>
                  </section>
                }
              </div>

              <div className='vocalLink'>
                <div className='titleContainer' onClick={toggleVocalSection}>
                  <h2 className='mainPageLink'>Vocal Coach</h2>
                  <Arrow category='vocalSection' direction={vocalArrowDirection}/>
                </div>
                {openVocalSection && 
                  <section className='linkSection'>
                    <div className='summaryContainer'>
                      <p>As a voice teacher, Connie has taught private lessons, choirs, vocal ensembles, and other small vocal groups for over 10 years.  She has a Bachelor’s degree in Music Education with an emphasis in voice for K-12 from the University of Northern Colorado, as well as extensive performing experience in Classical, Jazz, Musical Theatre (Broadway) and contemporary technique.  A lifelong learner and student of music, she has studied voice with Diane Bolden-Taylor, Greg Jasperse, Julie Williams, Peter Eldridge (New York Voices), Dana Landry, Jerry VanderDoes, Celeste Delgado, Britt Quintin, and many others.  Some of Connie’s students have won local talent shows, been selected for All-State Choir, gotten lead roles in musical productions, and/or pursued music in college (and beyond).</p>
                      <div className='buttonContainer'>
                        <a href='https://conconartstudio.com'>
                          <p className='buttonTwo'>Conconart Studio <OutArrow /></p>
                        </a>
                      </div>
                    </div>
                  </section>
                }
              </div>

              <div className='sewistLink'>
                <div className='titleContainer' onClick={toggleMakerSection}>
                  <h2 className='mainPageLink'>Maker</h2>
                  <Arrow category='makerSection' direction={makerArrowDirection}/>
                </div>
                {openMakerSection && 
                  <section className='linkSection'>
                    <div className='summaryContainer'>
                      <p>As an artist and maker, Connie is owner of Sings the Sparrow LLC (a shop of upcycled handmade wallets and small bags) and Wear the Sparrow (a shop of upcycled and handmade accessories).  Both shops can be found on Etsy.</p>
                      <p>As a sewist, Connie learned to sew at <a href='http://winter-session.com'>Winter Session</a>, making canvas and leather goods.  Eventually, her sewing hobby turned to making clothes and posts her makes on social media. Most recently, she's partnered with ARC Thrift Stores to showcase repurposed fashion.</p>
                      <div className='buttonContainer'>
                        <a href='https://www.instagram.com/concansew/'>
                          <p className='buttonTwo'>ConCanSew Instagram <OutArrow /></p>
                        </a>
                        <a href='https://singsthesparrow.etsy.com'>
                          <p className='buttonTwo'>Sings the Sparrow on Etsy <OutArrow /></p>
                        </a>
                        <a href='https://wearthesparrow.etsy.com'>
                          <p className='buttonTwo'>Wear the Sparrow on Etsy <OutArrow /></p>
                        </a>
                      </div>
                    </div>
                  </section>
                }
              </div>

              <div className='aboutMe' onClick={toggleAboutMeSection}>
                {!openAboutMeSection &&
                  <Headshot />
                }
                {openAboutMeSection && 
                  <section className='summary'>
                  <h2>I'm Connie Hong (she/her).</h2> 
                  <img
                    className='realHeadshotImg'
                    src={headshotReal}
                    alt='Connie Hong sitting in a chair and smiling'>
                  </img>
                  <h3 className="summaryHeader">I love to find beauty and artistic expression in everything I do, so programming is no exception.</h3>
                    <p>Recent world and life events afforded me the opportunity to begin a career in software development to explore my interests and curiosities, while helping my community (and beyond) in new ways through software engineering and frontend development. 
                    I'm passionate about sustainable fashion and minimal waste-living (especially in the realm of slow-fashion). I strive to cultivate a environment of creativity and responsible-living where I can help better the world, while pursuing a beautiful life full of music and art.</p>
                    <p>My interests include design, crafts, sewing, travel, sitting in craft coffee shops, and taking my dogs anywhere I can bring them with me.</p>
                    <p>I collect mugs (they're the best souvenirs), things my friends made, stickers, and soon mechanical keyboards (I only have one... so far).</p>
                </section>
              }
              </div>
            </div>
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
