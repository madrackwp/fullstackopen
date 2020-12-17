import React from 'react'
import CountryView from './CountryView'

const Countries = (props) => {
    const toList = props.countries

    const setValue = (name) => {
        console.log('attempting to setfilter')
        console.log(name)
        props.setCountryFilter(name)
    }

    if (toList.length === 1){
        let countryToDisplay = toList[0]
        return(
            <CountryView country = {countryToDisplay}/>
        )

    } else if (toList.length <=10){
        return(
            <div>
                <h2>Countries</h2>
                {props.countries.map((country) => 
                    <p>
                        {country.name} <button onClick={() => setValue(country.name)}>show</button> 
                    </p>)}
                
            </div>
        )
    } else {
        return(
            <div>Too many countries to list, please use the filter</div>
        )
    }

}

export default Countries