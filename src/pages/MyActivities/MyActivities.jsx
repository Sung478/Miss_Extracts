import React, { useState, useEffect } from "react";
import './MyActivities.css'

import Profile from '../../components/Profile/Profile'
import CardList from "../../components/CartList/CardList";
import Pagination from "../../components/Pagination/Pagination";
import axiosInstance from "../../config/axios";
import NavBar from "../../components/NavBar/NavBar";
import UpdateActivityForm from "../../components/UpdateActivityForm/UpdateActivityForm";
import NewActivityForm from "../../components/NewActivityForm/NewActivityForm";

export default function MyActivities() {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(
        {
            userId: '',
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
            activities: []
        }
    )
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3;

    const [isUpdated, setIsUpdated] = useState(false);

    const [modal,setModal] = useState(false);
    const [modalU,setModalU] = useState(false);
    const [activity, setActivity] = useState({})
    const [activities, setActivities] = useState([])

    const getUser = async () => {
        setIsLoading(true)
        const response = await axiosInstance.get('/user_id')
        setUser(response.data)
        setIsLoading(false)
    }

    const getActvities = async () => {
        setIsLoading(true)
        const response = await axiosInstance.get('/user_id/activities')
        setActivities(response.data)
        setIsLoading(false)
    }

    useEffect( () => {
        getUser()
        getActvities();
    }, [isUpdated]);
    
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

    // backend connection
    // const login = async () => {
    //     await axiosInstance.post('/auth/signin', {
    //         username: "tester002",
    //         password: "12345678",
    //     }).then(() => console.log("login success")
    //     ).catch(() => console.log('login failed'))
    // }



    const deleteActivity = async (activityId) => {
        console.log(activityId)
        await axiosInstance.delete(`/user_id/activities/${activityId}`)
        console.log("activity deleted")
    }

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(activities.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(activities.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, user, isUpdated]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % activities.length;
        setItemOffset(newOffset);
    } 

    function onRemove(selectedCard) {
        if (confirm("Delete this activity?")) {
            const newCards = activities.filter( activity => {
                return activity.activityId != selectedCard.activityId
            })
            //setUser( prev => [ ... prev].map( user => user.userId = 1 ? { ...user, activities: newCards} : user ))
            const activityId = selectedCard.activityId;
            deleteActivity(activityId);
            setActivities(newCards);
            alert('activity deleted')
        } else { alert('activity not delete')}
    }

    const reload = () => {
        setIsUpdated(!isUpdated)
    }

    if(isLoading) return ( 
        <div style={{backgroundImage: "linear-gradient(0deg, rgba(56, 59, 129, 1) 0%, rgba(255, 203, 215, 1) 100%)" , height: "100vh" }} >
            <NavBar isSignin={true} />
            <h3>Loading...</h3>
        </div>
    )



    return (
        <div id='myActivities'>
            <NavBar isSignin={true}/>
            <div>
                <div className="myActivities-profile"><Profile user={user} reload={reload} toggleModal={toggleModal}/></div>
                <div id='myActivities-cards'>
                    <CardList cards={currentItems} onRemove={onRemove} reload={reload} setActivity={setActivity} toggleModalU={toggleModalU}/>
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