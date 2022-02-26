import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
import CheckBox from "./checkBox"

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    console.log(error);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    if (error) return error.details[0].message
    if (!error) return null;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = null
    this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleCheckbox = ({ target: input }) => {
    const value = input.type === 'checkbox' ? input.checked : input.value;
    const name = input.name;

    const data = { ...this.state.data }
    data[name] = value;
    this.setState({ data });
  }

  handleFileUpload = e => {
    const data = { ...this.state.data }
    data.productImage = e.target.files[0]
    this.setState({ data })
  }

  renderButton(label) {
    return (
      <button className="btn btn-primary" >

        {/* returns error array (not sure) or null */}
        {label}
      </button >
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderCheckBox(name, label, type = "checkbox") {
    const { data, errors } = this.state;

    return (
      <CheckBox
        type={type}
        name={name}
        checked={data[name]}
        label={label}
        onChange={this.handleCheckbox}
        error={errors[name]}
      />
    )
  }

  renderFileUpload(name, label, type = "file") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        label={label}
        // value={data.productImage}
        onChange={this.handleFileUpload}
        error={errors[name]}
      />
    );
  }

}


export default Form;