import React from 'react';
import BackButton from '../BackButton/BackButton';

export const MakerSummary = () => {
  return (
    <>
      <div className='linkedSectionTitle'>
          <div className='categoryTitleContainer'>
            <BackButton previousPage={'/'}/>
            <h2>Maker</h2>
          </div>
      </div>
      <section className='linkSection'>
        <div className='summaryContainer'>
          <p>As a sewist, Connie learned to sew at <a href='http://winter-session.com' target='_blank' rel='noreferrer'>Winter Session</a>, making canvas and leather goods.  Eventually, her sewing hobby turned to making clothes and posts her makes on social media. Most recently, she's partnered with ARC Thrift Stores to showcase repurposed fashion. She's passionate about sustainable fashion, having attended the Sustainable Fashion Forum Conference and is a Remake Ambassador.</p>
          <div className='buttonContainerFlex'>
            <a href='https://www.instagram.com/concansew/' target='_blank' rel='noreferrer'>
              <p className='buttonTwo'>ConCanSew Instagram</p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
