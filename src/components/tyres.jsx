import React, { Component } from 'react';
import VListGroup from './common/vListGroup';
import HListGroup from './common/hListGroup';
import { getTyres, deleteTyre, addTyre } from '../services/tyresService';
import auth from '../services/authService'
import PartsGrid from './partsGrid';
import _ from 'underscore'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

class Tyres extends Component {
    state = {
        user: {},
        tyres: [],
        manufacturers: [],
        width: [],
        height: [],
        rim: [],

        selectedWidth: "All",
        selectedHeight: "All",
        selectedRim: "All",
        selectedMnf: { name: "All", _id: "" }
    }

    async componentDidMount() {
        const { data: tyres } = await getTyres();
        let manufacturers = tyres.map(t => t.manufacturer)
        manufacturers = _.uniq(manufacturers, _.iteratee('_id'))
        console.log(manufacturers)

        manufacturers.unshift({ name: "All", _id: "" })


        const width = _.uniq(tyres.map(d => d.width))
        width.push("All")
        const height = _.unique(tyres.map(d => d.height))
        height.push("All")
        const rim = _.uniq(tyres.map(d => d.rim))
        rim.push("All")

        let user = auth.getCurrentUser()

        this.setState({ user, tyres, manufacturers, width, height, rim })
    }

    // prestashop
    handleManufacturerSelect = selected => {
        const selectedMnf = selected;
        console.log(selectedMnf)
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

    // handleLike = item => {
    //     const tyres = [...this.state.tyres]
    //     const index = tyres.indexOf(item)
    //     tyres[index] = { ...tyres[index] }
    //     tyres[index].liked = !tyres[index].liked
    //     this.setState({ tires: tyres })
    // }

    handleDelete = (item) => {
        deleteTyre(item)
        toast.success("Tyre Deleted Successfully");
        function redirect() { window.location = "/tyres" }
        setTimeout(redirect, 1000);
    }

    getPageData = () => {
        const { tyres: allTyres, selectedMnf, selectedWidth, selectedHeight, selectedRim } = this.state;
        let data = allTyres;

        data = selectedMnf && (selectedMnf.name !== "All") ? data.filter(t => t.manufacturer._id === selectedMnf._id) : allTyres;

        data = selectedWidth && (selectedWidth !== "All") ? data.filter(t => t.width === selectedWidth) : data

        data = selectedHeight && (selectedHeight !== "All") ? data.filter(t => t.height === selectedHeight) : data

        data = selectedRim && (selectedRim !== "All") ? data.filter(t => t.rim === selectedRim) : data;
        return { tyres: data }
    }



    render() {

        const { tyres } = this.getPageData();

        const { user, manufacturers, selectedMnf, width, selectedWidth, rim, selectedRim, height, selectedHeight } = this.state;

        const divider = <hr className="my-0" style={{ background: "#ffc107" }} />;

        return (
            <div className="page-content tyres-page">

                <div className="col-2">
                    <VListGroup
                        title="Manufacturer: "
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

                    {user && user.isSeller ? <Link to="/addTyre">Add Tyre</Link> : null}
                    <PartsGrid
                        items={tyres}
                        onDelete={this.handleDelete}
                        onLike={this.handleLike}
                        user={user}
                    />
                </div>

            </div>
        );
    }
}

export default Tyres;