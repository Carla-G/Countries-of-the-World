import React from 'react'

const SearchBar = (props) => {
    const {search, setSearch} = props;

  return (
    <div>
        <label htmlFor="search">Search for a country here:{" "}</label>
        <input name="search-bar" id="search" type="search" value={search} onChange={(event) => setSearch(event.target.value.toLowerCase())} />
    </div>
  )
}

export default SearchBar