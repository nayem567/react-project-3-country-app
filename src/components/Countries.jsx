import React from "react";
import Country from "./Country";
import './countries.module.css';

// import { v4 as uuidv4 } from 'uuid';
import { v4 as uuidv4 } from 'uuid';


const Countries = ({countries}) => {
  return (
    <section>
     {countries.map((country) => {
      const countryNew = {country, id:uuidv4()}

      return(<Country {...countryNew} key={countryNew.id} />)
     })}
    </section>
  );
};

export default Countries;
