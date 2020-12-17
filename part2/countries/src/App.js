import React, {useState,useEffect, cloneElement} from 'react'
import axios from 'axios'
import Countries from './components/Countries'


const App = () => {
  
  const [ countryFilter, setCountryFilter ] = useState('')
  const [ countries, setCountries ] = useState([])

  const handleCountryFilterChange = (event) => {
    // console.log(event.target.value)
    setCountryFilter(event.target.value)
  }

  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all")
      .then( response => {
        setCountries(response.data)
      })
  }
  

  useEffect(hook, [])

  const filteredCountries = countries.filter(
    (country) => country.name.toLowerCase().includes(countryFilter.toLowerCase())
  )

  return (
    <div>
      <form>
        find countries: <input value={countryFilter} onChange={handleCountryFilterChange}/>
      </form>
      <Countries countries={filteredCountries} setCountryFilter={setCountryFilter}/>
    </div>
  );
}

export default App;
