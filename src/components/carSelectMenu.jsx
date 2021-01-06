import React, { Component } from 'react';
import Select from './common/select';

import { getCars } from '../services/fakeCarSelectService'
import { getModels } from '../services/fakeCarModelService';


class CarSelectMenu extends Component {
    state = {
        make: [],
        model: [],
        selectedMakeId: "",
        selectedMakeModels: [],
        selectedModelId: "",
        selectedModelTrims: []
    }

    componentDidMount() {
        const make = getCars();
        const model = getModels();
        this.setState({ make, model })
    }

    handleMakeChange = ({ currentTarget: input }) => {
        const selectedMakeId = input.value
        let allModels = [...this.state.model]
        let selectedMakeModels = allModels.filter(m => m._id === selectedMakeId);
        selectedMakeModels = (selectedMakeModels[0].models)
        this.setState({ selectedMakeModels, selectedMakeId })
    }

    handleModelChange = ({ currentTarget: input }) => {
        const selectedModelId = input.value
        console.log(selectedModelId)
        let models = [...this.state.selectedMakeModels]
        let trims = models.filter(m => m._id === selectedModelId)
        trims = trims[0].trim
        console.log(trims)
        this.setState({ selectedModelTrims: trims, selectedModelId })
    }

    render() {
        const { make, selectedMakeId, selectedMakeModels, selectedModelId, selectedModelTrims } = this.state;
        return (
            <div>
                <Select
                    name={make.name}
                    label="Select Make"
                    options={make}
                    onChange={this.handleMakeChange}
                />

                {selectedMakeId && <Select
                    name="model"
                    label="Select Model"
                    options={selectedMakeModels}
                    onChange={this.handleModelChange}
                />}

                {selectedModelId && <Select
                    name="trim"
                    label="Select Trim "
                    options={selectedModelTrims}
                />
                }
            </div>
        );
    }
}

export default CarSelectMenu;