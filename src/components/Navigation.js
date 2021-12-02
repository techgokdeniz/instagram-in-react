import "../styles/Menu.scss";
import Logo from "../images/instagramLogo.png";
import SearchIcon from "../images/SearchIcon.png";
import Menu from "../components/Menu";

import React from 'react'

function Navigation() {
    return (
        <div className="navigation">
            <div className="container">
                <img className="logo" src={Logo} alt="instagram logo" />
                <div className="searchbar">
                    <img className="searchIcon" src={SearchIcon} alt="search icon" />
                    <span className="searchText">Search</span>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default Navigation;
