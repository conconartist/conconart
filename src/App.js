import React from 'react';

const App = () => {
  const openSection = () => {
    console.log('open this section')
  }
  return (
    <main>
      <h1>Conconart</h1>
      <div className='linkContainer'>
        <div className='mainLink devLink' onClick={openSection}>
          Software Engineer
          <section className='linkSection'>
            <p>Something goes here</p>
          </section>
        </div>
        <div className='mainLink musicianLink' onClick={openSection}>
          Musician
          <section className='linkSection'>
            <p>Something goes here</p>
          </section>
        </div>
        <div className='mainLink vocalLink' onClick={openSection}>
          Vocal Coach
          <section className='linkSection'>
            <p>Something goes here</p>
          </section>
        </div>
        <div className='mainLink sewistLink' onClick={openSection}>
          Sewist
          <section className='linkSection'>
            <p>Something goes here</p>
          </section>
        </div>
      </div>
      <section>
        <p>Connie Hong is cool.</p>
      </section>
    </main>
  );
}

export default App;
