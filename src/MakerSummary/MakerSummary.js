import React from 'react';
import { Link } from 'react-router-dom';
import OutArrow from '../OutArrow/OutArrow';

export const MakerSummary = () => {
  return (
    <>
      <section className='linkSection'>
        <div className='summaryContainer'>
          <p>As a sewist, Connie learned to sew at <a href='http://winter-session.com'>Winter Session</a>, making canvas and leather goods.  Eventually, her sewing hobby turned to making clothes and posts her makes on social media. Most recently, she's partnered with ARC Thrift Stores to showcase repurposed fashion. She's passionate about sustainable fashion, having attended the Sustainable Fashion Forum Conference and is a Remake Ambassador.</p>
          <div className='buttonContainer'>
            <a href='https://www.instagram.com/concansew/' target='_blank'>
              <p className='buttonTwo'>ConCanSew Instagram <OutArrow /></p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
