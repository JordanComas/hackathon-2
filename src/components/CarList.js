import React from "react";
import axios from 'axios'
// const axios = require("axios");
import './CarList.css'

const Carlist = () => {

    const [cars, setCars] = React.useState([])
    const [carsToDisplay, setCarsToDisplay] = React.useState([])

    const [clickFilter, setClickFilter] = React.useState('')

    const options = {
        method: 'GET',
        url: `https://car-data.p.rapidapi.com/cars/`,
        params: {limit: '50', page: '0'},
        headers: {
          'X-RapidAPI-Key': 'c5d9e92318mshbdf74a4399e20e7p10cf47jsna24ac16729ea',
          'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
        }
      };

    const getCars = async () => {
        const response = await axios.request(options)
        setCars(response.data)
        setCarsToDisplay(response.data)
       }
    
    React.useEffect(function() {
        getCars();
    },[])

    let allYears = []
    let allMakes = []
    let allModels = []
    let allTypes = []

    for (let i=0; i<cars.length; i++){
        allYears.push(cars[i].year)
        allMakes.push(cars[i].make)
        allModels.push(cars[i].model)
        allTypes.push(cars[i].type)
    }

    let uniqueYears = [...new Set(allYears)]
    let uniqueMakes = [...new Set(allMakes)]
    let uniqueModels = [...new Set(allModels)]
    let uniqueTypes = [...new Set(allTypes)]

    const filterCars = (key, el) => {
        let filteredArr = cars.filter(function (car) {
            return car[key] === el
        })
        setCarsToDisplay(filteredArr)
    }

    const click = (value) => {
        if (clickFilter === value){
            setClickFilter('')
        } else {
            setClickFilter(value)
        }
    }

  return (
    <div className="car-list">
        <section className="filter">
            <ul><button onClick={getCars} type="button">All</button></ul>

            <ul><button onClick={() => click("year")}>Year</button></ul>
                {clickFilter === "year" && uniqueYears.map(function(year) {
                    return (<li><button onClick={() => filterCars("year", year)}>{year}</button></li>)
                })}

            <ul><button onClick={() => click("make")}>Make</button></ul>
                {clickFilter === "make" && uniqueMakes.map(function(make) {
                    return (<li><button onClick={() => filterCars("make", make)}>{make}</button></li>)
                })}

            <ul><button onClick={() => click("model")}>Model</button></ul>
            {clickFilter === "model" && uniqueModels.map(function(model) {
                    return (<li><button onClick={() => filterCars("model", model)}>{model}</button></li>)
                })}
            
            <ul><button onClick={() => click("type")}>Type</button></ul>
            {clickFilter === "type" && uniqueTypes.map(function(type) {
                    return (<li><button onClick={() => filterCars("type", type)}>{type}</button></li>)
                })}
        </section>

        <section className="content">
            {carsToDisplay.map(function(car) {
                return (
                        <table>
                            <tr><b>Year: </b>{car.year}</tr>
                            <tr><b>Make: </b>{car.make}</tr>
                            <tr><b>Model: </b>{car.model}</tr>
                            <tr><b>Type: </b>{car.type}</tr>
                        </table>
                )
            })}
        </section>
    </div>
  )
};

export default Carlist;
