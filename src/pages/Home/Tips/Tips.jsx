import React, { useState } from 'react'
import './Tips.css'

import TipsCard from './TipsCard'

export default function Tips() {
    const [cards, setCards] = useState([
        {
            heading: 'Clean food',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        }, 
        {
            heading: 'Weight training',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
            heading: 'Cardio',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        }
    ])

  return (
    <div className='tips'>
        {cards.map( (card, i) => { return <TipsCard key={i} cardHeading={card.heading} cardContent={card.content}/> })}
    </div>
  )
}
