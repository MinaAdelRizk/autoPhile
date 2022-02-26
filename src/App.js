//import logo from './logo.svg';
import React from 'react';
import NavBar from './components/navBar'
import Home from './components/home'
import SpareParts from './components/spareParts';
import Maintenance from './components/maintenance';
import NotFound from './components/notFound';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import Profile from './components/profile';
import Fluids from './components/fluids';
import AddFluid from './components/listingForms/addFluid';
import AddTyre from './components/listingForms/addTyre'
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
          <Route path="/tyres/:addTyre"
            component={AddTyre} />
          <Route path="/tyres" component={Tyres} />
          <Route path="/batteries" component={SpareParts} />
          <Route path="/request-service-quotation" component={SpareParts} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/profile" render={props => <Profile user={user} />} />

          <Route
            path="/fluids/:addFluid"
            render={props => <AddFluid />}
          />
          <Route path="/fluids" component={Fluids} />

          <Route
            path="/addTyre"
            render={props => <AddTyre {...props} />}
          />
          <Redirect exact from="/" to="/home" />

          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </main>

    </React.Fragment >
  );
}

export default App;