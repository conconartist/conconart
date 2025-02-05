import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import { Header } from './Header/Header.js';
import { Portfolio } from './Portfolio/Portfolio';
import { ProjectSection } from './ProjectSection/ProjectSection.js';
import { Discography } from './Discography/Discography';
import { Licensing } from './Licensing/Licensing';
import { Press } from './Press/Press';
import { DevSummary } from './DevSummary/DevSummary';
import { MusicianSummary } from './MusicianSummary/MusicianSummary';
import { MakerSummary } from './MakerSummary/MakerSummary.js';
import Headshot from './Headshot/Headshot.js';
import headshotReal from './headshotReal.jpg';

const App = () => {
  const [openAboutMeSection, setOpenAboutMeSection] = useState(false);

  const toggleAboutMeSection = () => {
    if(openAboutMeSection === false) {
      setOpenAboutMeSection(true)
    } else {
      setOpenAboutMeSection(false)
    }
  }

  return (
    <>
    <Header />
      <main>
      <Route
        exact
        path='/'
        render={ () => {
          return (
            <>
              <div className='aboutMe' onClick={() => toggleAboutMeSection()}>
                {!openAboutMeSection &&
                  <Headshot />
                }
                {openAboutMeSection &&
                  <section className='summary'>
                <h3>I'm Connie Hong (she/her).</h3>
                <img
                  className='realHeadshotImg'
                  src={headshotReal}
                  alt='Connie Hong sitting in a chair and smiling'>
                </img>
                <h4 className="summaryHeader">I strive to find beauty and artistic expression in everything I do.</h4>
                  <p>I am an experienced musician, singer-songwriter, and imaginative thinker. I love that I am able to explore my interests and curiosities, while helping my community (and beyond), through software engineering. Past endeavors in design, crafts, and sewing have led to a passion for sustainable and minimal waste-living (especially in the realm of slow-fashion) and content creation. These passions have helped hone an intuitive knack for digital marketing, using social media and SEO practices. I strive to cultivate a life of creativity where I can also help better the world working with a company that shares my values of authenticity and building relationships through ingenuity and collaboration.</p>
                  <p>My interests include thrifting, travel, sitting in coffee shops, and taking my dogs anywhere I can bring them with me.</p>
                  <p>I collect mugs (they're the best souvenirs), things my friends made, stickers, and mechanical keyboards.</p>
                  </section>
                }
              </div>
            </>
          )
        }}
      />
      <Route
        exact
        path='/dev'
        render={ () => {
          return (
            <DevSummary />
          )
        }}
      />
      <Route
        exact
        path='/music'
        render={ () => {
          return (
            <MusicianSummary />
          )
        }}
      />
      <Route
        exact
        path='/maker'
        render={ () => {
          return (
            <MakerSummary />
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
        path='/projects'
        render={ () => {
          return (
            <ProjectSection />
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
    </main>
    </>
  );
}

export default App;
