import './App.css';
import React from "react";
import CountriesList from "./components/CountriesList/CountriesList";
import {CountriesContextProvider} from "./contexts/CountriesContext";

function App() {
  return (
    <div className="App">
        <header className="App-header">
        </header>
        <main>
          <CountriesContextProvider>
            <CountriesList />
          </CountriesContextProvider>
        </main>
    </div>
  );
}

export default App;
