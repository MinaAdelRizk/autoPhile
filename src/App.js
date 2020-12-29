//import logo from './logo.svg';
import React, { Component } from 'react';

import NavBar from './components/navBar'
import Home from './components/home'
import SpareParts from './components/spareParts';
import Maintenance from './components/maintenance';
import NotFound from './components/notFound';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';

import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container-fluid">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/spare-parts" component={SpareParts} />
            <Route path="/maintenance" component={Maintenance} />
            <Route path="/tyres" component={SpareParts} />
            <Route path="/batteries" component={SpareParts} />
            <Route path="/fluids" component={SpareParts} />
            <Route path="/request-service-quotation" component={SpareParts} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment >
    );
  }
}

export default App;
