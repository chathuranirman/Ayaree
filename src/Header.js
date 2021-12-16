import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Header.css';
import logo from './img/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import Date from './Date';
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";


function Header() {
  const history = useHistory();
  return (


    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
      <a className="navbar-brand" href="index.html"><img className='header-logo' src={logo} alt='logo' /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">


        <div className="header">


          <div className='search-bar'>
            <input type='text' placeholder='Where to go' />
            <div><Date /></div>
            <div className="headerDivider"></div>
            <input type="number" name="numberOfGuests" defaultValue={"Guests"} className='header-guests' placeholder='Guests' min={0} max={1000} />

            {/*  min={0} max={1000}  defaultValue={"Guests"}  className='header-guests' placeholder='Guests'*/}

            <Button onClick={() => history.push('./search')}><div className="ico-color"><SearchIcon /></div></Button>
          </div>
          <div> </div>
          <div className='login-user'>
            <div className="ico-color"> <LanguageIcon /></div>
            <div className="mr-5 ico-color"> <ExpandMoreIcon /></div>
            <div className="">   <Avatar /></div>

          </div>


        </div>
      </div>
    </nav>










  )
}
export default Header

