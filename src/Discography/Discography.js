import React from 'react';
import { Link } from 'react-router-dom';

export const Discography = () => {

    const items = [
      {title: "I'm Sorry You Feel That Way", year: 2021, imgSrc: "", description: "Full length album by Fair Elle", links: []},
      {title: "We Will Run", year: 2020, imgSrc: "", description: "Single by Ivory Circle", links: []},
      {title: "Trigger", year: 2020, imgSrc: "", description: "Single by Ivory Circle", links: []},
      {title: "Slip Away", year: 2019, imgSrc: "", description: "Single by Ivory Circle", links: []},
      {title: "Scalene", year: 2018, imgSrc: "", description: "EP by Ivory Circle", links: []}, 
      {title: "In Florida", year: 2016, imgSrc: "", description: "Single from Bad Vibrations Deluxe Edition by A Day to Remember", links: []}, 
      {title: "Burn the Effigy", year: 2015, imgSrc: "", description: "Feature on full length album by Breach & Bellow", links: []}, 
      {title: "Isosceles", year: 2015, imgSrc: "", description: "EP by Ivory Circle", links: []}, 
      {title: "Rewritten", year: 2014, imgSrc: "", description: "Full length album by Edbrooke Collective", links: []}, 
      {title: "(In Love With a) Dummy", year: 2015, imgSrc: "", description: "Feature on full length album by Soul Daddy", links: []}, 
      {title: "Equilateral", year: 2014, imgSrc: "", description: "EP by Ivory Circle", links: []}, 
      {title: "Entropy", year: 2013, imgSrc: "", description: "EP by Ivory Circle", links: []}, 
      {title: "Thin Air", year: 2012, imgSrc: "", description: "EP by Reviving Cecilia", links: []}, 
      {title: "Fact or Friction", year: 2011, imgSrc: "", description: "EP by Reviving Cecilia", links: []}, 
    ]

    const discoItems = items.map((item) => {
      return (
        <div className='discoItem'>
              <h3 className='discoTitle'>{item.title}</h3>
              <img src='{item.imgSrc}' alt='{item.title} album artwork'></img>
              <h4 className='discoYear'>{item.year}</h4>
              <p className='discoDescription'>{item.description}</p>
              <p>{item.links}</p>
            </div>
      )
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