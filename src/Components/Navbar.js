import React from 'react';
import PropTypes from 'prop-types';
import "./Navbar.css";
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <div  className='my-1'>
             <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.elementmode} bg-${props.elementmode}`}>
            <Link className="navbar-brand" to = "/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li  className="nav-item active">
                  <Link  className="nav-link" to="/TextEditor">{props.TextEditor}</Link>
                </li>
                <a id="asterisk" href="https://asteriskeducation.blogspot.com/"><li className="nav-item">
                  {props.asterisk}
                </li></a>
                <li className="nav-item">
                  <Link className="nav-link" to='/About'>{props.about}</Link>
                </li>
              </ul>
              
              <form className="d-flex ">
                <input className={`form-control me-2 bg-${props.elementmode}`} type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
                <div id="darkmodeswitch" className="form-check form-switch mx-3" >
                  <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>
                </div>
          </nav>
        </div>
    )
}
Navbar.propTypes = {title: PropTypes.string,
                    TextEditor: PropTypes.string,
                    about: PropTypes.string,}

Navbar.defaultProps= {
                      title : " TextEditor",
                      TextEditor : "TextEditor",
                      asterisk:"Asterisk Edu.",
                      about : "About"}
