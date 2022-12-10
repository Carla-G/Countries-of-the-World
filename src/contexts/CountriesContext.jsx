import React, {useState, createContext} from 'react';
import axios from "axios";

const CountriesContext = createContext();

export default CountriesContext;

export const CountriesContextProvider = ({children}) => {
    //State where all the countries fetched from the API will be kept
    const [countries, setCountries] = useState([]);

    //State where the search value is kept
    const [search, setSearch] = useState("");
    
    //State where the chosen region of the world is kept
    const [chosenRegion, setChosenRegion] = useState("");

    const fetchCountries = () => {
        axios
        .get("https://restcountries.com/v2/all")
        .then((response) => setCountries(response.data))
    }

    return (
        <CountriesContext.Provider value={{countries, fetchCountries, search, setSearch, chosenRegion, setChosenRegion}}>
            {children}
        </CountriesContext.Provider>
    )
}
