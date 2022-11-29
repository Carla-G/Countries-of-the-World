import React, {useState, createContext} from 'react';
import axios from "axios";

const CountriesContext = createContext();

export default CountriesContext;

export const CountriesContextProvider = ({children}) => {
    const [countries, setCountries] = useState([]);

    const fetchCountries = () => {
        axios
        .get("https://restcountries.com/v2/all")
        .then((response) => setCountries(response.data))
    }

    return (
        <CountriesContext.Provider value={{countries, fetchCountries}}>
            {children}
        </CountriesContext.Provider>
    )
}
