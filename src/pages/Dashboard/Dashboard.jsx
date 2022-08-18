import React, { useState } from "react";
import './Dashboard.css'


import BarChart from '../../components/BarChart/BarChart'
import Goal from '../../components/Goal/Goal'
import BMI from '../../components/BMI/BMI'

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
        }
    ])

    return (
        <div>
            <div>{/*เอา profile component มาใส่นะะ*/}</div>
            <div className='dashboard'>
                <Goal inspiration={user[0].goal.inspiration} weeklyGoal={user[0].goal.weeklyGoal} doneWeekly={user[0].doneWeekly} />
                <BMI weight={user[0].weight} height={user[0].height} />
            </div>
            <BarChart />
        </div>
    )
}