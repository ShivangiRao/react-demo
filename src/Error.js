import React, { Component } from 'react'

export default class Error extends Component {
    state = {
        hashError: false
    }
    static getDerivedStateFromError(error){
        return {hashError: true};
    }
    render() {
        if(this.state.hashError){
            return <h3>Error: Image Not Found</h3>
        }
        return this.props.children;
    }
}
