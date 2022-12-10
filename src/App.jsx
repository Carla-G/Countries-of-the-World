import React from "react";
import {Routes, Route} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import CountriesList from "./components/CountriesList/CountriesList";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import {CountriesContextProvider} from "./contexts/CountriesContext";
import './App.css';

function App() {
  return (
    <div className="App">
      <CountriesContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/countries" element={<CountriesList />} />
          <Route path="/countries/:id" element={<CountryDetails />} />
        </Routes>
      </CountriesContextProvider>
    </div>
  );
}

export default App;
