import React from 'react';
import { Link } from 'react-router-dom';
import DiscographyItem from '../DiscographyItem/DiscographyItem';
import imsorry from '../assets/imsorry.jpg';
import entropy from '../assets/entropy.jpeg';
import equilateral from '../assets/equilateral.jpeg';
import factorfriction from '../assets/factorfriction.jpeg';
import burntheeffigy from '../assets/burntheeffigy.jpeg';
import badvibrations from '../assets/badvibrations.jpeg';
import isosceles from '../assets/isoscelesart.jpeg';
import rewritten from '../assets/rewritten.jpeg';
import dummy from '../assets/dummy.jpeg';
import scalene from '../assets/scalene.jpeg';
import thinair from '../assets/thinair.jpeg';
import slipaway from '../assets/slipaway.jpg';
import trigger from '../assets/trigger.jpg';
import wewillrun from '../assets/wewillrun.jpg';

export const Discography = () => {
//filter by fairelle/ivorycircle/feature?

    const items = [
      {title: 'I\'m Sorry You Feel That Way', year: 2021, imgSrc: imsorry, description: "Full length album by Fair Elle"},
      {title: 'We Will Run', year: 2020, imgSrc: wewillrun, description: "Single by Ivory Circle"},
      {title: "Trigger", year: 2020, imgSrc: trigger, description: "Single by Ivory Circle"},
      {title: "Slip Away", year: 2019, imgSrc: slipaway, description: "Single by Ivory Circle"},
      {title: "Scalene", year: 2018, imgSrc: scalene, description: "EP by Ivory Circle"}, 
      {title: "In Florida", year: 2016, imgSrc: badvibrations, description: "Single from Bad Vibrations Deluxe Edition by A Day to Remember"}, 
      {title: "Burn the Effigy", year: 2015, imgSrc: burntheeffigy, description: "Feature on full length album by Breach & Bellow"}, 
      {title: "Isosceles", year: 2015, imgSrc: isosceles, description: "EP by Ivory Circle"}, 
      {title: "Rewritten", year: 2014, imgSrc: rewritten, description: "Full length album by Edbrooke Collective"}, 
      {title: "(In Love With a) Dummy", year: 2015, imgSrc: dummy, description: "Feature on full length album by Soul Daddy"}, 
      {title: "Equilateral", year: 2014, imgSrc: equilateral, description: "EP by Ivory Circle"}, 
      {title: "Entropy", year: 2013, imgSrc: entropy, description: "EP by Ivory Circle"}, 
      {title: "Thin Air", year: 2012, imgSrc: thinair, description: "EP by Reviving Cecilia"}, 
      {title: "Fact or Friction", year: 2011, imgSrc: factorfriction, description: "EP by Reviving Cecilia"}, 
    ]

    const discoItems = items.map((item) => {
    
      return <DiscographyItem 
        title={item.title}
        key={item.title}
        year={item.year}
        img={item.imgSrc}
        description={item.description}
      />
    })
    return (
      <>
        <h2 className='linkedSectionTitle'>Discography</h2>
          <section className='discographyGrid'>

            {discoItems}
         
          </section>
        <Link to='/'>
        <p className='buttonHome'>Home</p>
        </Link>
      </>
    )
}