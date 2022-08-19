import React from 'react'
import './CommunityCard.css'

export default function CommunityCard({card, onRemove}) {

    const removeCard = () => {
        onRemove(card)
      }

    console.log(card)

  return (
    <div className='communityCard'>
            <div className='card-head'>
                <p>{card.activities.date}</p>
                <div>
                    <a onClick={removeCard}><img src='/remove.png' alt="remove"/></a>
                    <a><img src='/edit.png' alt="edit"/></a>
                </div>
            </div>
            <div className="card-body">
                <img src='/profile.png' alt='profile'/>
                <div className="card-detail">
                    <p>type: {card.activities.activityType}</p>
                    <p>activity: {card.activities.activityName}</p>
                    <p>duration: {card.activities.duration}</p>
                </div>
                <div className="card-text">
                    <p>{card.comment}</p>
                </div>
            </div>
    </div>
  )
}
