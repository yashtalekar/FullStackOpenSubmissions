import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountriesDisplay from './components/CountriesDisplay'
import WeatherDisplay from './components/WeatherDisplay'

function App() {

  const [countries, setCountries] = useState([])
  const [newSearchString, setNewSearchString] = useState('')
  const [weather, setWeather] = useState(0)

  const handleSearchStringChange = (event) => {
    setNewSearchString(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filteredCountries = countries.filter(country =>
    country.name.toLocaleLowerCase().includes(
      newSearchString.toLocaleLowerCase()
    )
  )

  const api_key = `3c83251a9088473518e260a85a9b1746`
  const api_request = 'http://api.weatherstack.com/current'
  useEffect(() => {
    if (filteredCountries.length === 1) {
      const capital = filteredCountries[0].capital
      const base_url = api_request + `?access_key=` + api_key
      const url = base_url + `&query=` + capital
      console.log(url);
      axios
        .get(url)
        .then(response => {
          setWeather(response.data)
        })
    }
  }, [newSearchString])

  return (
    <div>
      <Filter
        newSearchString={newSearchString}
        handleSearchStringChange={handleSearchStringChange}
      />
      <CountriesDisplay filteredCountries={filteredCountries} />
      <WeatherDisplay weather={weather} filteredCountries={filteredCountries}/>
    </div>
  );
}

export default App;
