import '../styles/Navigation.scss';
import React from 'react'
import {ReactComponent as Home} from "../images/Home.svg";
import { ReactComponent as Inbox } from "../images/Direct.svg";
import { ReactComponent as Explore } from "../images/Safari.svg";
import { ReactComponent as Nofications } from "../images/Love.svg";
import image from "../images/profileimages.jpg";
import ProfileIcon from './ProfileIcon';

function Menu() {
    return (
        <div className="menu">
            <Home className="icon"/>
            <Inbox className="icon"/>
            <Explore className="icon"/>
            <Nofications className="icon" />
            <ProfileIcon iconSize="small"  image={image}  storyBorder={true}/>
        </div>
    )
}

export default Menu;
