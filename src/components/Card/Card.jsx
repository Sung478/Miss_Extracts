import React, { useState } from 'react'
import UpdateActivityForm from '../UpdateActivityForm/UpdateActivityForm';
import './Card.css'


export default function Card({card, onRemove, reload, setActivity, toggleModalU /*modal, toggleModal*/}) {
    

    const removeCard = () => {
        onRemove(card)
      }

    const getActivity = () => {
        setActivity(card)
        toggleModalU()
    }
    


    return (
        <div className='card'>
            <div className='card-head'>
                <p>{new Date(card.date).toLocaleDateString()}</p>
                <div>
                    <a onClick={removeCard}><img src='/remove.png' alt="remove"/></a>
                    <a onClick={getActivity}><img src='/edit.png' alt="edit"/></a>

                </div>
            </div>
            <div className="card-body">
                <div className="card-detail">
                    <p>type: {card.activityType}</p>
                    <p>activity: {card.activityName}</p>
                    <p>duration: {card.duration}</p>
                </div>
                <div className="card-text">
                    <p>{card.comment}</p>
                </div>
            </div>
        </div>
    )
}