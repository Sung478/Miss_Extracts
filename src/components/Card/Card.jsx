import React, { useState } from 'react'
import UpdateActivityForm from '../UpdateActivityForm/UpdateActivityForm';
import './Card.css'


export default function Card({card, onRemove, reload /*modal, toggleModal*/}) {
    const [modal,setModal] = useState(false);
    // const [activity, setActivity] = useState({})
    const toggleModal = () =>{
        // console.log(selectedCard)
      setModal(!modal);
    //   setActivity(selectedCard);
    }
    const removeCard = () => {
        onRemove(card)
      }

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div className='card'>
            <div className='card-head'>
                <p>{new Date(card.date).toLocaleDateString()}</p>
                <div>
                    <a onClick={removeCard}><img src='/remove.png' alt="remove"/></a>
                    <a onClick={toggleModal}><img src='/edit.png' alt="edit"/></a>
                    {modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                            <UpdateActivityForm  toggleModal={toggleModal} reload={reload} activity={card}/>
                            </div>
                        </div>
                    )}
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