import React, {useContext} from 'react';
import CountriesContext from "../../../contexts/CountriesContext";
import "./SearchBar.css";

const SearchBar = () => {
  const {search, setSearch} = useContext(CountriesContext);

  return (
    <div>
        <label className="search-label" htmlFor="search">Search here for:{" "}</label>
        <input name="search-bar" id="search" type="search" placeholder="Country Name" value={search} onChange={(event) => setSearch(event.target.value.toLowerCase())} />
    </div>
  )
}

export default SearchBar