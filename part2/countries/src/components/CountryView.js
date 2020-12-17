import React,{useState,useEffect} from 'react'
import axios from 'axios'

const CountryView = (props) => {

    //apikey = c3414c0950f291789cf0f167bc4d5e4e
    //set REACT_APP_API_KEY=c3414c0950f291789cf0f167bc4d5e4e && npm start
    // ($env:REACT_APP_API_KEY='c3414c0950f291789cf0f167bc4d5e4e') -and (npm start)

    // const api_key = process.env.REACT_APP_API_KEY
    const api_key = 'c3414c0950f291789cf0f167bc4d5e4e'
    const country = props.country
    const [ weather, setWeather] = useState({})
    const weatherAPIQuery = `http://api.weatherstack.com/current?access_key=${api_key}&query=${props.country.capital}`

    const hook = () => {
        axios.get(weatherAPIQuery)
            .then( response => {
                const data = {weather_descriptions: response.data.current.weather_descriptions, 
                              wind_speed: response.data.current.wind_speed, 
                              wind_dir: response.data.current.wind_dir,
                              temperature: response.data.current.temperature,
                              icon: response.data.current.weather_icons[0]
                            }
                setWeather(data)            
            })
    }

    const getWeatherData = (weather) => {
        if (weather){
            console.log(weather)
            return(
                <div>
                    <h3>Weather in {country.capital}</h3>
                     <p>{weather.weather_descriptions}</p>
                     <p><b>Temp: </b>{weather.temperature} Celcius</p>
                     <img src={weather.icon} width="100" height="100"></img>
                     <p><b>Wind: </b> {weather.wind_speed} mph, direction: {weather.wind_dir}</p>

                </div>
                
                 
            )
                
        } else {
            return(
                <div>loading weather info..</div>
            )
        }
    }


    useEffect(hook,[])
    
    return(
        <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages:</h3>
            <ul>
                {country.languages.map((language) => 
                    <li>{language.name}</li>)}
            </ul>
            <img src={country.flag} height='50%' width='50%'/>
            <div>
                <div>
                    {/* {weather ? <p>{weather.weather_descriptions}</p> : <p>loading weather</p>} */}
                    {getWeatherData(weather)}
                </div>
            </div>
        </div>
    )
}

export default CountryView