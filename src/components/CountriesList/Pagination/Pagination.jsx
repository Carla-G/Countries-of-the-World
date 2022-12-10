/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import CountriesContext from "../../../contexts/CountriesContext";
import "./Pagination.css"

function Pagination(props) {
    const { countries } = useContext(CountriesContext);
    const { currentPage, setCurrentPage, setCurrentCountries, indexOfFirstCountry, indexOfLastCountry, countriesPerPage } = props;

    const previousPage = () => {
        setCurrentPage(currentPage - 1);
    };
    
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    useEffect(() => {
        setCurrentCountries(countries.slice(indexOfFirstCountry, indexOfLastCountry));
    }, [countries, currentPage]);

    const scroll = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

  return (
    <div className='change-page-buttons'>
        {currentPage !== 1 ? (
            <button className="leftBtn" type="button" onClick={() => {previousPage(); scroll();}}>
                {" "}
                &lt;{" "}
            </button>
        ) : null}
        {countriesPerPage * currentPage < countries.length ? (
            <button className="rightBtn" type="button" onClick={() => {nextPage(); scroll();}}>
                {" "}
                &gt;{" "}
            </button>
        ) : null}
    </div>
  )
}

export default Pagination