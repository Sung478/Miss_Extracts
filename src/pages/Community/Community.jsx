import React, { useEffect, useState } from "react";
import './Community.css'

import Profile from '../../components/Profile/Profile'
import CommunityList from "../../components/CommunityCard/CommunityList";
import axiosInstance from "../../config/axios";
import Pagination from "../../components/Pagination/Pagination";

export default function Community() {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState('')
    const [community, setCommunity] = useState([])
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3;

    // const login = async () => {
    //     await axiosInstance.post('/auth/signin', {
    //         username: "tester002",
    //         password: "12345678",
    //     }).then(() => console.log("login success")
    //     ).catch(() => console.log('login failed'))
    // }

    const getUer = async() => {
        const response = await axiosInstance.get('/user_id')
        setUser(response.data)
    }

    const getCommunity = async() => {
        const response = await axiosInstance.get('/user_id/community')
        setCommunity(response.data)
        setIsLoading(false)
    }

    const deleteActivity = async (activityId) => {
        console.log(activityId)
        await axiosInstance.delete(`/user_id/activities/${activityId}`)
        console.log("activity deleted")
    }

    useEffect(() => {
        // login()
        getUer()
        getCommunity()
    }, [])
    

    function onRemove(selectedCard) {
        // setUser( prev => [ ... prev].map( user => user.userId = 1 ? { ...user, activities: newCards} : user ))
        console.log(selectedCard)
        const activityId = selectedCard.activities.activityId;
        deleteActivity(activityId);
        const newCards = community.filter( activity => {
            return activity.activities.activityId != activityId
        })
        setCommunity(newCards);
    }

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(community.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(community.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, user]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % community.length;
        setItemOffset(newOffset);
    } 


    if(isLoading) return <h3>Loading...</h3>
    return (
        <div id='community'>
            <div className="community-profile"><Profile user={user}/></div>
            <div id='community-cards'>
                <CommunityList cards={currentItems} userId={user.user_id} onRemove={onRemove} />
                <Pagination pageCount={pageCount} onClick={handlePageClick} />
            </div>
        </div>
    )
}