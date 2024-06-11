import { useState, useEffect } from "react";
import "./App.css";
import Countries from "./components/Countries";

// 9th, 10th, 11th June, 2024

// https://countryapi.io/api/all?apikey=GD8Ybf4R5kjSJhweVppUnIL0iTVqjdx3RucPPg8D

const App = () => {

  const url = "https://countryapi.io/api/all?apikey=GD8Ybf4R5kjSJhweVppUnIL0iTVqjdx3RucPPg8D";
 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  const dataFetch = async (url) =>{
    setIsLoading(true);
    try{
      const response = await fetch(url);
      const data = await response.json();

      const dataArray = Object.values(data);

      setCountries(dataArray);
      setIsLoading(false);
    } catch (error){
      setError(error);
    }
  }

  useEffect(() =>{
    dataFetch(url);
  }, []);

  return (
    <main>
      <h1>Country App</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {countries && <Countries countries={countries} />}
    </main>
  );
};

export default App;
