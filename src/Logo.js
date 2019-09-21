import React, { Component } from 'react'
import Image from "./biznexus-logo.png"

export default class Logo extends Component {
    render() {
        return (
            <img src ={Image} alt="myimg" className="logo"/> 
        )
    }
}
