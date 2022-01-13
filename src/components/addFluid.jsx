import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { addFluid } from '../services/fluidsService'
import auth from '../services/authService'
import { getCategories } from '../services/categoriesService'
import { getManufacturers } from "../services/manufacturersServices";
import { toast } from 'react-toastify';
import axios from "axios";


class AddFluid extends Form {
    state = {
        data: {
            title: "", category: "",
            type: "", vsc: "",
            mnf: "", price: "",
            volume: "", numberInStock: "", seller: "",
            productImage: "",
        },
        categories: [],
        manufacturers: [],
        errors: {}
    };

    async componentDidMount() {
        const { sellerId } = auth.getCurrentUser()
        const categories = await getCategories()
        const manufacturers = await getManufacturers()
        const data = { ...this.state.data }
        data.seller = sellerId
        this.setState({ data, categories, manufacturers })
    }

    async componentDidUpdate(prevProps, prevState) {
        const { data } = this.state
        if (prevState.data.category !== data.category) {
            const manufacturers = await getManufacturers(data.category)
            this.setState({ manufacturers })
        }
    }
    schema = {
        title: Joi.string().required(),
        category: Joi.string().required(),
        type: Joi.string().required(),
        vsc: Joi.string().required(),
        mnf: Joi.string().required(),
        price: Joi.string().required(),
        volume: Joi.string().required().label("Volume"),
        numberInStock: Joi.number().required(),
        seller: Joi.string().required(),
        productImage: Joi.string().required()
    }

    fileSelectedHandler = e => {
        const { data } = this.state
        data.productImage = e.target.files[0]
        this.setState({ data })
    }

    doSubmit = async () => {

        try {
            const { data } = this.state
            let formData = new FormData();

            formData.append("productImage", data.productImage);
            formData.append("category", data.category);
            formData.append("title", data.title);
            formData.append("type", data.type);
            formData.append("vsc", data.vsc);
            formData.append("mnf", data.mnf);
            formData.append("price", data.price);
            formData.append("volume", data.volume);
            formData.append("seller", data.seller);
            formData.append("numberInStock", data.numberInStock);

            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }

            console.log(formData)
            axios.post('http://localhost:3000/api/fluids', formData, config)
            await addFluid(data)

            toast.success("Posting fluid, you will be redirected once done..");
            function redirect() { window.location = "/fluids" }
            setTimeout(redirect, 2000);
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors }
                errors.seller = ex.response.data
                this.setState({ errors })
            }
        }
    };


    render() {
        const { categories, data, manufacturers } = this.state
        return (
            <div className="m-5">
                <h1>Add Fluid</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("category", "Category", categories)}
                    {data.category && this.renderSelect("mnf", "Manufacturer", manufacturers)}
                    {this.renderInput("type", "Type")}
                    {this.renderInput("vsc", "Viscocity")}
                    {this.renderInput("price", "Price")}
                    {this.renderInput("volume", "Volume")}
                    {this.renderInput("numberInStock", "Number In Stock")}
                    {/* {this.renderInput("productImage", "Image", "file", this.fileSelectedHandler())} */}

                    <input
                        type="file"
                        name="productImage"
                        onChange={this.fileSelectedHandler}
                    />

                    {this.renderButton("Submit")}
                </form>

            </div>
        );
    }
}

export default AddFluid;
