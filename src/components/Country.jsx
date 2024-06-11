import React from "react";
import './country.module.css';

const Country = ({ country }) => {
  const { name, capital, region, population, flag } = country;
  return (
    <article>
      <img src={flag.large} alt={name} />
      <h4>{name}</h4>
      <p>Capital : {capital}</p>
      <p>Population : {population}</p>
      <p>Region : {region}</p>
    </article>
  );
};

export default Country;
