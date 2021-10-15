import React, { Component } from 'react';
import VListGroup from './common/vListGroup';
import HListGroup from './common/hListGroup';
import { getTires, getTiresMnf, getTireW, getTireH, getRimSize } from '../services/fakeTiresService';
import PartsGrid from './partsGrid';

class Tires extends Component {
    state = {
        tires: [],
        manufacturers: [],
        selectedMnf: "All",
        width: [],
        selectedWidth: "All",
        height: [],
        selectedHeight: "All",
        rim: [],
        selectedRim: "All"
    }

    componentDidMount() {
        const tires = getTires();
        const manufacturers = getTiresMnf()
        manufacturers.unshift("All")
        const width = getTireW()
        width.push("All")
        const rim = getRimSize()
        rim.push("All")
        const height = getTireH()
        height.push("All")
        this.setState({ tires, manufacturers, width, rim, height })
    }

    // prestashop
    handleManufacturerSelect = selected => {
        const selectedMnf = selected;
        this.setState({ selectedMnf })
    }

    handleWidthSelection = selected => {
        const selectedWidth = selected;
        this.setState({ selectedWidth })
    }

    handleRimSelection = selected => {
        const selectedRim = selected;
        this.setState({ selectedRim })
    }

    handleHeightSelection = selected => {
        const selectedHeight = selected;
        this.setState({ selectedHeight })
    }

    handleLike = item => {
        const tires = [...this.state.tires]
        const index = tires.indexOf(item)
        tires[index] = { ...tires[index] }
        tires[index].liked = !tires[index].liked
        this.setState({ tires })
    }

    getPageData = () => {
        const { tires: allTires, selectedMnf, selectedWidth, selectedHeight, selectedRim } = this.state;
        let data = allTires;

        data = selectedMnf && (selectedMnf !== "All") ? data.filter(t => t.mnf === selectedMnf) : allTires;

        data = selectedWidth && (selectedWidth !== "All") ? data.filter(t => t.width === selectedWidth) : data

        data = selectedHeight && (selectedHeight !== "All") ? data.filter(t => t.height === selectedHeight) : data

        data = selectedRim && (selectedRim !== "All") ? data.filter(t => t.rim === selectedRim) : data;
        return { tires: data }
    }



    render() {

        const { tires, } = this.getPageData();

        const { manufacturers, selectedMnf, width, selectedWidth, rim, selectedRim, height, selectedHeight } = this.state;

        const divider = <hr className="my-0" style={{ background: "#ffc107" }} />;

        return (
            <div className="page-content">

                <div className="col-2">
                    <VListGroup
                        // title="Manufacturer: "
                        items={manufacturers}
                        selectedItem={selectedMnf}
                        onItemSelect={this.handleManufacturerSelect}
                    />

                </div>

                <div className="col-10 my-1">

                    <HListGroup
                        title="W: "
                        items={width}
                        selectedItem={selectedWidth}
                        onItemSelect={this.handleWidthSelection}
                    />

                    {divider}

                    <HListGroup
                        title="H>W Ratio: "
                        items={height}
                        selectedItem={selectedHeight}
                        onItemSelect={this.handleHeightSelection}
                    />

                    {divider}

                    <HListGroup
                        title="R: "
                        items={rim}
                        selectedItem={selectedRim}
                        onItemSelect={this.handleRimSelection}
                    />
                    {divider}

                    <PartsGrid
                        items={tires}
                        onLike={this.handleLike}
                    />
                </div>

            </div>
        );
    }
}

export default Tires;