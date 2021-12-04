import React from 'react'
import "../styles/CardMenu.scss";
import {ReactComponent as Inbox} from "../images/inbox.svg"
import { ReactComponent as Comments } from "../images/comments.svg"
import { ReactComponent as Nofications } from "../images/notifications.svg"
import { ReactComponent as Bookmark } from "../images/bookmark.svg"

function CardMenu() {
    return (
        <div className="cardMenu">
            <div className="interacionts">
                <Nofications className="icon"/>
                <Comments className="icon"/>
                <Inbox className="icon"/>
            </div>
            <Bookmark className="icon"/>
        </div>
    )
}

export default CardMenu
