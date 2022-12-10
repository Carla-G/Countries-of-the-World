import React, {useContext} from 'react';
import CountriesContext from "../../../contexts/CountriesContext";
import "./FilterContinent.css";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "Polar"]

const FilterContinent = () => {
    const {setChosenRegion} = useContext(CountriesContext);

    return (
        <form>
            <label className="regions-label" htmlFor="region-select">
                Filter by region
                <select
                onChange={(event) => setChosenRegion(event.target.value)}
                id="region-select"
                >
                    <option className='region-option' value=""></option>
                    {regions.map((region, index) => (
                        <option className='region-option' value={region} key={index}>{region}</option>
                    ))}
                </select>
            </label>
        </form>
    )
}

export default FilterContinent;
