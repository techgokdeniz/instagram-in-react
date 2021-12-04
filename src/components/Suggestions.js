import React from 'react'
import "../styles/Suggestions.scss"
import Profile from "./Profile"

function Suggestions() {
    return (
        <div className="suggestions">
            <div className="titleContainer">
                <div className="title">Suggestions For You</div>
                <span href="/">See All</span>
            </div>
            <Profile caption="Followed by mapvault + 3 more" urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true}/>
            <Profile caption="Followed by mapvault + 3 more" urlText="Follow" iconSize="medium" captionSize="small"  />
            <Profile caption="Followed by mapvault + 3 more" urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true} />
            <Profile caption="Followed by mapvault + 3 more" urlText="Follow" iconSize="medium" captionSize="small"  />
            <Profile caption="Followed by mapvault + 3 more" urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true} />
        </div>
    )
}

export default Suggestions
