import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';

export const MusicianSummary = () => {

    return (
      <>
        <div className='linkedSectionTitle'>
            <div className='categoryTitleContainer'>
              <BackButton previousPage={'/'}/>
              <h2>Musician</h2>
            </div>
        </div>
        <section className='linkSection'>
          <div className='summaryContainer'>
            <div className='buttonContainerGrid'>
              <Link to='/discography'>
                <p className='buttonOne'>Discography</p>
              </Link>
              <Link to='/licensing'>
                <p className='buttonOne'>As Heard On</p>
              </Link>
              <Link to='/press'>
                <p className='buttonOne'>Press</p>
              </Link>
              <a href='https://www.ivorycircle.com/' target='_blank' rel='noreferrer'>
                <p className='buttonTwo'>Ivory Circle</p>
              </a>
              <a href='https://www.fairelle.me/' target='_blank' rel='noreferrer'>
                <p className='buttonTwo'>Fair Elle</p>
              </a>
              <a href='https://conconartstudio.com' target='_blank' rel='noreferrer'>
                <p className='buttonTwo'>Conconart Studio</p>
              </a>
            </div>
            <p>As a songwriter, Connie has been co-writer for the band Ivory Circle since 2013, which has garnered local and national recognition with placements on Netflix, CW (Charmed), VH1 (Couples Therapy) and Showtime (The Affair promotional spot), radio airplay (including OpenAir CPR, KBCO and KTCL in the Denver-metro area), and press in several publications for her dynamic vocal abilities and heartfelt songs.</p>
            <p>In 2019, Ivory Circle was chosen to perform at the Buell Theatre in Denver as part of TedXMileHigh's Humankind Conference. With Ivory Circle, she was also featured in NPR’s All Songs Considered blog for Ivory Circle’s entry in the Tiny Desk Contest for 2018. Some of her writing and vocal collaborations include Holly Lovell, Aaron Wagner, Kathleen Brady (Warner Records), and Aaron Marsh (Copeland, Colombia Records). She is a member of SESAC.</p>
            <p>Most recently, Connie released an album "I'm Sorry You Feel That Way" under her new project, Fair Elle, and is a featured Local303 artist at Indie102.3 in Denver.</p>
            <p>As a voice teacher, Connie has taught private lessons, choirs, vocal ensembles, and other small vocal groups for over 18 years.  She has a Bachelor’s degree in Music Education with an emphasis in voice for K-12 from the University of Northern Colorado, as well as extensive performing experience in Classical, Jazz, Musical Theatre (Broadway) and contemporary technique.  A lifelong learner and student of music, she has studied voice with Diane Bolden-Taylor, Greg Jasperse, Julie Williams, Peter Eldridge (New York Voices), Dana Landry, Jerry VanderDoes, Celeste Delgado, Britt Quintin, and many others.  Some of Connie’s students have won local talent shows, been selected for All-State Choir, gotten lead roles in musical productions, and/or pursued music in college (and beyond).</p>
        </div>
      </section>
    </>
  )
}
