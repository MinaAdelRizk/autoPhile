import React, { useEffect, useState, useRef } from 'react';

import _ from "lodash"
import { getMakes } from '../services/carMakeService';
import { getModels, getTrims } from '../services/fakeCarModelService'
import auth from '../services/authService'
import jwtDecode from 'jwt-decode';
import { updateCar } from '../services/userService';
import SearchBox from './searchBox';
import YearPicker from './common/yearPicker';
import Select from './common/select'


// import http from '../services/httpService'
// import auth from '../services/authService';

function CarSelMenu() {

    const [user, setUser] = useState(null)
    let jwt = localStorage.getItem("token")

    useEffect(() => {
        let user = auth.getCurrentUser()
        setUser(user)
    }, []);

    // let makes = useRef(getMakes()) //externally from fakeCarModelService
    let [searchQuery, setSearchQuery] = useState("")

    let [makeOptions, setMakeOptions] = useState([])
    let [makeModels, setMakeModels] = useState([])
    let [modelTrims, setModelTrims] = useState(null)

    let [make, setMake] = useState("")
    let [model, setModel] = useState("")
    let [trim, setTrim] = useState("")
    let [year, setYear] = useState("")

    let [selectedCar, setCar] = useState("Select Your Car!");

    useEffect(async () => {
        makeOptions = await getMakes()
        console.log(makeOptions)
        setMakeOptions(makeOptions)
    }, []);

    // useEffect(() => {
    //     makeModels = getModels(make)
    // }, []);

    function handleMakeChange({ currentTarget: input }) {
        make = input.value
        setMake(make)
        makeModels = getModels(make)
        setMakeModels(makeModels)
    }

    function handleModelChange({ currentTarget: input }) {
        model = input.value;
        setModel(model)
        makeModels = makeModels.filter(m => m._id == model)
        modelTrims = _.uniq(makeModels.map(t => t.trim)[0])
        setModelTrims(modelTrims)
    }

    function handleTrimChange({ currentTarget: input }) {
        let trim = input.value;
        setTrim(trim)
    }

    function handleYearChange({ currentTarget: input }) {
        const year = input.value
        setYear(year)
    }

    let populateCar = async (mk, md, tr, yr) => {
        selectedCar = `${mk} ${md} ${tr} ${yr}`;

        const user = jwtDecode(jwt)

        user.selectedCar = selectedCar
        // localStorage.setItem('selectedCar', selectedCar)
        // console.log(user.selectedCar)
        await updateCar(user, selectedCar)
        setCar(selectedCar);
        // window.location = "/home"
    }

    const handleSearch = (query) => {
        console.log("Query", query)
        setSearchQuery(query)
        makeOptions = searchQuery && makeOptions.filter(m => m.name.toLowerCase().startsWith(searchQuery.toLowerCase()))
        if (makeOptions.length == 1) setMake(makeOptions[0]._id)
        console.log(searchQuery)
        console.log(makeOptions)
        // make && setMakeModels(getModels(make._id))
        // console.log("Make Models is", makeModels)
        // makeOptions = makeOptions.filter(m => m.name == query)
        // setMake(makeOptions[0])
        // console.log("result", make)
        // console.log("models", makeModels)

        // if (makes.length == 1) setMake(makes[0].name)
        // console.log(make)
        // handleMakeChange(query)
    }

    return (
        <div>
            <SearchBox
                value={searchQuery}
                // onChange={handleSearch}
                onChange={handleMakeChange}
                optionsList={makeOptions}
                listName="Select Make"
            // onChange={handleMakeSelect}
            />

            {/* {this.renderSelect("make", "SelectMake", { makes: makeOptions })} */}
            {/* <Select
                name="make"
                label="Select Make"
                options={makeOptions}
                onChange={handleMakeChange}
            /> */}
            {/* <SelectFilter
                name="make"
                label="Select Make"
                options={makeOptions}
                onChange={handleMakeChange}
            /> */}
            {/* {make &&
                <Select
                    name="model"
                    label="Select Model"
                    options={makeModels}
                    onChange={handleModelChange}
                />}


            {model && <Select
                name="trim"
                label="Select Trim"
                options={modelTrims}
                onChange={handleTrimChange}
            />}

            {trim && <YearPicker
                name="year"
                label="Select Year"
                onChange={handleYearChange}
            />}

            {year && <button
                onClick={() => populateCar(make, model, trim, year)}
                className="btn btn-primary m-3">Save</button>} */}

        </div >
    )
}

export default CarSelMenu;