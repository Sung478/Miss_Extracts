import React, { useState, useEffect } from 'react';
import {appendErrors, useForm} from 'react-hook-form';
import './UpdateActivityForm.css'

import axiosInstance from '../../config/axios';
import { useNavigate } from 'react-router-dom';

export const UpdateActivityForm = ({activity, reload , toggleModal}) => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm();
    const navigate = useNavigate()
  
//     const login = async () => {
//       await axiosInstance.post('/auth/signin', {
//           username: "tester002",
//           password: "12345678",
//       }).then(() => console.log("login success")
//       ).catch(() => console.log('login failed'))
//   }
  
//   const getActvities = async () => {
//     setIsLoading(true)
//     const response = await axiosInstance.get('/user_id')
//     setUser(response.data)
//     setIsLoading(false)
//   }
  
//    useEffect(()=>{
//     login();
//     // getActvities();
//    }, [])

    console.log(activity)
  
    const onSubmit = async (data) => {
      const response = await axiosInstance.patch(`/user_id/activities/${activity.activityId}`, {...data})
      alert('Activity updated')
      toggleModal()
      reload()
    }
  // ===========

  
    return (
        <div className='acivityform-container'>
            <div className='activity-title'>
                <h1>Update Activity</h1>   
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("activityType",{required: true})}>
                    <option value={activity.activityType}>{activity.activityType || 'activity type'}</option>
                    <option value="cardio">cardio</option>
                    <option value="weight">weight</option>
                </select>
                {errors.activityType && <p>Please choose your activity types</p>}
                <br />
                <select {...register(("activity"))}>                                                                                                                                                            
                    <option value={activity.activity}>{activity.activity || "activity"}</option>
                    <option value="run">Run</option>
                    <option value="bicycle">bicycle</option>
                    <option value="ride">ride</option>
                    <option value="swim">swim</option>
                    <option value="walk">walk</option>
                    <option value="hike">hike</option>
                </select>
                {errors.activityType && <p>Please choose your activity</p>}                                                   
                <br/>
                <input defaultValue={new Date(activity.date).toISOString().split('T')[0] || 'date'} type="date" {...register("date",{ required: true})}/>
                {errors.date && <p>Please enter the date</p>}                                                                           
                <br/>
                <input defaultValue={activity.duration} type="number" placeholder='duration(minutes)'  {...register("duration",{min: {value:0,message: "duration can't be zero"}})}/>
                <p>{errors.duration?.message}</p>
                <br/>
                <textarea defaultValue={activity.comment} placeholder='Comment' {...register("comment")}></textarea>
                <br/>
                <button className ='add-activity-btn'>Add Activity</button>
            </form> 
        </div>
    )
}
export default UpdateActivityForm

// value={isUpdate? new Date(user.activities[0].date).toISOString().split('T')[0] : null }