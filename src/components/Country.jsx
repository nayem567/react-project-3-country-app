import React from "react";

const Country = (props) => {
  const { name, capital, region, population, flag } = props.country;

  const handleRemoveCountry = () => {
    props.onRemoveCountry(name);
  };

  return (
    <article>
      <img src={flag.large} alt={name} />
      <h4>{name}</h4>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <button onClick={handleRemoveCountry}>Remove Country</button>
    </article>
  );
};


export default Country; // Ensure this is the default export
