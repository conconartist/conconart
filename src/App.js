import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';
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
    <main>
      <h1>Conconart</h1>
      <Route
        exact
        path='/'
        render={ () => {
          return (
            <div className='linkContainer'>
              <div className='devLink' onClick={toggleDevSection}>
                <h2 className='mainLink'>Software Engineer</h2>
                {openDevSection &&
                  <section className='linkSection'>
                    <div className='summaryContainer'>
                      <p>
                      As a software engineer, Connie is a graduate from Turing School of Software and Design with a certification in Front-End Engineering.
                      </p>
                      <ul>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS/ SCSS (Sass)</li>
                        <li>React (Redux, React Hooks, React Router)</li>
                        <li>TDD (Mocha, Chai, Cypress)</li>
                        <li>UI/UX (User Experience/ User Interface Design)</li>
                        <li>Wireframing</li>
                        <li>Project Planning (GitHub Projects, Kanban)</li>
                        <li>Figma</li>
                        <li>Twitter</li>
                        <li>Remote Learning/ Working</li>
                        <li>Responsive Web Design</li>
                      </ul>
                      <h3>What I'm currently learning:</h3>
                      <ul>
                        <li>d3</li>
                        <li>GraphQL</li>
                        <li>Postgres</li>
                      </ul>
                      <h3>What I'm currently building:</h3>
                      <ul>
                        <li>Mod 4 Capstone project: Bookworm</li>
                      </ul>
                      <h3>Available for hire?</h3>
                      <p>YES.</p>
                    </div>
                    <Link to='/portfolio'>
                      <p className='buttonOne'>Portfolio</p>
                    </Link> 
                  </section>
                }
              </div>
              <div className='musicianLink' onClick={toggleMusicSection}>
                <h2 className='mainLink'>Musician</h2>
                {openMusicSection && 
                  <section className='linkSection'>
                    <div className='summaryContainer'>
                    <p>As a songwriter, Connie has been co-writer for the band Ivory Circle since 2013, which has garnered local and national recognition with placements on CW (Charmed), VH1 (Couples Therapy) and Showtime (The Affair promotional spot), radio airplay (including OpenAir CPR, KBCO and KTCL in the Denver-metro area), and press in several publications for her dynamic vocal abilities and heartfelt songs. Most recently, she was featured in NPR’s All Songs Considered blog for Ivory Circle’s entry in the Tiny Desk Contest for 2018. Some of her writing and vocal collaborations include Holly Lovell, Aaron Wagner, Kathleen Brady (Warner Records), and Aaron Marsh (Copeland, Colombia Records). She is a member of SESAC.</p>
                    </div>
                    <Link to='/fairelle'>
                      <p className='buttonOne'>Fair Elle</p>
                    </Link>
                    <Link to='/ivorycircle'>
                      <p className='buttonTwo'>Ivory Circle</p>
                    </Link>
                  </section>
                }
              </div>
              <div className='vocalLink' onClick={toggleVocalSection}>
                <h2 className='mainLink'>Vocal Coach</h2>
                {openVocalSection && 
                  <section className='linkSection'>
                    <div className='summaryContainer'>
                    <p>As a voice teacher, Connie has taught private lessons, choirs, vocal ensembles, and other small vocal groups for over 10 years.  She has a Bachelor’s degree in Music Education with an emphasis in voice for K-12 from the University of Northern Colorado, as well as extensive performing experience in Classical, Jazz, Musical Theatre (Broadway) and contemporary technique.  A lifelong learner and student of music, she has studied voice with Diane Bolden-Taylor, Greg Jasperse, Julie Williams, Peter Eldridge (New York Voices), Dana Landry, Jerry VanderDoes, Celeste Delgado, Britt Quintin, and many others.  Some of Connie’s students have won local talent shows, been selected for All-State Choir, gotten lead roles in musical productions, and/or pursued music in college (and beyond).  For more information on taking lessons with Connie, go HERE.</p>
                    </div>
                    <Link to='/lessons'>
                      <p className='buttonOne'>Voice Lessons</p>
                    </Link>
                    <Link to='/coaching'>
                      <p className='buttonTwo'>Studio Coaching</p>
                    </Link>
                  </section>
                }
              </div>
              <div className='sewistLink' onClick={toggleMakerSection}>
                <h2 className='mainLink'>Maker</h2>
                {openMakerSection && 
                  <section className='linkSection'>
                    <div className='summaryContainer'>
                    <p>As an artist and maker, Connie is owner of Sings the Sparrow LLC, a shop of upcycled handmade wallets and small bags for men and women.  </p>
                    </div>
                    <Link to='/refashions'>
                      <p className='buttonOne'>Refashions</p>
                    </Link>
                    <Link to='/memades'>
                      <p className='buttonTwo'>MeMades</p>
                    </Link>
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
                    alt='photo portrait of Connie Hong sitting in a chair and smiling'>
                  </img>
                  <h3 className="summaryHeader">I strive to find beauty and artistic expression in everything I do, so programming is no exception.</h3>
                  <p>Recent world and life events afforded me the opportunity to begin a career in software development to explore my interests and curiosities, while helping my community (and beyond) in new ways through software engineering and frontend development. 
                  I'm passionate about sustainable fashion and minimal waste-living (especially in the realm of slow-fashion). I strive to cultivate a life of creativity and responsible-living where I can help better the world while pursuing a beautiful life of music and art.</p>
                  <p>My interests include design, crafts, sewing, travel, sitting in craft coffee shops, and taking my dogs anywhere I can bring them with me.</p>
                  <p>I collect mugs (they're the best souvenirs), things my friends made, stickers, and soon mechanical keyboards (I only have one... so far).</p>
                  <svg>Instagram</svg>
                  <svg>Twitter</svg>
                  <svg>Github</svg>
                  <p>email me</p>
                </section>
              }
              <section className='displaySummary'>
                <p className='summaryContainer'>Connie Hong is a software developer, vocalist, songwriter, teacher, lifelong learner, and creative thinker.  She is the lead singer and songwriter for Ivory Circle and Fair Elle, and vocal teacher/ coach in Denver, Colorado.</p>
              </section>
        
              </div>
            </div>
          )
        }}
      />
    </main>
  );
}

export default App;
