import React from "react";
import logo from "../screens/images/new.png"
import "./Header.css";
import Register from "../screens/Register"
import { Switch, Route,Link } from 'react-router-dom'
class Header extends React.Component 
{
    render()
    {
        return (
            <>
                <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">
                  <Link to="/home">  <img src={logo} alt="logo" style={{width:"40px"}} /></Link>
                </a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link active" id="logo-name" href="#"><span>{this.props.leftElement}</span><span className="sr-only"></span></a>
                    {/* <a className="nav-item nav-link" href="#">Features</a>
                    <a className="nav-item nav-link" href="#">Pricing</a> */}
                    </div>
                </div>
             
                {this.props.rightElement}
       
                </nav>
            </>
        );
    }
}

export default Header;