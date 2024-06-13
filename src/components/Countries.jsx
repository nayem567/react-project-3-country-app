import React from "react";
import Country from "./Country";
import './countries.module.css';
import { v4 as uuidv4 } from 'uuid';

const Countries = (props) => {
  return (
    <section>
      {props.filteredCountries.map((country) => {
        const countryNew = { country, id: uuidv4() };
        return <Country {...countryNew} key={countryNew.id} onRemoveCountry={props.onRemoveCountry} />;
      })}
    </section>
  );
};


export default Countries;
