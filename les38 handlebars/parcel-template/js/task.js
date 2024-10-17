import { countries } from "./countries.js";

import { heroes } from "./heroes.js";

import heroesTemplate from "../src/templates/heroes.hbs"

import Handlebars from "handlebars"
import templateSource  from "../src/templates/countries.hbs";





// const templateCountries = Handlebars.compile(templateSource())

// console.log(templateCountries());
// console.log(templateSource);

// const countriesContainer = document.querySelector('#countriesContainer').innerHTML

// countriesContainer.innerHTML = templateCountries(countries)

// document.body.innerHTML = templateCountries(countries)

// const renderedHtml = countries.map(country => {
//     return templateSource(country)
//     // console.log(templateCountries(country));
    
// })

const countriesContainer = document.querySelector('#countriesContainer')
const heroesContainer = document.querySelector('#heroesContainer')

const renderedHtml = templateSource({countries})
const renderedHeroes = heroesTemplate({heroes});

countriesContainer.innerHTML = renderedHtml

heroesContainer.innerHTML = renderedHeroes

