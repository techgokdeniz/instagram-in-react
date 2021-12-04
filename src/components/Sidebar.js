import React from 'react'
import "../styles/Sidebar.scss"
import Sticky from 'react-sticky-el'
import Profile from "./Profile"
import Suggestions from "./Suggestions"
import Footer from "./Footer"
import image from "../images/profileimages.jpg"

function Sidebar() {
    return (
            <Sticky topOffset={-80}>
            <div className="sidebar">
                <Profile username="gokdenizcetin" caption="Gökdeniz Çetin" urlText="Switch" iconSize="big" image={image}/>
                <Suggestions />
                <Footer />
            </div>
            </Sticky>
    )
}

export default Sidebar
