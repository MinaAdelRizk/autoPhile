import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { addFluid } from '../services/fluidsService'
import auth from '../services/authService'
import { getCategories } from '../services/categoriesService'
import { toast } from 'react-toastify';
import http from "../services/httpService";

class ListFluid extends Form {
    state = {
        data: {
            title: "", category: "",
            type: "", vsc: "",
            mnf: "", price: "",
            volume: "", numberInStock: "", seller: "",
            productImage: ""
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
        seller: Joi.string().required(),
        productImage: Joi.string().required()
    }

    doSubmit = async () => {
        try {
            const value = { ...this.state.data }
            await addFluid(value)
            // toast.success("Posting fluid, you will be redirected once done..");
            // function redirect() { window.location = "/fluids" }
            // setTimeout(redirect, 3000);
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors }
                errors.seller = ex.response.data
                this.setState({ errors })
            }
        }
    };

    handleFileUpload = (e) => {
        let file = e.target.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(file)

        reader.onload = (e) => {
            // const url = "http://localhost:3000/api/fluids/"
            const productImage = { file: e.target.result }
            console.log(productImage)
            const data = { ...this.state.data }
            data.productImage = productImage
            console.log(data)
            this.setState({ data })
            // console.log(this.state.data);
        }
        // this.validate();
    }
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
                    {/* {this.renderInput("productImage", "Image", "file")} */}

                    {/* {this.renderInput("seller", "Seller")} */}
                    <input type="file" name="productImage" onChange={this.handleFileUpload} />
                    {this.renderButton("Submit")}


                </form>
            </div>
        );
    }
}

export default ListFluid;
