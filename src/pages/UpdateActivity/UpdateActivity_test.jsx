import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NewActivityForm from '../../components/NewActivityForm/NewActivityForm'
import axiosInstance from '../../config/axios'


export default function UpdateActivity_Test() {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState({})
  const [isUpdate, setIsupdate] = useState(true)
  const navigate = useNavigate()

//   const login = async () => {
//     await axiosInstance.post('/auth/signin', {
//         username: "tester002",
//         password: "12345678",
//     }).then(() => console.log("login success")
//     ).catch(() => console.log('login failed'))
// }


const getActvities = async () => {
  setIsLoading(true)
  const response = await axiosInstance.get('/user_id')
  setUser(response.data)
  setIsLoading(false)
}

 useEffect(()=>{
  // login();
  getActvities();
 }, [])

  const onSubmit = async (data) => {
    console.log({...data})
    const response = await axiosInstance.put('/user_id/activities/', {...data})
    console.log(response.data)
    alert('Activity added')
    navigate('../dashboard')
  }
  
  if(isLoading) return <h3>Loading...</h3>

  return (
    <div className='UpdateActivity'>
        <NewActivityForm user={user} isUpdate={isUpdate} onSubmit={onSubmit} />
    </div>
  )
}