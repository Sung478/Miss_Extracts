import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import './Dashboard.css'


import BarChart from '../../components/BarChart/BarChart'
import Goal from '../../components/Goal/Goal'
import BMI from '../../components/BMI/BMI'
import Profile from '../../components/Profile/Profile'
import CardList from "../../components/CartList/CardList"
import axiosInstance from "../../config/axios";

export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(
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
    )

    // const [recentAct, setRecentAct] = useState([]);

    const [isUpdated, setIsUpdated] = useState(false);

    const login = async () => {
        await axiosInstance.post('/auth/signin', {
            username: "tester002",
            password: "12345678",
        }).then(() => console.log("login success")
        ).catch(() => console.log('login failed'))
    }

    const getActvities = async () => {
        const response = await axiosInstance.get('/user_id')
        setUser(response.data)
        // const recent = await axiosInstance.get('/user_id/activities/recent-activites')
        // setRecentAct(recent.data)
        setIsLoading(false)
        // console.log(recent)
    }

    // const getRecentAct = async () => {
    //     const recent = await axiosInstance.get('/user_id/activities/recent-activites')
    //     setRecentAct(recent.data)
    //     setIsLoading(false)
    // }

    const deleteActivity = async (activityId) => {
        console.log(activityId)
        await axiosInstance.delete(`/user_id/activities/${activityId}`)
        console.log("activity deleted")
    }

    useEffect( () => {
        // login()
        getActvities();
        // getRecentAct();
    }, [isUpdated]);

    const reload = () => {
        setIsUpdated(true)
    }
    

    function onRemove(selectedCard) {
        const newCards = user.activities.filter( activity => {
            return activity.activityId != selectedCard.activityId
        })
        //setUser( prev => [ ... prev].map( user => user.userId = 1 ? { ...user, activities: newCards} : user ))
        const activityId = selectedCard.activityId;
        deleteActivity(activityId);
        setUser((prev)=>({...prev, activities: newCards}));
    }

    if(isLoading) return <h3>Loading...</h3>

    return (
        <div id='dashboard'>
            <div className="dashboard-profile"><Profile user={user}/></div>
            <div className='dashboard-summary'>
                <div>
                    <div id='dashboard-goal'>
                        <Goal inspiration={user.goals.inspiration} weeklyGoal={user.goals.weeklyGoal} doneWeekly={user.doneWeekly} />
                        <BMI weight={user.weight} height={user.height} />
                    </div>
                    <BarChart />
                </div>
                <div id='dashboard-cards'>
                    <div id="dashboard-cards-heading">
                        <img src='/run.png'/>
                        <h3>Recent Activities</h3>
                    </div>
                    <CardList cards={user.activities} onRemove={onRemove} reload={reload} />
                    <Link to='/activities'>see more ...</Link>
                </div>
            </div>
        </div>
    )
}