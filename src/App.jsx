import { useState, useEffect } from "react";
import "./App.css";
import Countries from "./components/Countries";
import Search from "./components/Search";

const App = () => {
  const url = "https://countryapi.io/api/all?apikey=GD8Ybf4R5kjSJhweVppUnIL0iTVqjdx3RucPPg8D";
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const dataFetch = async (url) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const dataArray = Object.values(data);
      setCountries(dataArray);
      setFilteredCountries(dataArray)
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    dataFetch(url);
  }, []);

  const handleRemoveCountry = (name) => {
    setFilteredCountries(countries.filter(country => country.name !== name));
  };

  const handleSearch = (searchValue) =>{
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) =>{
      const countryName = country.name.toLowerCase();
      return countryName.startsWith(value);
    })
    setFilteredCountries(newCountries);
  }

  return (
    <main>
      <h1>Country App</h1>
      <Search onSearch={handleSearch} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!isLoading && !error && (
        <Countries filteredCountries={filteredCountries} onRemoveCountry={handleRemoveCountry} />
      )}
    </main>
  );
};

export default App;
