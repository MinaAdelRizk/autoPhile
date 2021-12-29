//import logo from './logo.svg';
import React from 'react';
import NavBar from './components/navBar'
import Home from './components/home'
import SpareParts from './components/spareParts';
import Maintenance from './components/maintenance';
import NotFound from './components/notFound';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import Fluids from './components/fluids';
import AddFluid from './components/addFluid';
import AddTyre from './components/addTyre'
import Tyres from './components/tyres';
import auth from './services/authService'

import { Switch, Route, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


let selectedCar = localStorage.getItem('selectedCar');
// let userName = localStorage.getItem("name")


function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    let user = auth.getCurrentUser()
    setUser(user)
  }, []);

  return (

    <React.Fragment>

      <ToastContainer />

      <NavBar selectedCar={selectedCar || "Select A Car"} user={user} />

      <main className="container-fluid page-holder">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/spare-parts" component={SpareParts} />
          <Route path="/maintenance" component={Maintenance} />
          <Route path="/tyres" component={Tyres} />
          <Route path="/batteries" component={SpareParts} />
          <Route path="/fluids" component={Fluids} />
          <Route path="/request-service-quotation" component={SpareParts} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />

          <Route path="/addFluid" render={props => {
            if (!user) return <Redirect to="/login" />
            if (!user.isSeller) return <Redirect to="/fluids" />
            return <AddFluid {...props} />
          }} />

          <Route path="/addTyre" render={props => {
            if (!user) return <Redirect to="/login" />
            if (!user.isSeller) return <Redirect to="/fluids" />
            return <AddTyre {...props} />
          }} />

          <Redirect exact from="/" to="/home" />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </main>

    </React.Fragment >
  );
}

export default App;