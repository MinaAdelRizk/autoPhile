import React from "react";
import Joi from "joi";
import Form from "../common/form";
import auth from '../../services/authService'
import { addFluid } from '../../services/fluidsService'
import { getCategory } from '../../services/categoriesService';


class AddFluid extends Form {
    state = {
        data: {
            // title: "", category: "",
            // type: "", vsc: "",
            // mnf: "", price: "",
            // volume: "", numberInStock: "", seller: "",
            // productImage: "",
        },
        categories: [],
        manufacturers: [],
        types: [],
        errors: {}
    };

    async componentDidMount() {
        const { sellerId } = auth.getCurrentUser()
        const category = await getCategory("fluids")

        const manufacturers = category[0].manufacturers
        const types = category[0].types

        const data = { ...this.state.data }
        data.seller = sellerId
        data.category = category[0]._id
        // await getManufacturers(data.category)
        console.log(manufacturers)
        console.log(types)
        console.log(data)
        this.setState({ data, manufacturers, types })
    }

    async componentDidUpdate(prevProps, prevState) {
        const { data } = this.state
        if (prevState.data.type !== data.type) {
            // const manufacture rs = await getManufacturers(data.category)
            // this.setState({ manufacturers })
            console.log(data)
            console.log(this.state.categories)
        }
    }

    schema = {
        title: Joi.string().required().min(3).max(55),
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

    doSubmit = async () => {

        try {
            const { data } = this.state

            let formData = new FormData();
            Object.entries(data).forEach(([key, value]) =>
                formData.append(key, value));

            addFluid(formData)

            // toast.success("Posting fluid, you will be redirected once done..");
            // function redirect() { window.location = "/fluids" }
            // setTimeout(redirect, 1000);
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
        const { manufacturers, types } = this.state
        return (
            <div className="container m-0A">
                <h1>Add Fluid</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("mnf", "Manufacturer", manufacturers)}
                    {this.renderSelect("type", "Type", types)}
                    {this.renderInput("vsc", "Viscocity")}
                    {this.renderInput("price", "Price")}
                    {this.renderInput("volume", "Volume")}
                    {this.renderInput("numberInStock", "Number In Stock")}
                    {this.renderFileUpload("productImage", "Upload Product Image")}
                    {this.renderButton("Submit")}
                </form>
            </div>
        );
    }
}

export default AddFluid;
