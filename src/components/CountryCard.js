import React from 'react';
import './CountryCard.css';

function CountryCard({img, name}) {
  return (
    <div className="countryCard">
        <img src={img} alt={name} />
        <h2>{name}</h2>
    </div>
  )
}

export default CountryCard