import React, { useState, useEffect } from "react";
import './MyActivities.css'

import Profile from '../../components/Profile/Profile'
import CardList from "../../components/CartList/CardList";
import Pagination from "../../components/Pagination/Pagination";
import axiosInstance from "../../config/axios";

export default function MyActivities() {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(
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
                },
                { 
                    activityId: '3',
                    activityType: 'cardio',
                    activityName: 'running',
                    date: "2022-07-08",
                    duration: 30,
                    comment: 'nice vibe'
                },
                { 
                    activityId: '4',
                    activityType: 'cardio',
                    activityName: 'running',
                    date: "2022-07-08",
                    duration: 30,
                    comment: 'nice vibe'
                },
                { 
                    activityId: '5',
                    activityType: 'cardio',
                    activityName: 'running',
                    date: "2022-07-08",
                    duration: 30,
                    comment: 'nice vibe'
                },
                { 
                    activityId: '6',
                    activityType: 'cardio',
                    activityName: 'running',
                    date: "2022-07-08",
                    duration: 30,
                    comment: 'nice vibe'
                }
            ]
        }
    )
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3;


    // backend connection
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
        setIsLoading(false)
    }

    const deleteActivity = async (activityId) => {
        console.log(activityId)
        await axiosInstance.delete(`/user_id/activities/${activityId}`)
        console.log("activity deleted")
    }

    useEffect( () => {
        login()
        getActvities();
    }, []);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(user.activities.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(user.activities.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, user]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % user.activities.length;
        setItemOffset(newOffset);
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
        <div id='myActivities'>
            <div className="myActivities-profile"><Profile user={user}/></div>
            <div id='myActivities-cards'>
                <CardList cards={currentItems} onRemove={onRemove} />
                <Pagination pageCount={pageCount} onClick={handlePageClick} />
            </div>
        </div>
    )
}