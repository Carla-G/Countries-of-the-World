import React from 'react';
import "./CountryCard.css";

const CountryCard = ({country}) => {
  const {name, flag} = country;

  return (
    <div>
      <h1>{name}</h1>
      <img className="flag" src={flag} alt="country's flag"/>
    </div>
  )
}

export default CountryCard;
