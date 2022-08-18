import React, { useState } from "react";
import './MyActivities.css'

import Profile from '../../components/Profile/Profile'
import CardList from "../../components/CartList/CardList";

export default function MyActivities() {
    const [user, setUser] = useState([
        {
            name: 'Sung',
            username: 'username',
            email: 'sung000@hotmail.com',
            password: '000000000',
            profilePic: 'https://www.figma.com/file/czpxRx46XfXd4IFIKll6kx/Untitled?node-id=68%3A2007',
            birth: '2Jan20',
            height: 170,
            weight: 55,
            goal: {
                weeklyGoal: 4,
                weightGoal: 49,
                inspiration: "ware kid's clothhh and dance all night",
            },
            doneWeekly: 4,
            activities: [
                { 
                    activityId: '1',
                    activityType: 'cardio',
                    activityName: 'running',
                    date: "2022-07-08",
                    duration: 30,
                    comment: 'nice vibe'
                },
                { 
                    activityId: '2',
                    activityType: 'cardio',
                    activityName: 'running',
                    date: "2022-07-08",
                    duration: 30,
                    comment: 'nice vibe'
                }
            ]
        }
    ])

    function onRemove(selectedCard) {
        setUser( prev=> 
            prev.activities.filter(card => {
                return card.activityId != selectedCard.activityId
            })
        )
    }

    return (
        <div id='myActivities'>
            <div className="myActivities-profile"><Profile/></div>
            <div id='myActivities-cards'>
                <CardList cards={user[0].activities} onRemove={onRemove} />
            </div>
        </div>
    )
}