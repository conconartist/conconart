import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';
import { Portfolio } from './Portfolio/Portfolio';
import { Discography } from './Discography/Discography';
import { Licensing } from './Licensing/Licensing';
import { Press } from './Press/Press';
import { DevSummary } from './DevSummary/DevSummary';
import { Footer } from './Footer/Footer';
import Headshot from './Headshot/Headshot.js';
import headshotReal from './headshotReal.jpg';

const App = () => {
  const [openDevSection, setOpenDevSection] = useState(false);
  const [openMusicSection, setOpenMusicSection] = useState(false);
  const [openVocalSection, setOpenVocalSection] = useState(false);
  const [openMakerSection, setOpenMakerSection] = useState(false);
  const [openAboutMeSection, setOpenAboutMeSection] = useState(false)

  const toggleDevSection = () => {
    if(openDevSection === false){
      setOpenDevSection(true)
    } else {
      setOpenDevSection(false)
    }
  } 

  const toggleMusicSection = () => {
    if(openMusicSection === false) {
      setOpenMusicSection(true)
    } else {
      setOpenMusicSection(false)
    }
  }

  const toggleVocalSection = () => {
    if(openVocalSection === false) {
      setOpenVocalSection(true)
    } else {
      setOpenVocalSection(false)
    }
  }

  const toggleMakerSection = () => {
    if(openMakerSection === false) {
      setOpenMakerSection(true)
    } else {
      setOpenMakerSection(false)
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
              <div className='devLink' onClick={toggleDevSection}>
                <h2 className='mainPageLink'>Software Engineer</h2>
                {openDevSection && 
                  <section className='linkSection'>
                    <div className='summaryContainer'>
                      <DevSummary />
                      <div className='buttonContainer'>
                        <Link to='/portfolio'>
                          <p className='buttonOne'>Portfolio</p>
                        </Link> 
                        {/* Link to conconart Digital */}
                      </div>
                    </div>
                  </section>
                }
              </div>
              <div className='musicianLink' onClick={toggleMusicSection}>
                <h2 className='mainPageLink'>Musician</h2>
                {openMusicSection && 
                  <section className='linkSection'>
                    <div className='summaryContainer'>
                      <p>As a songwriter, Connie has been co-writer for the band Ivory Circle since 2013, which has garnered local and national recognition with placements on CW (Charmed), VH1 (Couples Therapy) and Showtime (The Affair promotional spot), radio airplay (including OpenAir CPR, KBCO and KTCL in the Denver-metro area), and press in several publications for her dynamic vocal abilities and heartfelt songs.</p>
                      <p>In 2019, Ivory Circle was chosen to perform at the Buell Theatre in Denver as part of TedXMileHigh's Humankind Conference. With Ivory Circle, she was also featured in NPR’s All Songs Considered blog for Ivory Circle’s entry in the Tiny Desk Contest for 2018. Some of her writing and vocal collaborations include Holly Lovell, Aaron Wagner, Kathleen Brady (Warner Records), and Aaron Marsh (Copeland, Colombia Records). She is a member of SESAC.</p>
                      <p>Most recently, Connie released an album "I'm Sorry You Feel That Way" under her new project, Fair Elle, and is a featured Local303 artist for the month of April at Indie102.3 in Denver.</p>
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
                          <button className='buttonTwo'>Ivory Circle</button>
                        </a>
                        <a href='https://www.fairelle.me/'>
                          <button className='buttonTwo'>Fair Elle</button>
                        </a>
                      </div>
                    </div>
                  </section>
                }
              </div>
              <div className='vocalLink' onClick={toggleVocalSection}>
                <h2 className='mainPageLink'>Vocal Coach</h2>
                {openVocalSection && 
                  <section className='linkSection'>
                    <div className='summaryContainer'>
                      <p>As a voice teacher, Connie has taught private lessons, choirs, vocal ensembles, and other small vocal groups for over 10 years.  She has a Bachelor’s degree in Music Education with an emphasis in voice for K-12 from the University of Northern Colorado, as well as extensive performing experience in Classical, Jazz, Musical Theatre (Broadway) and contemporary technique.  A lifelong learner and student of music, she has studied voice with Diane Bolden-Taylor, Greg Jasperse, Julie Williams, Peter Eldridge (New York Voices), Dana Landry, Jerry VanderDoes, Celeste Delgado, Britt Quintin, and many others.  Some of Connie’s students have won local talent shows, been selected for All-State Choir, gotten lead roles in musical productions, and/or pursued music in college (and beyond).</p>
                      <div className='buttonContainer'>
                        <a href='https://conconartstudio.com'>
                          <button className='buttonTwo'>Conconart Studio</button>
                        </a>
                      </div>
                    </div>
                  </section>
                }
              </div>
              <div className='sewistLink' onClick={toggleMakerSection}>
                <h2 className='mainPageLink'>Maker</h2>
                {openMakerSection && 
                  <section className='linkSection'>
                    <div className='summaryContainer'>
                      <p>As an artist and maker, Connie is owner of Sings the Sparrow LLC (a shop of upcycled handmade wallets and small bags) and Wear the Sparrow (a shop of upcycled and handmade accessories).  Both shops can be found on Etsy.</p>
                      <p>As a sewist, Connie learned to sew at <a href='http://winter-session.com'>Winter Session</a>, making canvas and leather goods.  Eventually, her sewing hobby turned to making clothes and posts her makes on social media. Most recently, she's partnered with ARC Thrift Stores to showcase repurposed fashion.</p>
                      <div className='buttonContainer'>
                        <a href='https://www.instagram.com/concansew/'>
                          <p className='buttonTwo'>ConCanSew Instagram</p>
                        </a>
                        <a href='https://singsthesparrow.etsy.com'>
                          <p className='buttonTwo'>Sings the Sparrow on Etsy</p>
                        </a>
                        <a href='https://wearthesparrow.etsy.com'>
                          <p className='buttonTwo'>Wear the Sparrow on Etsy</p>
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
                    <svg>Instagram</svg>
                    <svg>Twitter</svg>
                    <svg>Github</svg>
                    <p>email me</p>
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
