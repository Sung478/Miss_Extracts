import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Dashboard.css'


import BarChart from '../../components/BarChart/BarChart'
import Goal from '../../components/Goal/Goal'
import BMI from '../../components/BMI/BMI'
import Profile from '../../components/Profile/Profile'
import CardList from "../../components/CartList/CardList"
import NavBar from "../../components/NavBar/NavBar";
import axiosInstance from "../../config/axios";
import NewActivityForm from "../../components/NewActivityForm/NewActivityForm";
import UpdateActivityForm from "../../components/UpdateActivityForm/UpdateActivityForm";

export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(
        {
            name: '',
            username: '',
            email: '',
            password: '',
            profilePic: '',
            birth: '',
            height: 0,
            weight: 0,
            goals: {
                weeklyGoal: 0,
                weightGoal: 0,
                inspiration: "",
            },
            doneWeekly: 4,
            activities: []
        }
    )

    // const [recentAct, setRecentAct] = useState([]);

    const [isUpdated, setIsUpdated] = useState(false);
    const [dailyStats, setDailyStats] = useState([]);
    const [modal, setModal] = useState(false);
    const [modalU, setModalU] = useState(false);
    const [activity, setActivity] = useState({})
    const [activities, setActivities] = useState([])

    const toggleModal = () => {
        setModal(!modal);
    }

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    if (modalU) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const toggleModalU = () => {
        setModalU(!modalU);
    }

    const getUser = async () => {
        setIsLoading(true)
        const response = await axiosInstance.get('/user_id')
        setUser(() => response.data)
        console.log(user)
        setIsLoading(false)
    }


    const deleteActivity = async (activityId) => {
        setIsLoading(true)
        console.log(activityId)
        await axiosInstance.delete(`/user_id/activities/${activityId}`)
        console.log("activity deleted")
        setIsLoading(false)
    }
    // ============

    const getActvities = async () => {
        // setIsLoading(true)
        const response = await axiosInstance.get('/user_id/activities')
        const data = response.data
        setActivities(() => data)
        // setIsLoading(false)
    }

    const recentCards = activities.slice(0, 2);

    const getDailyStats = async () => {
        // setIsLoading(true);
        const response = await axiosInstance.get("user_id/activities/daily-stats");
        console.log(response.data);
        setDailyStats(() => response.data);
        // setIsLoading(false);
    };


    // count goal avachieved day
    let goalAchieved = 0;
    const getGoalAchieved = () => {
        const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        const achievedDays = dailyStats.filter((day) => {
            if (Date.parse(day._id) >= Date.parse(sevenDaysAgo)) {
                return day;
            }
        });
        goalAchieved = achievedDays.length;
        // console.log(achievedDays.length);
    };
    getGoalAchieved();

    // =============
    useEffect(() => {
        getDailyStats();
        getActvities();
        getUser()
    }, []);

    useEffect(() => {
        reload()
    }, [isLoading]);

    useEffect(() => {
        getDailyStats();
        getActvities();
    }, [isUpdated]);

    const reload = () => {
        setIsUpdated(!isUpdated)
    }


    function onRemove(selectedCard) {
        if (confirm("Delete this activity?")) {
            const newCards = user.activities.filter(activity => {
                return activity.activityId != selectedCard.activityId
            })
            //setUser( prev => [ ... prev].map( user => user.userId = 1 ? { ...user, activities: newCards} : user ))
            const activityId = selectedCard.activityId;
            deleteActivity(activityId);
            setUser((prev) => ({ ...prev, activities: newCards }));
            alert('activity deleted')
        } else { alert('activity not delete') }
    }

    if (isLoading) return (
        <div style={{ backgroundImage: "linear-gradient(0deg, rgba(56, 59, 129, 1) 0%, rgba(255, 203, 215, 1) 100%)", height: "100vh" }} >
            <NavBar isSignin={true} />
            <h3>Loading...</h3>
        </div>
    )

    return (
        <div id='dashboard'>
            <NavBar isSignin={true} />
            <div>
                <div className="dashboard-profile"><Profile user={user} reload={reload} toggleModal={toggleModal} /></div>

                <div className='dashboard-summary'>
                    <div>
                        <div id='dashboard-goal'>
                            <Goal inspiration={user.goals.inspiration || '-'} weeklyGoal={user.goals.weeklyGoal || 0} doneWeekly={goalAchieved || 0} goalAchieved={goalAchieved} />
                            <BMI weight={user.weight} height={user.height} />
                        </div>
                        <BarChart dailyStats={dailyStats} reload={reload} isLoading={isLoading} />
                    </div>
                    <div id='dashboard-cards'>
                        <div id="dashboard-cards-heading">
                            <img src='/run.png' />
                            <h3>Recent Activities</h3>
                        </div>
                        <CardList cards={recentCards} onRemove={onRemove} reload={reload} inDashboard={true} setActivity={setActivity} toggleModalU={toggleModalU} />
                        {modal && (
                            <div className="modal">
                                <div onClick={toggleModal} className="overlay"></div>
                                <div className="modal-content">
                                    <NewActivityForm reload={reload} toggleModal={toggleModal} />
                                </div>
                            </div>
                        )}
                        {modalU && (
                            <div className="modal">
                                <div onClick={toggleModalU} className="overlay"></div>
                                <div className="modal-content">
                                    <UpdateActivityForm toggleModal={toggleModalU} reload={reload} activity={activity} />
                                </div>
                            </div>
                        )}
                        <Link to='/activities'><a id="seemore">see more ...</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}