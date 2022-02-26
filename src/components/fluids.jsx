import React, { Component } from 'react';
import { deleteFluid, getFluids } from '../services/fluidsService';
import auth from '../services/authService'
import PartsGrid from './partsGrid';
import HListGroup from "./common/hListGroup"
import VListGroup from './common/vListGroup';
import _, { iteratee } from 'underscore'
import { Link } from 'react-router-dom';
import AddFluid from './listingForms/addFluid';
import { deleteImage } from '../services/uploadsService';
import { toast } from 'react-toastify';

class Fluids extends Component {
    state = {
        fluids: [],
        mnf: [],
        selectedMnf: null,
        vsc: [],
        selectedVsc: null,
        user: {}
    }

    async componentDidMount() {

        let { data: fluids } = await getFluids()

        let mnf = _.uniq(fluids.map(f => f.mnf), iteratee('_id'))
        mnf.unshift({ name: "All", _id: "" })
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

    handleDelete = async item => {
        const originalState = this.state.fluids;
        const fluids = this.state.fluids.filter(f => f._id !== item._id)
        this.setState({ fluids })
        await deleteFluid(item)
            .then(toast.success("Deleted Successfully"))
            .catch(ex => {
                toast.warn(ex.response.data)
                this.setState({ fluids: originalState })
            })


        // deleteImage(item.productImage);



        // this.props.history.push('/fluids')
    }
    getPageData = () => {
        const { fluids: allFluids, selectedMnf, selectedVsc } = this.state;

        let data = allFluids;

        data = selectedMnf && (selectedMnf._id !== "") ? data.filter(f => f.mnf._id === selectedMnf._id) : data;

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
                        title="Manufacturer"
                        items={mnf}
                        selectedItem={selectedMnf}
                        onItemSelect={this.handleManufacturerSelect}
                    />
                </div>

                <div className="col-10 my-1">

                    {user && user.isSeller ?
                        <Link to="fluids/addFluid" render={<AddFluid />}><button className="btn btn-success">Add Fluid</button></Link> : null}

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