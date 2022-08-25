import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { appendErrors, useForm } from 'react-hook-form';
import axiosInstance from '../../config/axios';
import './SettingForm.css';

const picture = 'https://www.figma.com/file/czpxRx46XfXd4IFIKll6kx/Untitled?node-id=68%3A2007'


export function SettingForm({user, isLoading, signOut, toggleModal}) {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const [picUpdate, setPicUpdate] = useState(false);
    


    // user prototype
    // const [user, setUser] = useState(
    //     {
    //         name: 'Sung',
    //         username: 'username',
    //         email: 'sung000@hotmail.com',
    //         password: '000000000',
    //         profilePic: 'https://www.figma.com/file/czpxRx46XfXd4IFIKll6kx/Untitled?node-id=68%3A2007',
    //         birth: '2Jan20',
    //         height: 170,
    //         weight: 55,
    //         goal: {
    //             weeklyGoal: 4,
    //             weightGoal: 49,
    //             inspiration: "ware kid's cloth",
    //         }
    //     }
    // )



    // change profile picture, save change immediately without clicking save
    // const changeProfilePic = (newSrc) => {
    //     setUser((prev)=> {
    //         const prevInfo = prev;
    //         prevInfo.profilePic = newSrc;
    //         return prevInfo
    //     })
    // } 


    // backend connection

    const navigate = useNavigate();

    const showPicUpdate = () => {
       setPicUpdate(true);
    }

    const hidePicUpdate = () => {
        setPicUpdate(false);
     }

    const onSummit = async (data) => {
        console.log(data.weeklyGoal)
        const goals = {
            weeklyGoal: data.weeklyGoal,
            weightGoal: data.weightGoal,
            inspiration: data.inspiration,
        }
        delete data.weeklyGoal
        delete data.weightGoal
        delete data.inspiration
        data.goals = goals
        console.log(data);
        await axiosInstance.put('/user_id', {...data});
        navigate('../setting')
        alert('User updated')
    }

    
    if(isLoading) return <h3>Loading...</h3>

  return (
    <form className='setting' onSubmit={handleSubmit(onSummit)}>
        <div className='setting-forms'>
            <div id='info-container' >
                <div className='picture-name'>
                    <div className='profile-pic' onMouseEnter={showPicUpdate} onMouseLeave={hidePicUpdate}>
                        <img onClick={toggleModal} src={ user.picture || '/profile.png'}/>
                        {/* <input id='update-profile' type='file' />
                        {picUpdate && <label htmlFor='update-profile'>Choose Photo</label>} */}
                    </div>
                    <div id='name-head'>
                        <h2 id='name-top'>{user.name}</h2>
                        <h3>{user.username}</h3>
                    </div>
                </div>
                <h2>Personal Information</h2>
                <div className='personal-infomation'>
                    <input type='text' defaultValue={user.username} placeholder='username' {...register('username', {required: true})} />
                    {errors.username && <span>Username is required</span>}
                    <input type='password' defaultValue={user.password} placeholder='password' {...register('password', {required: false, minLength: 8, maxLength: 16 /* pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/*/ })}/>
                    {errors.password && <span>Passwaord shoud have uppercase, lowercase and number, and is at least 8 characters long</span>}
                    <input type='text' defaultValue={user.name} placeholder='name' {...register('name', {required: true, })}/>
                    {errors.name && <span>Name is required</span>}
                    <div>
                        <input type='number' defaultValue={user.height} style={{ width: '110px'}} placeholder='height' {...register('height', {required: true})}/>
                        <span>cm</span>
                        <input type='number' defaultValue={user.weight} style={{ width: '110px'}} placeholder='weight' {...register('weight', {required: true})}/>
                        <span>kg</span><br/>
                        {(errors.height||errors.weight) && <span>Height and Weight are required</span>}
                    </div>
                </div>
            </div>
            <div className='update-goal'>
                <div>
                    <h2 id='goal-h2'>Update your goal</h2>
                    <div className='goal-form'>
                        <label>weekly goal</label>
                        <input type='number' defaultValue={ user.goals.weeklyGoal || null} placeholder='days per week' {...register('weeklyGoal')}/>
                        <label>weight</label>
                        <input type='number' defaultValue={ user.goals.weightGoal || null} placeholder='goal weight' {...register('weightGoal')}/>
                        <label>inspiration</label>
                        <input type='text' defaultValue={ user.goals.inspiration || null} placeholder='inspiration' {...register('inspiration')}/>
                    </div>
                </div>
            </div>
        </div>
        <button type='submit' style={{ width: '328px', height: '49px' }}>Save</button>
        <a onClick={signOut}>Log Out</a>
    </form>
  )
}