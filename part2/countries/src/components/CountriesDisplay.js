import React from 'react'

const CountriesDisplay = (props) => {
  let filteredCountries = props.filteredCountries

  let countriesDisp
  if (filteredCountries.length > 10) {
    countriesDisp = <div>Too many matches, specify another filter</div>
  } else if (filteredCountries.length === 1) {
    countriesDisp =
      <div>
        <h1>{filteredCountries[0].name}</h1>
        <div>capital {filteredCountries[0].capital}</div>
        <div>population {filteredCountries[0].population}</div>
        <h2>languages</h2>
        <ul>
          {filteredCountries[0].languages.map(lang => <li key={lang.iso639_1}>{lang.name}</li>)}
        </ul>
        <img src={filteredCountries[0].flag} alt="Flag" width="200" />
      </div>
  } else {
    countriesDisp =
      <ul>
        {filteredCountries.map((country, index) => {
          //console.log(country.alpha2Code);
          return (<li key={index}> {country.name} </li>)
        }
        )}
      </ul>

  }

  return countriesDisp

}

export default CountriesDisplay
