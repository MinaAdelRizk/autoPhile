import React, { useEffect, useState } from 'react';
import _ from "lodash"
import { getMakes, getModels } from '../services/carMakeService';
import Select from './common/select';
import YearPicker from './common/yearPicker';
import { updateUserCar } from '../services/userService'
import { getCurrentUser } from '../services/authService'

function CarMenu() {

    let [user, setUser] = useState()
    let [makes, setMakes] = useState([])
    let [selectedMake, setSelectedMake] = useState([])

    let [models, setModels] = useState([])
    let [selectedModel, setSelectedModel] = useState([])

    let [selectedYear, setSelectedYear] = useState([])

    useEffect(() => {
        async function getData() {
            let { data: makes } = await getMakes()
            setMakes(makes)
        }
        let user = getCurrentUser()
        setUser(user)
        getData()
    }, []);

    async function handleMakeChange({ currentTarget: input }) {
        const selectedMake = input.value;
        setSelectedMake(selectedMake)
        models = await getModels(selectedMake)
        setModels(models)
    }

    function handleModelChange({ currentTarget: input }) {
        const selectedModel = input.value;
        setSelectedModel(selectedModel)
    }

    function handleYearChange({ currentTarget: input }) {
        const selectedYear = input.value;
        setSelectedYear(selectedYear)
    }

    async function populateCar() {
        const make = makes.filter(m => m._id === selectedMake)[0].name
        const model = models.filter(m => m._id === selectedModel)[0].name
        const car = _.concat({ make, selectedMake, model, selectedModel, year: selectedYear })[0]
        user && updateUserCar(car)
    }

    return (
        <div>
            <Select
                name="make"
                label="Select Make"
                options={makes}
                onChange={handleMakeChange}
            />

            {selectedMake !== "" &&
                <Select
                    name="model"
                    label="Select Model"
                    options={models}
                    onChange={handleModelChange}
                />}

            {selectedModel !== "" &&
                <YearPicker
                    label="Select Year"
                    onChange={handleYearChange}
                />}

            {selectedYear !== "" && <button
                onClick={() => populateCar(selectedMake, selectedModel, selectedYear)}
                className="btn btn-primary m-3">Save</button>}
        </div>
    )
}

export default CarMenu;