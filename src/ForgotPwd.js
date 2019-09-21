import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class ForgotPwd extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="Form_box">
            <h2>Forgot your password?</h2>
            <p className="text-center">Please enter the email address associated with your account and 
we’ll email you a link to reset your password.</p> 
            <form>
            <label>
            Email Address*</label><br/>
            <input type="text" name="" value="" placeholder="Email Address"/><br/><br/>
            <button type="submit">Reset Password</button>
                </form>
                </div>
                <div className="hyperlink">
                <p className="text-center">Already a BizNexus Member? <Link to="/signin">Sign in</Link></p>
                
                </div>
                </React.Fragment>
        )
    }
}
