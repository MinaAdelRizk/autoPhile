import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";
import { Redirect } from "react-router-dom";

class LoginForm extends Form {

  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {

    try {

      const { data } = this.state;
      const { state } = this.props.location;
      await auth.login(data.username, data.password);
      window.location = state ? state.from.pathname : '/';

    } catch (ex) {

      if (ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors })
      }
    }
  };

  render() {

    if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
        <p>Supplier terms and conditions:
          A-1 supply required part as requested upon a consumer order as per the described sale commition decribed in the table of categories and suppliers</p>
      </div>
    );
  }
}

export default LoginForm;
