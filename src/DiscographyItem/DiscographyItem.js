import React from 'react';

const DiscographyItem = ({title, img, year, description}) => {
    //for listing links: 
    
    // const itemLinks = links.map((link) => {
    //   return <p>{link}</p>
    // })

    return (
      <div className='discoItem'>
        <h3 className='discoTitle'>{title}</h3>
        <img className='discoArt' src={img} alt='album artwork'></img>
          <h4 className='discoYear'>{year}</h4>
            <p className='discoDescription'>{description}</p>
            {/* <div className='discoLinks'>

              {itemLinks}

            </div> */}
      </div>
    )
    
}

export default DiscographyItem;