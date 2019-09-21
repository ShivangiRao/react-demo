import React, { Component } from 'react'
import { Link } from "react-router-dom";




export default class Form extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            fields: {},
            errors: {}
        }
     }
     handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        

        
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Please enter email";
           errors["password"] = "Please enter password";
           
        }

     
        this.setState({errors: errors});
        return formIsValid;
    }
    contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
           return

        }else{
          
            return
                     
        }

    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

 
    render() {
        return (
            <React.Fragment>
            <div className="Form_box">
                <h2>Log in to BizNexus</h2>
                <form onSubmit= {this.contactSubmit.bind(this)}> 
                <label>
                Email Address</label><br/>
                <input type="text" name=""  placeholder="Email Address" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
                <span className="error">{this.state.errors["name"]}</span><br/>
                
                <label>
                Password</label><br/>
                <input type="password" name="" defaultValue="" placeholder="Password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
                <span className="error">{this.state.errors["password"]}</span><br/>
                <button type="submit">Sign In</button>
            </form>
            
            </div>
            <div className="hyperlink">
            <p className="d-inline">Don't have an account? <Link to="/signup">Sign up</Link></p>
            <p className="float-right">Help: <Link to="/forgotpwd">Forgot your password?</Link></p>
            </div>
            </React.Fragment>
        )
    }
}
