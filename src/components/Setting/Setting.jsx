import React, {useState} from 'react'
import { appendErrors, useForm } from 'react-hook-form';
import './Setting.css'
import sung from '../../assets/Sung_SlackProfile.jpg'

const picture = 'https://www.figma.com/file/czpxRx46XfXd4IFIKll6kx/Untitled?node-id=68%3A2007'


export function Setting() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const [picUpdate, setPicUpdate] = useState(false);


    // user prototype
    const [user, setUser] = useState([
        {
            name: 'Sung',
            username: 'username',
            email: 'sung000@hotmail.com',
            password: '000000000',
            profilePic: 'https://www.figma.com/file/czpxRx46XfXd4IFIKll6kx/Untitled?node-id=68%3A2007',
            birth: '2Jan20',
            height: 170,
            weight: 55,
            goal: {
                weeklyGoal: 4,
                weightGoal: 49,
                inspiration: "ware kid's cloth",
            }
        }
    ])

    // change profile picture, save change immediately without clicking save
    const changeProfilePic = (newSrc) => {
        setUser((prev)=> {
            const prevInfo = prev;
            prevInfo[0].profilePic = newSrc;
            return prevInfo
        })
    } 


    const showPicUpdate = () => {
       setPicUpdate(true);
    }

    const hidePicUpdate = () => {
        setPicUpdate(false);
     }

    console.log('error',errors)

    const onSummit = (data) => {
        console.log(data);
    }

  return (
    <form className='setting' onSubmit={handleSubmit(onSummit)}>
        <div className='setting-forms'>
            <div id='info-container' >
                <div className='picture-name'>
                    <div className='profile-pic' onMouseEnter={showPicUpdate} onMouseLeave={hidePicUpdate}>
                        <img src={sung}/>
                        <input id='update-profile' type='file' />
                        {picUpdate && <label htmlFor='update-profile'>Choose Photo</label>}
                    </div>
                    <div>
                        <h2 id='name-top'>{user[0].name}</h2>
                        <h3>{user[0].username}</h3>
                    </div>
                </div>
                <h2>Personal Information</h2>
                <div className='personal-infomation'>
                    <input type='text' defaultValue={user[0].username} placeholder='username' {...register('username', {required: true})} />
                    {errors.username && <span>Username is required</span>}
                    <input type='password' defaultValue={user[0].password} placeholder='password' {...register('password', {required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/})}/>
                    {errors.password && <span>Passwaord shoud have uppercase, lowercase and number, and is at least 8 characters long</span>}
                    <input type='text' defaultValue={user[0].name} placeholder='name' {...register('name', {required: true, })}/>
                    {errors.name && <span>Name is required</span>}
                    <div>
                        <input type='number' defaultValue={user[0].height} style={{ width: '110px'}} placeholder='height' {...register('height', {required: true})}/>
                        <span>cm</span>
                        <input type='number' defaultValue={user[0].weight} style={{ width: '110px'}} placeholder='weight' {...register('weight', {required: true})}/>
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
                        <input type='number' defaultValue={user[0].goal.weeklyGoal} placeholder='days per week' {...register('weekly-goal')}/>
                        <label>weight</label>
                        <input type='number' defaultValue={user[0].goal.weightGoal} placeholder='goal weight' {...register('weight-goal')}/>
                        <label>inspiration</label>
                        <input type='text' defaultValue={user[0].goal.inspiration} placeholder='inspiration' {...register('inspiration')}/>
                    </div>
                </div>
            </div>
        </div>
        <button type='submit' style={{ width: '328px', height: '49px' }}>Save</button>
        <a href=''>Log Out</a>
    </form>
  )
}