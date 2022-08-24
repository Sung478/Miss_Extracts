import React from 'react'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../config/axios'


export default function IsSignin({}) {
    const navigate = useNavigate()
    const [isSignin, setIsSignin] = useState(false)

    useEffect(() => {
        axiosInstance.get('/user_id')
            .then(response => {
                console.clear()
                console.log(`account: @${response.data.username}`)
            }).then(() => setIsSignin(true))
            .catch(() => {
                console.log('no permission, please sign in first')
                navigate('/signin')
            })
    },[])

    if(isSignin){
    return (
        <div className='IsSignin'>
            <NavBar/>
                <Outlet/>
        </div>
    )
    }
}
