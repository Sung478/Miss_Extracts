import React, { useEffect, useState } from "react";
import './Community.css'

import Profile from '../../components/Profile/Profile'
import CommunityList from "../../components/CommunityCard/CommunityList";
import axiosInstance from "../../config/axios";
import Pagination from "../../components/Pagination/Pagination";
import NavBar from "../../components/NavBar/NavBar";
import UpdateActivityForm from "../../components/UpdateActivityForm/UpdateActivityForm";
import NewActivityForm from "../../components/NewActivityForm/NewActivityForm";

export default function Community() {
    const [isUpdated, setIsUpdated] = useState(false);
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

    const reload = () => {
        setIsUpdated(!isUpdated)
    }

    useEffect(() => {
        // login()
        getUer()
        getCommunity()
    }, [isUpdated])
    

    function onRemove(selectedCard) {
        // setUser( prev => [ ... prev].map( user => user.userId = 1 ? { ...user, activities: newCards} : user ))
        if (confirm("Delete this activity?")) {
        console.log(selectedCard)
        const activityId = selectedCard.activities.activityId;
        deleteActivity(activityId);
        const newCards = community.filter( activity => {
            return activity.activities.activityId != activityId
        })
        setCommunity(newCards);
        alert('activity deleted')
        reload()
    } else { alert('activity not delete')}
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


    if(isLoading) return 
    return (
        <div id='community'>
             <NavBar isSignin={true} />
             <div>
                <div className="community-profile"><Profile user={user} reload={reload} toggleModal={toggleModal}/></div>
                <div id='community-cards'>
                    <CommunityList cards={currentItems} userId={user.user_id} onRemove={onRemove} reload={reload} setActivity={setActivity} toggleModalU={toggleModalU}/>
                    <Pagination pageCount={pageCount} onClick={handlePageClick} />
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
                                <UpdateActivityForm toggleModal={toggleModalU} reload={reload} activity={activity}/>
                                </div>
                            </div>
                             )}
                </div>
            </div>
        </div>
    )
}