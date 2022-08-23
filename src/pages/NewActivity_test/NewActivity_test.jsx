import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NewActivityForm from '../../components/NewActivityForm/NewActivityForm'
import axiosInstance from '../../config/axios'


export default function NewActivity_Test() {
  const navigate = useNavigate()
  const [isUpdate, setIsupdate] = useState(false)

//   const login = async () => {
//     await axiosInstance.post('/auth/signin', {
//         username: "tester002",
//         password: "12345678",
//     }).then(() => console.log("login success")
//     ).catch(() => console.log('login failed'))
// }

//  useEffect(()=>{
//   // login()
//  }, [])

  const onSubmit = async (data) => {
    console.log({...data})
    const response = await axiosInstance.put('/user_id/activities/', {...data})
    console.log(response.data)
    alert('Activity added')
    navigate('../dashboard')
  }
    
  return (
    <div className='NewActivity'>
        <NewActivityForm isUpdate={isUpdate} onSubmit={onSubmit} />
    </div>
  )
}
