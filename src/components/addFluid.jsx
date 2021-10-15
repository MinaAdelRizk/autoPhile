import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { addFluid } from '../services/fluidsService'
import auth from '../services/authService'
import { getCategories } from '../services/categoryService'
import { toast } from 'react-toastify';

class ListFluid extends Form {
    state = {
        data: {
            title: "", category: "",
            type: "", vsc: "",
            mnf: "", price: "",
            volume: "", numberInStock: "", seller: ""
        },
        categories: [],
        errors: {}
    };

    async componentDidMount() {
        const user = auth.getCurrentUser()
        const categories = await getCategories()
        console.log(categories)
        console.log(user)
        const id = user.sellerId
        const data = { ...this.state.data }
        data.seller = id
        this.setState({ data, categories })
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
        seller: Joi.string().required()
    }

    doSubmit = async () => {
        try {
            const value = { ...this.state.data }
            await addFluid(value)
            toast.success("Posting fluid, you will be redirected once done..");
            function redirect() { window.location = "/fluids" }
            setTimeout(redirect, 3000);
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
        return (
            <div className="m-5">
                <h1>Add Fluid</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("category", "Category", this.state.categories)}
                    {this.renderInput("type", "Type")}
                    {this.renderInput("vsc", "Viscocity")}
                    {this.renderInput("mnf", "Manufacturer")}
                    {this.renderInput("price", "Price")}
                    {this.renderInput("volume", "Volume")}
                    {this.renderInput("numberInStock", "Number In Stock")}
                    {/* {this.renderInput("seller", "Seller")} */}
                    {this.renderButton("Submit")}
                </form>
            </div>
        );
    }
}

export default ListFluid;
