/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import SearchBar from "./SearchBar/SearchBar";
import CountryCard from "./CountryCard/CountryCard";
import Pagination from "./Pagination/Pagination";
import CountriesContext from "../../contexts/CountriesContext";
import "./CountriesList.css";

const CountriesList = () => {
  //countries is the state where all the countries are kept after they are fetched and fetchCountries is the function that sets countries to the information that's received from the API
    const {countries, fetchCountries} = useContext(CountriesContext);
  
  //Variables used in the pagination
    const [currentPage, setCurrentPage] = useState(1);
    const countriesPerPage = 15;
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const [currentCountries, setCurrentCountries] = useState(
    countries.slice(indexOfFirstCountry, indexOfLastCountry)
    );

    //State where the search value is kept
    const [search, setSearch] = useState("");

    //The fetchCountries is only made on the mounting phase of this component
    useEffect(() => {
        fetchCountries()
    }, [])

  return (
    <div>
        <h1>Countries</h1>
        <SearchBar search={search} setSearch={setSearch} />
        <div className='countries-list'>
          {countries && search !== "" ? 
            countries?.filter((country) => country.name.toLowerCase().startsWith(search)).map((country, index) => (
                <CountryCard country={country} key={index}/>
            )) : currentCountries?.map((country, index) => (
              <CountryCard country={country} key={index}/>
          ))
          }
        </div>
        <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setCurrentCountries={setCurrentCountries}
        indexOfFirstCountry={indexOfFirstCountry}
        indexOfLastCountry={indexOfLastCountry}
        countriesPerPage={countriesPerPage} />
    </div>
  )
}

export default CountriesList;