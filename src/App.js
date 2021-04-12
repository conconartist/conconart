import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';

const App = () => {
  const [openDevSection, setOpenDevSection] = useState(false);
  const [openMusicSection, setOpenMusicSection] = useState(false);
  const [openVocalSection, setOpenVocalSection] = useState(false);
  const [openSewSection, setOpenSewSection] = useState(false);

  const toggleDevSection = () => {
    if(openDevSection === false) {
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

  const toggleSewSection = () => {
    if(openSewSection === false) {
      setOpenSewSection(true)
    } else {
      setOpenSewSection(false)
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
              <div className='mainLink devLink' onClick={toggleDevSection}>
                <h2>Software Engineer</h2>
                {openDevSection &&
                  <section className='linkSection'>
                    <p>Something goes here</p>
                    <button className='buttonOne'>Portfolio</button>
                  </section>
                }
              </div>
              <div className='mainLink musicianLink' onClick={toggleMusicSection}>
                <h2>Musician</h2>
                {openMusicSection && 
                  <section className='linkSection'>
                    <p>Something goes here</p>
                    <button className='buttonOne'>Fair Elle</button>
                    <button className='buttonTwo'>Ivory Circle</button>
                  </section>
                }
              </div>
              <div className='mainLink vocalLink' onClick={toggleVocalSection}>
                <h2>Vocal Coach</h2>
                {openVocalSection && 
                  <section className='linkSection'>
                    <p>Something goes here</p>
                    <button className='buttonOne'>Voice Lessons</button>
                    <button className='buttonTwo'>Studio Coaching</button>
                  </section>
                }
              </div>
              <div className='mainLink sewistLink' onClick={toggleSewSection}>
                <h2>Sewist</h2>
                {openSewSection && 
                  <section className='linkSection'>
                    <p>Something goes here</p>
                    <button className='buttonOne'>Refashions</button>
                    <button className='buttonTwo'>MeMades</button>
                  </section>
                }
              </div>
              <section className='summary'>
                <p>Connie Hong is cool.</p>
              </section>
            </div>
          )
        }}
      />
    </main>
  );
}

export default App;
