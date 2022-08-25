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
    const [dailyStats, setDailyStats] = useState([]);
    const [modal,setModal] = useState(false);
    const [modalU,setModalU] = useState(false);
    const [activity, setActivity] = useState({})
    
    const toggleModal = () =>{
      setModal(!modal);
    }

    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

      if(modalU) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

        // const [activity, setActivity] = useState({})
    const toggleModalU = () =>{
            // console.log(selectedCard)
        setModalU(!modalU);
        //   setActivity(selectedCard);
    }

    // const login = async () => {
    //     await axiosInstance.post('/auth/signin', {
    //         username: "tester002",
    //         password: "12345678",
    //     }).then(() => console.log("login success")
    //     ).catch(() => console.log('login failed'))
    // }

    const getActvities = async () => {
        const response = await axiosInstance.get('/user_id')
        setUser(response.data)
        console.log(user)
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
    // ============

    const recentCards = user.activities.slice(0, 2);

    const getDailyStats = async () => {
        setIsLoading(true);
        const response = await axiosInstance.get("user_id/activities/daily-stats");
        // console.log(response.data);
        setDailyStats(response.data);
        setIsLoading(false);
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
        // login()
        getActvities();
        // getRecentAct();
        getDailyStats();
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

    if (isLoading) return
    return (
        <div id='dashboard'>
            <NavBar isSignin={true} />
            <div>
                <div className="dashboard-profile"><Profile user={user} reload={reload} toggleModal={toggleModal} /></div>
                    {modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <NewActivityForm reload={reload} toggleModal={toggleModal} />
                            </div>
                        </div>
                    )}
                <div className='dashboard-summary'>
                    <div>
                        <div id='dashboard-goal'>
                            <Goal inspiration={user.goals.inspiration || '-'} weeklyGoal={user.goals.weeklyGoal || 0} doneWeekly={user.doneWeekly || 0} goalAchieved={goalAchieved} />
                            <BMI weight={user.weight} height={user.height} />
                        </div>
                        {!modal && <BarChart dailyStats={dailyStats} loading={isLoading} />}
                    </div>
                    <div id='dashboard-cards'>
                        <div id="dashboard-cards-heading">
                            <img src='/run.png' />
                            <h3>Recent Activities</h3>
                        </div>
                        <CardList cards={recentCards} onRemove={onRemove} reload={reload} inDashboard={true} setActivity={setActivity} toggleModalU={toggleModalU} />
                            {modalU && (
                            <div className="modal">
                                <div onClick={toggleModalU} className="overlay"></div>
                                <div className="modal-content">
                                <UpdateActivityForm toggleModal={toggleModalU} reload={reload} activity={activity}/>
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