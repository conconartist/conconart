import React from 'react';
import { Link } from 'react-router-dom';

export const Press = () => {
    return (
        <>
          <h2 className='linkedSectionTitle'>Press</h2>
          <section className='pressContainer'>
              <article className='pressItem'>
                <p>"Their sound combines the soft and upbeat voice of vocalist Connie Hong, with shakers, unconventional drumming and guitar riffs and explores themes of self-identity, love and spirituality."</p>
                <p> - Symone Roque, Here's Whats New in Denver Music This March (Five Up-and-Coming Local Artists).</p>
                <a href='https://303magazine.com/2018/03/new-denver-music-march/'>303 Magazine</a>
              </article>
              <article className='pressItem'>
                <p>"For the release of Scalene, Ivory Circle played to a sold-out crowd at The Walnut Room. Hong explained that The Walnut Room holds a special place in their hearts because it was where they played one of their first headlining shows as a full band. 'It was perfect for what we needed it to be—intimate and with a stage big enough for a string quartet,' said Hong. 'We honestly never know quite what to expect as far as attendance out of any show we play so we were ecstatic to sell out and be able to end the night with a performance we are so proud of.'" </p>
                <p>- Sadye Hazan, Denver's Ivory Circle Have Completed Their Trilogy With a Masterful New EP. </p>
                <a href='https://303magazine.com/2018/03/denver-ivory-circle-new-ep/'>303 Magazine</a>
              </article>
              <article className='pressItem'>
                <p>"Lead vocalist Connie Hong soared, as her harmonic voice floated amongst the intricately woven orchestral arrangements. The electric energy that radiated from fans and friends alike drove a passion and purpose into the music that was contagious."</p>
                <p>- Veronica Lee, Slideshow: Ivory Circle- Scalene EP Release Show.</p>
                <p>Mile High Feedback</p>
              </article>
              <article className='pressItem'>
                <p>"Connie Hong, of Denver-based indie-pop trio Ivory Circle, is on a continual path of self-discovery. Her band's latest geometry-inspired EP, Scalene, addresses some of the introspection and pain that she has experienced over the past several years."</p>
                <p>- Nick Hutchinson,  Ivory Circle Celebrates Final EP of Triangle Trilogy.</p>
                <a href='https://www.westword.com/music/ivory-circle-celebrates-ep-at-denvers-walnut-room-9985706'>Westword</a>
              </article>
              <article className='pressItem'>
                <p>"Fronted by singer-songwriter Connie Hong, Ivory Circle soars with orchestral-pop anthems rooted in heart-baring songwriting. She's for fans of contemporary radio balladeers with an eye to hooks that sound like a collaboration between Vanessa Carlton and OneRepublic."</p>
                <p>- Ten Local Women Musicians to See This Month.</p>
                <a href='https://www.westword.com/music/denver-women-musicians-concerts-in-september-and-october-2017-9473584'>Westword</a>
              </article>
              <article className='pressItem'>
                <p>"What makes the group unique, however, is its songwriting. Hong draws on her experiences with heartache and loss to craft songs that are both personal and engaging for listeners, simmering with soft energy, and crescendo into grandiose, heart-on-sleeve anthems. The audience's ability to relate to her music is the driving force behind Hong's craft."</p>
                <p>- John Nicholl, Ivory Circle is on the Cusp of a New EP-- and Stealing Your Heart.</p>
                <p>Westword</p>
              </article>
              <article className='pressItem'>
                <p>"Denver’s answer to Florence and the Machine, quintet Ivory Circle serves up dynamic indie rock powered by an extraordinary female vocalist."</p>
                <p>- Alli Andress</p>
                <p>AXS</p>
              </article>
              <article className='pressItem'>
                <p>“Connie Hong is a unique and clever song writer and has the enchantingly beautiful voice to match and make Ivory Circle truly something special.”</p>
                <p>– Tiffiny Kalina</p>
                <p>Rock and Roll Romance</p>
              </article>
              <article className='pressItem'>
                <p>“Last year, Ivory Circle released a debut EP that almost exclusively featured Connie Hong and her piano. That debut was meant to be a teaser for this full-band release, which shows the huge Florence and the Machine-like vocals of Hong accompanied this time by a rich band that never overshadows her voice, but compliments it with gorgeous indie pop throughout.”</p>
                <p>- David Thomas Bailey</p>
                <a href='http://marqueemag.com/2014/04/ivory%E2%80%88circle-equilateral/'> The Marquee</a>
              </article>
              <article className='pressItem'>
                <p>“But now, Hong has taken Ivory Circle and filled it out with a full band, adding a drummer, a guitarist and a multi-instrumentalist. Ivory Circle has now fully developed into a powerhouse of cinematic rock. This is not a new sound for Ivory Circle — we still have Hong’s songwriting, vocals and piano at the core — rather the maturation of what it seems like her music has always wanted to be.”</p>
                <p>- Josh Johnson</p>
                <a href='https://theknow.denverpost.com/2014/03/17/steal-track-ivory-circle/86900/'>The Know (Denver Post)</a>
              </article>
              <article className='pressItem'>
                <p>“Ivory Circle, Entropy (Self-released). This striking and poignant five-song debut by Ivory Circle, Connie Hong’s solo project, does a great job of capturing the singer’s vocal ability. This is especially true on “Pretend”: Accompanied only by piano, Hong’s vocals are wispy and delicate at first, but a minute later, she’s belting it out à la Florence Welch."</p>
                <p>- Jon Solomon</p>
                <p>Westword</p>
              </article>
              <article className='pressItem'>
                <p>“Singer-songwriter Connie Hong writes the kind of songs that beg to serve as the closing overture for an epic and heartfelt movie that both destroys and uplifts you, her ballads simultaneously adding weight and whimsy to the scene where the star-crossed lovers run through the subway platform, finally finding one another and embracing; or that climactic moment when the heroine takes flight, leaving her tortured past behind (as indicated by the passing skyline through her car windshield).”</p>
                <p>- Courtney J.</p>
                <p>12 Questions</p>
              </article>
          </section>
            <Link to='/'>
              <p className='buttonHome'>Home</p>
            </Link>
        </>
    )
}