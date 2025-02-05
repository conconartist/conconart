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
            <p>Musicians make great software developers.</p>
            <p>"Software development is similar to music in that a good coder is constantly looking to improve their code, and there are many different ways to interpret a piece or to approach a problem," she says. "Music, especially on the piano, forces your brain to think and your body to operate in multiple layers. This translates effectively into coding, especially as we get into building more in-depth web applications. You have to be able to know how to organize a large amount of complexity in the concepts you're learning, and to triage and prioritize an overwhelming amount of information at one time." - Rebecca Hurd via <a href='https://www.huffpost.com/entry/composing-code-why-musici_b_10714288' target='_blank' rel='noreferrer'>HuffPost</a></p>
            <p>As a songwriter, I have been co-writer for the band Ivory Circle since 2013, which has garnered local and national recognition with placements on Netflix, CW (Charmed), VH1 (Couples Therapy) and Showtime (The Affair promotional spot), radio airplay (including OpenAir CPR, KBCO and KTCL in the Denver-metro area), and press in several publications.</p>
            <p>In 2019, Ivory Circle was chosen to perform at the Buell Theatre in Denver as part of TedXMileHigh's Humankind Conference. With Ivory Circle, we were featured in NPR’s All Songs Considered blog for our entry in the Tiny Desk Contest for 2018.</p>
            <p>Most recently, I've been working on songs for my new project, Fair Elle. With Fair Elle, I released an album "I'm Sorry You Feel That Way" and became a featured Local303 artist at Indie102.3 in Denver.</p>
            <p>For over 18 years, I've taught private lessons, choirs, vocal ensembles, and other small vocal groups after receiving a Bachelor’s degree in Music Education with an emphasis in voice for K-12 from the University of Northern Colorado, as well as extensive performing experience in Classical, Jazz, Musical Theatre (Broadway) and contemporary technique. I still love to teach and I truly feel everyone has the capacity to become a better singer-- it's such a rewarding feeling when I can help make it happen.</p>
        </div>
      </section>
    </>
  )
}
