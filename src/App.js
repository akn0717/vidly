import React, { Component } from 'react';
import NavBar from './components/navbar';
import Movies from './components/movies';
import Customers from './components/Customers/Customers';
import Rentals from './components/Rentals/rentals';
import NotFound from './components/common/notFound';
import { Switch, Route, Redirect } from 'react-router-dom';
import MovieForm from './components/common/movieForm';
import LoginForm from './components/common/loginForm';
import RegisterForm from './components/common/registerForm';
import './App.css';
class App extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Switch>
                    <Route path='/customers' component={Customers}></Route>
                    <Route path='/login' component={LoginForm}></Route>
                    <Route path='/movies/:id' component={MovieForm}></Route>
                    <Route path='/movies' component={Movies}></Route>
                    <Route path='/rentals' component={Rentals}></Route>
                    <Route path='/not-found' component={NotFound}></Route>
                    <Route
                        path='/registerForm'
                        component={RegisterForm}
                    ></Route>
                    <Redirect from='/' to='/movies' exact></Redirect>
                    <Redirect to='/not-found'></Redirect>
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
