import React, { Component } from 'react'
import Army from "./withArm";
class Shivangi extends Component {
   
    render() {
        return (
            <div>
                <h3 onMouseOver={this.props.hochandleGunshots}>
                Shivangi {this.props.hocgunname} gunshots :{this.props.hocgunshots}</h3>
            </div>
        );
    }
}

export default Army(Shivangi,10);
