import React, { Component } from 'react'
import "./App.css";
import Form from "./Form";
import Logo from './Logo';
import Signup from './Signup';
import ForgotPwd from './ForgotPwd';
import { BrowserRouter, Route } from "react-router-dom";


export default class Project extends Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>                    
                    <Logo />
                    <Route exact path="/" component={Form} />
                    <Route exact path="/signin" component={Form} />
                    <Route exact path="/signup" component={Signup} />   
                    <Route exact path="/forgotpwd" component={ForgotPwd} />                 
                </BrowserRouter>
            </React.Fragment>
            
        )
    }
}
