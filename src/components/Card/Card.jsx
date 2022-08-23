import React, { useState } from 'react'
import './Card.css'


export default function Card({card, onRemove}) {
    const removeCard = () => {
        onRemove(card)
      }

    return (
        <div className='card'>
            <div className='card-head'>
                <p>{new Date(card.date).toLocaleDateString()}</p>
                <div>
                    <a onClick={removeCard}><img src='/remove.png' alt="remove"/></a>
                    <a><img src='/edit.png' alt="edit"/></a>
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