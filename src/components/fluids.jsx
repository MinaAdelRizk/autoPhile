import React, { Component } from 'react';
import { getFluids, getFluidsMnf, getVsc } from '../services/fakeFluidsService';
import PartsGrid from './partsGrid';
import HListGroup from "./common/hListGroup"
import VListGroup from './common/vListGroup';

class Fluids extends Component {
    state = {
        fluids: [],
        manufacturers: [],
        selectedMnf: "All",
        viscosities: [],
        selectedVsc: "All"
    }

    componentDidMount() {
        const fluids = getFluids();
        const manufacturers = getFluidsMnf()
        manufacturers.unshift("All")
        const viscosities = getVsc()
        viscosities.push("All")
        this.setState({ fluids, manufacturers, viscosities })
    }

    // prestashop
    handleManufacturerSelect = selected => {
        const selectedMnf = selected;
        this.setState({ selectedMnf })
    }

    handleViscocitySelect = selected => {
        const selectedVsc = selected
        this.setState({ selectedVsc })
    }

    handleLike = item => {
        const fluids = [...this.state.fluids]
        const index = fluids.indexOf(item)
        fluids[index] = { ...fluids[index] }
        fluids[index].liked = !fluids[index].liked
        this.setState({ fluids })
    }

    getPageData = () => {
        const { fluids: allFluids, selectedMnf, selectedVsc } = this.state;
        let data = allFluids;

        data = selectedMnf && (selectedMnf !== "All") ? data.filter(f => f.mnf === selectedMnf) : data;

        data = selectedVsc && (selectedVsc !== "All") ? data.filter(f => f.vsc === selectedVsc) : data;

        return { fluids: data }
    }



    render() {

        const { fluids } = this.getPageData();

        const { manufacturers, selectedMnf, viscosities, selectedVsc } = this.state;

        return (
            <div className="row">

                <div className="col-2">
                    <VListGroup
                        items={manufacturers}
                        selectedItem={selectedMnf}
                        onItemSelect={this.handleManufacturerSelect}
                    />
                </div>

                <div className="col-10 my-1">

                    <HListGroup
                        title="Viscosity: "
                        items={viscosities}
                        selectedItem={selectedVsc}
                        onItemSelect={this.handleViscocitySelect}
                    />

                    <PartsGrid
                        items={fluids}
                        onLike={this.handleLike}
                    />
                </div>

            </div>
        );
    }
}

export default Fluids;