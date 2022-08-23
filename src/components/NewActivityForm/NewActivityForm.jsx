import React, { useState } from 'react';
import {appendErrors, useForm} from 'react-hook-form';
import './NewActivityForm.css'

export const NewActivityForm = ({onSubmit, isUpdate, user}) => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm();
    const [activityInfo,setActivityInfo] = useState([]);

// ===========
    const navigate = useNavigate()
  const [isUpdate, setIsupdate] = useState(false)

  const login = async () => {
    await axiosInstance.post('/auth/signin', {
        username: "tester002",
        password: "12345678",
    }).then(() => console.log("login success")
    ).catch(() => console.log('login failed'))
}

 useEffect(()=>{
  login()
 }, [])

  const onSubmit = async (data) => {
    console.log({...data})
    const response = await axiosInstance.put('/user_id/activities/', {...data})
    console.log(response.data)
    alert('Activity added')
    navigate('../dashboard')
  }
  // ===========

    

    console.log(user)
    return (
        <div className='acivityform-container'>
            <div className='activity-title'>
                <h1>New Activity</h1>   
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("activityType",{required: true})}>
                    <option value="">{isUpdate? user.activities[0].activityType : 'activity type'}</option>
                    <option value="cardio">cardio</option>
                    <option value="weight">weight</option>
                </select>
                {errors.activityType && <p>Please choose your activity types</p>}
                <br />
                <select {...register(("activity"))}>                                                                                                                                                            
                    <option value="">{isUpdate? user.activities[0].activity : 'activity'}</option>
                    <option value="run">Run</option>
                    <option value="bicycle">bicycle</option>
                    <option value="ride">ride</option>
                    <option value="swim">swim</option>
                    <option value="walk">walk</option>
                    <option value="hike">hike</option>
                </select>
                {errors.activityType && <p>Please choose your activity</p>}                                                   
                <br/>
                <input value={isUpdate? new Date(user.activities[0].date).toISOString().split('T')[0] : null } type="date" {...register("date",{ required: true})}/>
                {errors.date && <p>Please enter the date</p>}                                                                           
                <br/>
                <input value={isUpdate? user.activities[0].duration : null} type="number" placeholder='duration(minutes)'  {...register("duration",{min: {value:0,message: "duration can't be zero"}})}/>
                <p>{errors.duration?.message}</p>
                <br/>
                <textarea value={isUpdate? user.activities[0].comment : null} placeholder='Comment' {...register("comment")}></textarea>
                <br/>
                <button className ='add-activity-btn'>Add Activity</button>
            </form> 
        </div>
    )
}
export default NewActivityForm