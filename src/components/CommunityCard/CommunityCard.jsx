import React, { useEffect, useState } from 'react'
import './CommunityCard.css'

import UpdateActivityForm from '../UpdateActivityForm/UpdateActivityForm';

export default function CommunityCard({card, userId, onRemove, reload, toggleModalU, setActivity}) {
    const [modal,setModal] = useState(false);
    const [ myActivity, setMyactivity] = useState(false)

  const getActivity = () => {
    setActivity(card.activities)
    toggleModalU()
}

    const removeCard = () => {
        onRemove(card)
      }

  useEffect(() => {
    if(card.user_id === userId) {setMyactivity(true)}
  })

  if(modal) {
    document.body.classList.add('active-modal')
} else {
    document.body.classList.remove('active-modal')
}
  

  return (
    <div className='communityCard'>
            <div className='card-head'>
                <p>{new Date(card.activities.date).toLocaleDateString()}</p>
               { myActivity ? (<div>
                    <a onClick={removeCard}><img src='/remove.png' alt="remove"/></a>
                    <a><img onClick={getActivity} src='/edit.png' alt="edit"/></a>
                </div>) : null }
            </div>
            <div className="card-body">
                <img src='/profile.png' alt='profile'/>
                <div className="card-detail">
                    <p>type: {card.activities.activityType}</p>
                    <p>activity: {card.activities.activityName}</p>
                    <p>duration: {card.activities.duration}</p>
                </div>
                <div className="card-text">
                    <p>{card.activities.comment}</p>
                </div>
            </div>
    </div>
  )
}
