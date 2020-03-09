//import React from "react";
import React, { Component } from 'react';
import './Nav.css'

import { Button } from 'react-bootstrap';
import ApplyJob from './ApplyJob';
import Login from './login';
import Logout from './logout'
class Nav extends Component {
    getSignUp(props) {
        this.props.history.push('/Sign up');

    }
    getLogout(props) {
        this.props.history.push('/Logout');

    }
    render() {
        return (
            <div className="nav_header">
                 <Button bsStyle="primary" onClick={this.getLogout.bind(this)} >Logout</Button> 
       {/* <Button bsStyle="primary" onClick={this.getSignUp.bind(this)}>Sign Up</Button>  */}
            </div>

        )
    }

}
export default Nav;
