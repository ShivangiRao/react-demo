import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        if(this.props.pic1 === "NoImage"){
            throw new Error("Image not Found");
        }
        return (
           <img src={this.props.pic1} alt="MyPic" width="300px"/>
        )
    }
}
