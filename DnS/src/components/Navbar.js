import React, { Component } from 'react'
import Signup from './Signup'
import Login from './Login'

import {BrowserRouter as Router, Swich, Route, Link } from 'react-router-dom'

export class Navbar extends Component {


    render() {

        return (
            <>
                <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light ">
                    <Link to='/login'>
                      <button className="btn btn-outline-info  col-12 col-lg-1 my-sm-0" type="button">login </button>
                    </Link>
                    <Link to='/signup'>
                      <button className="btn btn-outline-info  col-12 col-lg-1 my-sm-0" type="button">signup </button>
                    </Link>
                    {/* <Signup /> */}
                </nav>
            </>
        );
    }
}


export default Navbar
