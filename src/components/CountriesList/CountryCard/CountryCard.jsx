import React from 'react';
import {Link} from "react-router-dom";
import "./CountryCard.css";

const CountryCard = ({country}) => {
  const {name, flag, alpha3Code} = country;

  return (
    <Link className="link-details" to={`/countries/${alpha3Code}`} >
      <div className='country-card'>
        <img className="flag" src={flag} alt="country's flag"/>
        <div className="flag-information">
          <h1 className="country-name">{name}</h1>
        </div>
      </div>
    </Link>
  )
}

export default CountryCard;
