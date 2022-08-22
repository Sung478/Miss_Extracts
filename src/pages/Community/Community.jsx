import React, { useState } from "react";
import './Community.css'

import Profile from '../../components/Profile/Profile'
import CommunityList from "../../components/CommunityCard/CommunityList";

export default function Community() {
    const [user, setUser] = useState([
        {
            userId: '1',
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
        const newCards = user[0].activities.filter( activity => {
            return activity.activityId != selectedCard.activityId
        })
        console.log(newCards)
        setUser( prev => [ ... prev].map( user => user.userId = 1 ? { ...user, activities: newCards} : user ))
    }

    return (
        <div id='community'>
            <div className="community-profile"><Profile/></div>
            <div id='community-cards'>
                <CommunityList cards={user} onRemove={onRemove} />
            </div>
        </div>
    )
}