import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { addTyre } from '../services/tyresService'
import auth from '../services/authService'
import { getCategories } from '../services/categoriesService'
import { getManufacturers } from '../services/manufacturersService'
import { toast } from 'react-toastify';

class ListFluid extends Form {
    state = {
        data: {
            title: "",
            category: "",
            width: "",
            height: "",
            rim: "",
            manufacturer: "",
            year: "",
            numberInStock: "",
            seller: "",
            price: ""
        },
        categories: [],
        manufacturers: [],
        errors: {}
    };

    async componentDidMount() {
        const user = auth.getCurrentUser()
        const categories = await getCategories()
        const manufacturers = await getManufacturers()

        console.log(user)
        const seller = user.sellerId

        const data = { ...this.state.data }
        data.seller = seller
        this.setState({ data, categories, manufacturers })
    }

    schema = {
        title: Joi.string().required(),
        category: Joi.string().required(),
        width: Joi.string().required(),
        height: Joi.string().required(),
        rim: Joi.string().required(),
        manufacturer: Joi.string().required(),
        price: Joi.string().required(),
        year: Joi.string().required().label("Year"),
        numberInStock: Joi.number().required(),
        seller: Joi.string().required()
    }

    doSubmit = async () => {
        try {
            const value = { ...this.state.data }
            console.log(value)
            await addTyre(value)
            toast.success("Posting tyre, you will be redirected once done..");
            function redirect() { window.location = "/tyres" }
            setTimeout(redirect, 3000);
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
        return (
            <div className="m-5">
                <h1>Add Tyre</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("category", "Category", this.state.categories)}
                    {this.renderInput("width", "Width")}
                    {this.renderInput("height", "Height")}
                    {this.renderInput("rim", "Rim")}
                    {this.renderInput("year", "Year")}
                    {this.renderSelect("manufacturer", "Manufacturer", this.state.manufacturers)}
                    {this.renderInput("price", "Price")}
                    {this.renderInput("numberInStock", "Number In Stock")}
                    {this.renderButton("Submit")}
                </form>
            </div>
        );
    }
}

export default ListFluid;
