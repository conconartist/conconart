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
          <p>I love to make stuff.</p>
          <p>My favorite thing to do in my downtime is to sew. Sewing is a lot like software development. The more you can map out your route, the more successful you will be. Don't be afraid to cut into the fabric.  Most mistakes can be fixed but  the more careful you are in the beginning, the better the product will turn out. Break up your tasks into manageable pieces. When you see the need to make revisions, take note so that you don't repeat your mistakes. Don't skimp on the details like hemming and measuring. If you don't remember what a word means (like backstitch, tack, or baste), look it up because it might be important to know. Enjoy your finished product and know you'll do an even better job when you do it again.</p>
          <p>I learned to sew at <a href='http://winter-session.com' target='_blank' rel='noreferrer'>Winter Session</a>, making canvas and leather goods. I couldn't believe I was getting paid to do something I would have probably done for free, getting to make beautiful purposeful items for people to wear. At the time, even though I was sewing everyday, I thought sewing clothes would be too hard, but my coworker convinced me otherwise.  We would stay at work after hours and use the sewing tables and machine to practice garment making.  I was hooked. Eventually, I became a pattern tester for independent makers and would post some of my makes on social media. Through this, I've partnered with ARC Thrift Stores to showcase repurposed fashion.</p>
          <p>Knowing what goes into the process of sewing, I've become even more passionate about sustainable fashion. I'm an official Remake Ambassador and Sustainable Fashion Forum member.</p>
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
