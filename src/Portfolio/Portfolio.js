import React from 'react';
import { Link } from 'react-router-dom';

export const Portfolio = () => {
    //link to Home
    //Bookworm and description
    //screenshot/ gif
    //link to github
    //link to deployed
    //tech stack

    //Lyric Lava
    //link to github
    //link to deployed
    //tech stack

    //FaceIt
    //link to github
    //link to deployed
    //tech stack

    //Rancid Tomatillos
    //link to github
    //link to deployed
    //tech stack

    //Swanson Sayings
    //link to github
    //link to deployed
    //tech stack

    return (
        <>
          <h2 className='linkedSectionTitle'>Portfolio</h2>
          <section className='linkedSection'>
            <h3>BookWorm</h3>
            <h3>Lyric Lava</h3>
            <h3>FaceIt</h3>
            <h3>Swanson Sayings</h3>
            <h3>Rancid Tomatillos</h3>
          </section>

          <Link to='/'>
            <p className='buttonHome'>Home</p>
          </Link>
        </>
    )

}