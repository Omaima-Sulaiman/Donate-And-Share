import React, { Component } from 'react'
export class Navbar extends Component {


    render() {

        return (
            <>
                <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light ">

                    <button className="btn btn-outline-info  col-12 col-lg-1 my-sm-0" type="button">login </button>
                    <button className="btn btn-outline-info  col-12 col-lg-1 my-sm-0" type="button">signup </button>

                </nav>
            </>
        );
    }
}


export default Navbar
