import React, { Component } from 'react';
import Select from './common/select';
import YearPicker from './common/yearPicker';
import { getModels, getCarMakeOptions } from '../services/fakeCarModelService';

class CarSelectMenu extends Component {

    state = {
        carMakeOptions: [],//all cars Make Key
        makeModels: [],//models based on Make selection
        selectedModelId: "", // model _id
        selectedModelTrims: [], // Trims based on Moake & Model selection
        selectedTrim: "",//selected Trim
        selectedYear: "",
        selectedCar: "Volvoooo" //"models_id + trim_id"
    }



    componentDidMount() {
        const carMakeOptions = getCarMakeOptions()
        console.log(this.state.selectedCar)
        this.setState({ carMakeOptions })
    }

    handleYearChange = ({ currentTarget: input }) => {
        const selectedYear = input.value;
        this.setState({ selectedYear })
    }

    handleMakeChange = ({ currentTarget: input }) => {
        const selectedMake = input.value;
        let makeModels = getModels(selectedMake);
        this.setState({ makeModels, selectedMake });
    }

    handleModelChange = ({ currentTarget: input }) => {
        const selectedModel = input.value;
        const makeModels = [...this.state.makeModels]
        makeModels.filter(m => m.name === selectedModel)
        let modelTrims = makeModels[0].trim
        this.setState({ modelTrims, selectedModel });
    }

    handleTrimChange = ({ currentTarget: input }) => {
        const selectedTrim = input.value;
        this.setState({ selectedTrim });
    }

    populateCar = (mk, md, tr, yr) => {
        const selectedCar = `${mk} ${md} ${tr} ${yr}`
        this.setState({ selectedCar })
    }


    render() {
        const {
            carMakeOptions,
            selectedMake,
            makeModels,
            selectedModel,
            modelTrims,
            selectedTrim,
            selectedYear,
        } = this.state;

        return (

            <div>

                <YearPicker
                    name="year"
                    label="Select Year"
                    onChange={this.handleYearChange}
                />

                <Select
                    name="make"
                    label="Select Make"
                    options={carMakeOptions}
                    onChange={this.handleMakeChange}
                />

                {
                    selectedMake && <Select
                        name="models"
                        label="Select Model"
                        options={makeModels}
                        onChange={this.handleModelChange}
                    />
                }

                {
                    selectedModel && <Select
                        name="trim"
                        label="Select Trim "
                        options={modelTrims}
                        onChange={this.handleTrimChange}
                    />
                }

                {selectedTrim && <button
                    onClick={() => this.populateCar(selectedMake, selectedModel, selectedTrim, selectedYear)}
                    className="btn btn-primary m-3">Save</button>}
            </div >

        );
    }
}


export default CarSelectMenu;