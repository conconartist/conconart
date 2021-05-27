import React from 'react';
import { Link } from 'react-router-dom';
import DiscographyItem from '../DiscographyItem/DiscographyItem';
import imsorry from '../assets/imsorry.jpg';
import entropy from '../assets/entropy.jpeg';
import equilateral from '../assets/equilateral.jpeg';
import factorfriction from '../assets/factorfriction.jpeg';
import isosceles from '../assets/isosceles.jpeg';
import scalene from '../assets/scalene.jpeg';
import thinair from '../assets/thinair.jpeg';

export const Discography = () => {

    const items = [
      {title: 'I\'m Sorry You Feel That Way', year: 2021, imgSrc: imsorry, description: "Full length album by Fair Elle", links: ['www.hello.com']},
      {title: 'We Will Run', year: 2020, imgSrc: "", description: "Single by Ivory Circle", links: []},
      {title: "Trigger", year: 2020, imgSrc: "", description: "Single by Ivory Circle", links: []},
      {title: "Slip Away", year: 2019, imgSrc: "", description: "Single by Ivory Circle", links: []},
      {title: "Scalene", year: 2018, imgSrc: scalene, description: "EP by Ivory Circle", links: []}, 
      {title: "In Florida", year: 2016, imgSrc: "", description: "Single from Bad Vibrations Deluxe Edition by A Day to Remember", links: []}, 
      {title: "Burn the Effigy", year: 2015, imgSrc: "", description: "Feature on full length album by Breach & Bellow", links: []}, 
      {title: "Isosceles", year: 2015, imgSrc: isosceles, description: "EP by Ivory Circle", links: []}, 
      {title: "Rewritten", year: 2014, imgSrc: "", description: "Full length album by Edbrooke Collective", links: []}, 
      {title: "(In Love With a) Dummy", year: 2015, imgSrc: "", description: "Feature on full length album by Soul Daddy", links: []}, 
      {title: "Equilateral", year: 2014, imgSrc: equilateral, description: "EP by Ivory Circle", links: []}, 
      {title: "Entropy", year: 2013, imgSrc: entropy, description: "EP by Ivory Circle", links: []}, 
      {title: "Thin Air", year: 2012, imgSrc: thinair, description: "EP by Reviving Cecilia", links: []}, 
      {title: "Fact or Friction", year: 2011, imgSrc: factorfriction, description: "EP by Reviving Cecilia", links: []}, 
    ]

    const discoItems = items.map((item) => {
    
      return <DiscographyItem 
        title={item.title}
        key={item.title}
        year={item.year}
        img={item.imgSrc}
        description={item.description}
        links={item.links}
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