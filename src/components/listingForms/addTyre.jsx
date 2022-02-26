import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { addTyre } from '../../services/tyresService'
import auth from '../../services/authService'
import { getCategory } from '../../services/categoriesService'
import { getManufacturers } from '../../services/manufacturersServices'
import { toast } from 'react-toastify';

class AddTyre extends Form {
    state = {
        data: {
            // title: "",
            category: "",
            mnf: "",
            width: "",
            height: "",
            rim: "",
            year: "",
            numberInStock: "",
            seller: "",
            price: "",
            homeInstallation: false
        },
        categories: [],
        manufacturers: [],
        types: [],
        errors: {}
    };

    async componentDidMount() {
        const { sellerId } = auth.getCurrentUser()
        const category = await getCategory("tyres")
        const manufacturers = category[0].manufacturers
        const types = category[0].types

        const data = { ...this.state.data }
        data.seller = sellerId
        data.category = category[0]._id
        console.log(manufacturers)
        console.log(types)
        console.log(data)
        this.setState({ data, types, manufacturers })
    }

    async componentDidUpdate(prevProps, prevState) {
        const { data } = this.state
        if (prevState.data.width !== data.width) {
            // const manufacturers = await getManufacturers(data.category)
            // this.setState({ manufacturers })
            console.log(data)
        }
    }

    schema = {
        // title: Joi.string().required().min(3).max(55),
        category: Joi.string().required(),
        mnf: Joi.string().required(),
        type: Joi.string().required(),
        width: Joi.number().min(105).max(335).required(),
        height: Joi.number().min(20).max(255).required(),
        rim: Joi.number().min(13).max(24).required(),
        price: Joi.number().min(1).max(10000).required(),
        year: Joi.number().min(2021).max(new Date().getFullYear()).required(),
        numberInStock: Joi.number().min(1).max(255).required(),
        seller: Joi.string().required(),
        homeInstallation: Joi.boolean().required(),
        productImage: Joi.string().required()
    }

    doSubmit = async () => {
        try {
            const { data } = this.state
            console.log(data)
            let formData = new FormData();
            Object.entries(data).forEach(([key, value]) =>
                formData.append(key, value));

            await addTyre(formData)
                .then(toast.success("Adding Tyre in progress.."))
            function redirect() { window.location = "/tyres" }
            setTimeout(redirect, 1000);

            // toast.success("Posting tyre, you will be redirected once done..");
            // function redirect() { window.location = "/tyres" }
            // setTimeout(redirect, 3000);
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors }
                errors.seller = ex.response.data
                console.log(errors)
                this.setState({ errors })
            }
        }
    };

    render() {
        const { manufacturers, types } = this.state
        return (
            <div className="container d-flex justify-content-center">
                <form onSubmit={this.handleSubmit} className="mx-auto">


                    <div className="row mt-5 pb-3">
                        <div className="col-1"></div>
                        <div className="col-4">
                            <h3 className="mt-3"><u>Add Tyre</u></h3>
                        </div>
                        <div className="col-3">
                            {this.renderSelect("mnf", "Manufacturer", manufacturers)}
                        </div>
                        <div className="col-3">
                            {this.renderSelect("type", "Tyre Rating", types)}
                        </div>
                        <div className="col-1"></div>
                    </div>
                    <div className="col-2"></div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-3">
                            {this.renderInput("width", "Width")}
                        </div>
                        <div className="col-2">
                            {this.renderInput("height", "Height")}
                        </div>
                        <div className="col-2">
                            {this.renderInput("rim", "Rim")}
                        </div>
                        <div className="col-3">
                            {this.renderInput("year", "Year")}
                        </div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-3">
                            {this.renderInput("price", "Price")}
                        </div>
                        <div className="col-3">
                            {this.renderInput("numberInStock", "Number In Stock")}
                        </div>
                        <div className="col-4">
                            {this.renderFileUpload("productImage", "Product Image")}
                        </div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row m-auto">
                        <div className="col-1"></div>
                        {this.renderCheckBox("homeInstallation", "Free Home Installation")}
                        <div className="col-4"></div>
                        {this.renderButton("Submit")}
                    </div>
                </form>
            </div>
        );
    }
}

export default AddTyre;
