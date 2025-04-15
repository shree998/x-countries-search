import React from 'react';
import './CountryCard.css';

function CountryCard({img, name}) {
  return (
    <div className="country-card">
        <img src={img} alt={name} />
        <h3>{name}</h3>
    </div>
  )
}

export default CountryCard