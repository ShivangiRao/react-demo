import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Select from 'react-select';

const options = [
    { value: 'Business Broker', label: 'Business Broker' },
    { value: 'Business Broker Agent', label: 'Business Broker Agent' },
    { value: 'Accountant', label: 'Accountant' },
    { value: 'Attorney', label: 'Attorney' },
    { value: 'Loan Officer', label: 'Loan Officer' },
  ];

export default class Signup extends Component {
    state = {
        selectedOption: null,
      };
    constructor(props){
        super(props);
 
        this.state = {
            fields: {},
            errors: {},
        }
     }
    
     handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        
       

        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Please enter your name.";
           errors["email"] = "Please enter email.";
           
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
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };
  

    render() {
        const { selectedOption } = this.state;
        return (
            <React.Fragment>
            <div className="Form_box">
            <h2>Create your BizNexus account</h2>
            <p className="text-center">Sign up for your free profile to get found by buyers 
and sellers as they search on BizNexus.</p> 
            <form onSubmit= {this.contactSubmit.bind(this)}>
            <label>
            Your name</label><br/>
            <input type="text" name=""  placeholder="John Doe" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
            <span className="error">{this.state.errors["name"]}</span><br/>
            <label>
            Email address</label><br/>
            <input type="email" name=""  placeholder="john.doe@gmail.com" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
            <span className="error">{this.state.errors["email"]}</span><br/>
            <label for="professionlist">I am a...</label>
          
            <Select isMulti
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />

            <button type="submit">Continue</button>

        </form>
        
        </div>
        <div className="hyperlink">
        <p className="text-center">Already a BizNexus Member? <Link to="/signin">Sign in</Link></p>
        
        </div>  
        </React.Fragment>
        
        )
    }
}

