import React, { Component } from 'react';
import { deleteFluid, getFluids, getMnf } from '../services/fluidsService';
import auth from '../services/authService'
import PartsGrid from './partsGrid';
import HListGroup from "./common/hListGroup"
import VListGroup from './common/vListGroup';
import _ from 'underscore'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

class Fluids extends Component {
    state = {
        fluids: [],
        mnf: [],
        selectedMnf: "All",
        vsc: [],
        selectedVsc: "All",
        user: {}
    }

    async componentDidMount() {

        let { data } = await getFluids()
        let fluids = data

        let mnf = _.uniq(fluids.map(f => f.mnf))
        mnf.unshift("All")

        let vsc = _.uniq(fluids.map(f => f.vsc))
        vsc.unshift("All")

        let user = auth.getCurrentUser()

        this.setState({ fluids, mnf, vsc, user })
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

    handleDelete = item => {
        deleteFluid(item)
        toast.success("Fluid Deleted Successfully");
        function redirect() { window.location = "/fluids" }
        setTimeout(redirect, 1000);
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
        const { mnf, selectedMnf, vsc, selectedVsc, user } = this.state;

        return (
            <div className="page-content">

                <div className="col-2">
                    <VListGroup
                        items={mnf}
                        selectedItem={selectedMnf}
                        onItemSelect={this.handleManufacturerSelect}
                    />
                </div>

                <div className="col-10 my-1">

                    {user ? user.isSeller && <Link to="/addFluid">Add Fluid</Link> : null}

                    <HListGroup
                        items={vsc}
                        selectedItem={selectedVsc}
                        onItemSelect={this.handleViscocitySelect}
                    />

                    <PartsGrid
                        items={fluids}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        user={user}
                    />
                </div>

            </div>
        );
    }
}

export default Fluids;