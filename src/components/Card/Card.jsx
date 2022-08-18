import React from 'react'
import './Card.css'
import remove from '../../assets/remove.png';
import edit from '../../assets/edit.png';

export default function Card({card, onRemove}) {
    const removeCard = () => {
        onRemove(card)
      }

    return (
        <div className='card'>
            <div className='card-head'>
                <p>{card.date}</p>
                <div>
                    <a onClick={removeCard}><img src={remove} alt="remove"/></a>
                    <a><img src={edit} alt="edit"/></a>
                </div>
            </div>
            <div class="card-body">
                <div className="card-detail">
                    <p>type: {card.type}</p>
                    <p>activity: {card.activity}</p>
                    <p>duration: {card.duration}</p>
                </div>
                <div className="card-text">
                    <p>{card.note}</p>
                </div>
            </div>
        </div>
    )
}