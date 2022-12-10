/* eslint-disable no-mixed-operators */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import SearchBar from "./SearchBar/SearchBar";
import FilterContinent from "./FilterContinent/FilterContinent";
import CountryCard from "./CountryCard/CountryCard";
import Pagination from "./Pagination/Pagination";
import CountriesContext from "../../contexts/CountriesContext";
import "./CountriesList.css";

const CountriesList = () => {
    const {countries, fetchCountries, search, chosenRegion} = useContext(CountriesContext);
  
  //Variables used in the pagination
    const [currentPage, setCurrentPage] = useState(1);
    const countriesPerPage = 15;
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const [currentCountries, setCurrentCountries] = useState(
    countries.slice(indexOfFirstCountry, indexOfLastCountry)
    );

    //The fetchCountries is only made on the mounting phase of this component
    useEffect(() => {
        fetchCountries()
    }, [])

  return (
    <div className='countries-page'>
        <h1 className="countries-title">Countries List 🌏</h1>
        <div className='filters'>
          <SearchBar />
          <FilterContinent />
        </div>
        <div className='countries-list'>
          {countries && search !== "" || chosenRegion !== "" ? 
            countries?.filter((country) => chosenRegion !== "" ? country.region === chosenRegion : country).filter((country) => country.name.toLowerCase().startsWith(search)).map((country, index) => (
                <CountryCard country={country} key={index}/>
            )) : currentCountries?.map((country, index) => (
              <CountryCard country={country} key={index}/>
          ))
          }
        </div>
      {search === "" && chosenRegion === "" ?
        <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setCurrentCountries={setCurrentCountries}
        indexOfFirstCountry={indexOfFirstCountry}
        indexOfLastCountry={indexOfLastCountry}
        countriesPerPage={countriesPerPage} /> : null
      }
    </div>
  )
}

export default CountriesList;