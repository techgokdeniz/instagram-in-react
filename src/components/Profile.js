import React from 'react'
import "../styles/Profile.scss"
import ProfileIcon from './ProfileIcon'
import Users from "../data/User"

function Profile(props) {
    const{
        username,
        caption,
        urlText,
        iconSize,
        captionSize,
        storyBorder,
        hideAccountName,
        image,
    } = props;

    let accountName = username ? username : Users[Math.floor(Math.random() * Users.length)].username;

    return (
        <div className="profile">
            <ProfileIcon iconSize={iconSize} storyBorder={storyBorder} image={image}/>
            {(accountName || caption) && !hideAccountName && (
                <div className="textContainer">
                    <span className="accountName">{accountName}</span>
                    <span className={`caption ${captionSize}`}>{caption}</span>
                </div>
            )}
            <a href="/">{urlText}</a>
        </div>
    )
}

export default Profile
