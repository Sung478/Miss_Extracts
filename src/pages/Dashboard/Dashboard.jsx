import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Dashboard.css'


import BarChart from '../../components/BarChart/BarChart'
import Goal from '../../components/Goal/Goal'
import BMI from '../../components/BMI/BMI'
import Profile from '../../components/Profile/Profile'
import CardList from "../../components/CartList/CardList";

export default function Dashboard() {
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

    function onRemove() {
        setUser( prev => 
            prev[0].activities.filter( card => {
                return card.activityId != selectedCard.activityId
            })
        )
    }

    return (
        <div id='dashboard'>
            <div className="dashboard-profile"><Profile/></div>
            <div className='dashboard-summary'>
                <div>
                    <div id='dashboard-goal'>
                        <Goal inspiration={user[0].goal.inspiration} weeklyGoal={user[0].goal.weeklyGoal} doneWeekly={user[0].doneWeekly} />
                        <BMI weight={user[0].weight} height={user[0].height} />
                    </div>
                    <BarChart />
                </div>
                <div id='dashboard-cards'>
                    <CardList cards={user[0].activities} onRemove={onRemove} />
                    <Link to='/myActivities'>see more ...</Link>
                </div>
            </div>
        </div>
    )
}