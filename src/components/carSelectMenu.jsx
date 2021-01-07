import React, { Component } from 'react';
import Select from './common/select';
import YearPicker from './common/yearPicker';
import { getModels, getCars, getCarMakeOptions } from '../services/fakeCarModelService';

class CarSelectMenu extends Component {
    state = {
        cars: [],//all cars
        carMakeOptions: [],//all cars Make Key
        selectedMakeId: "", //make _id
        selectedMakeModels: [],//models based on Make selection
        selectedModelId: "", // model _id
        selectedModelTrims: [], // Trims based on Moake & Model selection
        selectedTrim: "",//selected Trim
        selectedCar: "", //"models_id + trim_id"
        selectedYear: ""
    }

    componentDidMount() {
        const cars = getCars();
        const carMakeOptions = getCarMakeOptions()
        this.setState({ cars, carMakeOptions })
    }

    handleMakeChange = ({ currentTarget: input }) => {
        const selectedMakeId = input.value;
        let selectedMakeModels = getModels(selectedMakeId);
        selectedMakeModels = selectedMakeModels[0].models;
        this.setState({ selectedMakeModels, selectedMakeId });
    }

    handleModelChange = ({ currentTarget: input }) => {
        const selectedModelId = input.value;
        const models = [...this.state.selectedMakeModels]
        let selectedModelTrims = models.filter(m => m._id === selectedModelId)
        selectedModelTrims = selectedModelTrims[0].trim;
        this.setState({ selectedModelTrims, selectedModelId });
    }

    handleTrimChange = ({ currentTarget: input }) => {
        const { selectedModelId, selectedYear } = this.state;
        const selectedTrim = input.value;
        const selectedCar = `${selectedModelId}-${selectedTrim}-${selectedYear}`
        console.log(selectedCar)
        this.setState({ selectedTrim, selectedCar });
    }

    handleYearChange = ({ currentTarget: input }) => {
        const selectedYear = input.value;
        this.setState({ selectedYear })
    }

    render() {
        const {
            carMakeOptions,
            selectedMakeId,
            selectedMakeModels,
            selectedModelId,
            selectedModelTrims,
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
                    selectedMakeId && <Select
                        name="models"
                        label="Select Model"
                        options={selectedMakeModels}
                        onChange={this.handleModelChange}
                    />
                }

                {
                    selectedModelId && <Select
                        name="trim"
                        label="Select Trim "
                        options={selectedModelTrims}
                        onChange={this.handleTrimChange}
                    />
                }
            </div >
        );
    }
}

export default CarSelectMenu;