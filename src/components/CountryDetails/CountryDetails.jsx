import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./CountryDetails.css";

function CountryDetails() {
  const {id} = useParams();

  const [countryDetails, setCountryDetails] = useState([]);

  const getCountryDetails = async () => {
    await axios
      .get(`https://restcountries.com/v2/alpha/${id}`)
      .then((response) => setCountryDetails(response.data));
  };

  const {name, alpha3Code, nativeName, flag, capital, region, subregion, population, latlng, demonym, area, timezones, borders, languages, currencies, independent} = countryDetails;

  const languagesInACountry = languages?.map((language) => (language.name)).join(", ");
  const currencyInACountry = currencies?.map((currency) => (currency.name + " (" + currency.symbol + ")")).join(", ");

  useEffect(() => {
    getCountryDetails();
  }, [id]);

  return (
    <div className='details-page'>
      <div className='link-container'>
        <Link className='link-back' to="/countries">⬅️ Go back to the list of countries</Link>
      </div>
      <h1 className='country-title'>{name} ({alpha3Code})</h1>
      <div className="native-name-container">
      <h1 className='native-name-label'>Native name: </h1>
      <h1 className='native-name'> {nativeName}</h1>
      </div>
      <div className='flag-container'>
        <img className="flag-img" src={flag} alt="country's flag"/>
      </div>
      <div className='info-container'>
        <div className='info-left'>
          <h2><span className='info-label'>Latitude/Longitude:</span> {latlng?.join(" / ")}</h2>
          <h2><span className='info-label'>Region:</span> {region}</h2>
          <h2><span className='info-label'>Subregion:</span> {subregion}</h2>
          {capital === undefined ? null : <h2><span className='info-label'>Capital:</span> {capital}</h2>}
          <h2><span className='info-label'>Citizen:</span> {demonym}</h2>
          {languages === undefined ? 
            null : (<h2>
              <span className='info-label'>{languages?.length > 1 ? "Languages: " : "Language: "}</span>
              {languagesInACountry}
            </h2>)
          }
        </div>
        <div className='info-right'>
          <h2><span className='info-label'>Population:</span> {population}</h2>
          <h2><span className='info-label'>Area:</span> {area} km2</h2>
          {currencies === undefined ? 
            null : (<h2>
              <span className='info-label'>{currencies?.length > 1 ? "Currencies: " : "Currency: "}</span> 
              {currencyInACountry}
            </h2>)
          }
          {borders === undefined ?
            null : (<h2>
              <span className='info-label'>
                {borders?.length > 1 ? "Borders: " : "Border: "}
              </span>
              {borders?.map((border, index) => (
              <>
                <Link className='link-to-neighbor-country' to={`/countries/${border}`}>{border}</Link>
                <>{index < borders.length-1 && ", "}</>
              </>))}
            </h2>)
          }
          <h2><span className='info-label'>{timezones?.length > 1 ? "Timezones: " : "Timezone: "}</span> {timezones?.join(", ")}</h2>
          <h2>{name} {independent ? "is an independent country 😃" : "is not an independent country 😔"}</h2>
        </div>
      </div>
    </div>
  )
}

export default CountryDetails;