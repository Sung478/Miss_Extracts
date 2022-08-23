import React, { useState } from 'react';
import {appendErrors, useForm} from 'react-hook-form';
import './NewActivityForm.css'

export const NewActivityForm = ({onSubmit}) => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm();
    const [activityInfo,setActivityInfo] = useState([]);
    // const onSubmit = data => {
    //     setActivityInfo(data)
    //     console.log(data)
    //     reset
    // }
    return (
        <div className='acivityform-container'>
            <div className='activity-title'>
                <h1>New Activity</h1>   
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("activityType",{required: true})}>
                    <option value="">activity type</option>
                    <option value="cardio">cardio</option>
                    <option value="weight">weight</option>
                </select>
                {errors.activityType && <p>Please choose your activity types</p>}
                <br />
                <select {...register(("activity"))}>                                                                                                                                                            
                    <option value="">activity</option>
                    <option value="run">Run</option>
                    <option value="bicycle">bicycle</option>
                    <option value="ride">ride</option>
                    <option value="swim">swim</option>
                    <option value="walk">walk</option>
                    <option value="hike">hike</option>
                </select>
                {errors.activityType && <p>Please choose your activity</p>}                                                   
                <br/>
                <input type="date" {...register("date",{ required: true})}/>
                {errors.date && <p>Please enter the date</p>}                                                                           
                <br/>
                <input type="number" placeholder='duration(minutes)'  {...register("duration",{min: {value:0,message: "duration can't be zero"}})}/>
                <p>{errors.duration?.message}</p>
                <br/>
                <textarea placeholder='Comment' rows='5' {...register("comment")}></textarea>
                <br/>
                <button className ='add-activity-btn'>Add Activity</button>
            </form> 
        </div>
    )
}
export default NewActivityForm