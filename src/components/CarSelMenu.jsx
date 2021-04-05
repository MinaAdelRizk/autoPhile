import React, { useEffect, useState, useRef } from 'react';

import _ from "lodash"
import Select from './common/select'
import YearPicker from './common/yearPicker';
import { getCars } from './../services/fakeCarModelService';

// import http from '../services/httpService'
// import auth from '../services/authService';

function CarSelMenu(props) {

    let cars = useRef(getCars()) //externally from fakeCarModelService

    let [makes, setMakes] = useState([])
    let [models, setModels] = useState(null)
    let [trims, setTrims] = useState(null)

    let [make, setMake] = useState("")
    let [model, setModel] = useState("")
    let [trim, setTrim] = useState("")
    let [year, setYear] = useState("")

    let [selectedCar, setCar] = useState("Select Your Car!");

    useEffect(() => {
        let makes = cars.current.map(car => car.make)
        setMakes(makes)
    }, []);

    useEffect(() => {
        console.log(selectedCar)
    }, [selectedCar]);

    function handleMakeChange({ currentTarget: input }) {
        const selectedMake = input.value;
        setMake(make = selectedMake)// updating make to the selected Mak
        populateModels(selectedMake); // Populate the Model / next
    }

    function populateModels(selectedMake) {
        let models = cars.current.filter(car => car.make.name === selectedMake);
        models = _.uniq(models.map(m => m.models))
        setModels(models[0])
    }

    function handleModelChange({ currentTarget: input }) {
        const model = input.value;
        populateTrims(model)
        setModel(model)
    }

    function populateTrims(model) {
        let trims = models.filter(m => m.name === model)[0].trim
        setTrims(trims)
    }

    function handleTrimChange({ currentTarget: input }) {
        let trim = input.value;
        setTrim(trim)
    }

    function handleYearChange({ currentTarget: input }) {
        const year = input.value
        setYear(year)
    }

    let populateCar = (mk, md, tr, yr) => {
        selectedCar = `${mk} ${md} ${tr} ${yr}`
        localStorage.setItem('selectedCar', selectedCar)
        setCar(selectedCar);
        window.location = "/home"
    }



    return (
        <div>

            <Select
                name="make"
                label="Select Make"
                options={makes}
                onChange={handleMakeChange}
            />

            {(models !== null) && <Select
                name="model"
                label="Select Model"
                options={models}
                onChange={handleModelChange}
            />}


            {trims && <Select
                name="trim"
                label="Select Trim"
                options={trims}
                onChange={handleTrimChange}
            />}

            {trim && <YearPicker
                name="year"
                label="Select Year"
                onChange={handleYearChange}
            />}

            {year && <button
                onClick={() => populateCar(make, model, trim, year)}
                className="btn btn-primary m-3">Save</button>}

        </div >
    )
}

export default CarSelMenu;