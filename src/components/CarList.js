import React from "react";
import axios from 'axios'
// const axios = require("axios");

const Carlist = () => {

    const [cars, setCars] = React.useState([])

    const options = {
        method: 'GET',
        url: `https://car-data.p.rapidapi.com/cars/`,
        params: {limit: '20', page: '0'},
        headers: {
          'X-RapidAPI-Key': 'c5d9e92318mshbdf74a4399e20e7p10cf47jsna24ac16729ea',
          'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
        }
      };

    const getCars = async () => {
        const response = await axios.request(options)
        setCars(response.data)
        // console.log(response.data)
        console.log(cars)
    
        // console.log(allYears)
       }
    
    // React.useEffect(function() {
    //     getCars();
    // },[])

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

  return (
    <div>
        <button onClick={getCars} type="button">All</button>
        <div>
            {uniqueYears.map(function(year) {
                return (<button>{year}</button>)
            })}
        </div>
        <div>
            {uniqueMakes.map(function(make) {
                return (<button>{make}</button>)
            })}
        </div>
        <div>
            {uniqueModels.map(function(model) {
                return (<button>{model}</button>)
            })}
        </div>
        <div>
            {uniqueTypes.map(function(type) {
                return (<button>{type}</button>)
            })}
        </div>
        {cars.map(function(car) {
            return (
                    <table>
                        <tr><b>Year:</b> {car.year}</tr>
                        <tr><b>Make:</b> {car.make}</tr>
                        <tr><b>Model:</b> {car.model}</tr>
                        <tr><b>Type:</b> {car.type}</tr>
                    </table>
            )
        })}
    </div>
  )
};

export default Carlist;
