import React from 'react'

const WeatherDisplay = (props) => {
  const weather_data = props.weather
  if (props.filteredCountries.length === 1) {
  if (weather_data !== 0) {
    return (
      <div>
        <h2>Weather in {weather_data.location.name}</h2>
        <div>
          <b>temperature: </b> {weather_data.current.temperature} Celsius
        </div>
        <div>
          <img src={weather_data.current.weather_icons} width="100" alt="weather icon"/>
        </div>
        <div>
          <b>wind: </b> {weather_data.current.wind_speed} mph direction {weather_data.current.wind_dir}
        </div>

      </div>
    )
  } else {
    return null
  } } else {
    return null
  }

}

export default WeatherDisplay