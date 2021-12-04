import React from 'react'
import "../styles/Cards.scss"
import Stories from "./Stories"
import Card from "./Card"

function Cards() {
    const commentsOne = [
        {
            user: "ahmet",
            text: "Woah dude, this is awesome! 🔥",
            id: 1,
        },
        {
            user: "mehmet",
            text: "Like!",
            id: 2,
        },
        {
            user: "ayca",
            text: "Niceeeee!",
            id: 3,
        },
    ];

    const commentsTwo = [
        {
            user: "serkan",
            text: "Amazing content, keep it up!",
            id: 4,
        },
    ];

    const commentsThree = [
        {
            user: "Kerem",
            text: "Love this!",
            id: 5,
        },
    ];

    return (
        <div className="cards">
            <Stories/>
            <Card
                accountName="ahmet"
                storyBorder={true}
                image="https://picsum.photos/800/900"
                comments={commentsOne}
                likedByText="dadatlacak"
                likedByNumber={89}
                hours={16}
            />
            <Card
                accountName="mehmet"
                image="https://picsum.photos/800"
                comments={commentsTwo}
                likedByText="therealadamsavage"
                likedByNumber={47}
                hours={12}
            />
            <Card
                accountName="ayca"
                storyBorder={true}
                image="https://picsum.photos/800/1000"
                comments={commentsThree}
                likedByText="mapvault"
                likedByNumber={90}
                hours={4}
            />
        </div>
    )
}

export default Cards
