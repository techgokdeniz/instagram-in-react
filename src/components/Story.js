import React from 'react'
import "../styles/Story.scss"
import ProfileIcon from './ProfileIcon'
import Users from "../data/User.js"

function Story() {

    let accountName=Users[Math.floor(Math.random()*Users.length)].username;
    if(accountName.length > 10){
        accountName=accountName.substring(0,10)+"...";
    }

    return (
        <div className="story">
            <ProfileIcon iconSize="big" storyBorder={true}/>
            <span className="accountName">{accountName}</span>
        </div>
    )
}

export default Story
