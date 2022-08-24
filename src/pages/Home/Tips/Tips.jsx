import React, { useState } from 'react'
import './Tips.css'

import TipsCard from './TipsCard'

export default function Tips() {
    const [cards, setCards] = useState([
        {
            heading: 'Clean food',
            content: `Clean eating focuses on consuming whole foods that are minimally processed and as close to their natural form as possible.

            Adopting a clean eating plan can be a simple and effective way to lose weight and boost your overall health.
            
            Additionally, eating clean means relying less on processed, store-bought items and preparing more meals at home, which could save you money.`,
            link: `https://www.healthline.com/nutrition/clean-eating-tips`,
            linkMes: `Here are 24 clean eating tips`
        }, 
        {
            heading: 'Weight training',
            content: `Whether your goal is to build muscle mass or achieve a fitter, more toned body, lifting weights can help you get there.

            Weight training, also known as resistance or strength training, builds lean, stronger muscles, strengthens your bones and joints, and can help keep your metabolism in a healthy state — meaning you will burn more calories even when you are resting.`,
            link: `https://www.healthline.com/health/how-to-start-lifting-weights`,
            linkMes: `how to get started with weight training`
        },
        {
            heading: 'Cardio',
            content: `Cardiovascular exercise, also known as cardio or aerobic exercise, is essential for good health. It gets your heart rate up, making you blood pump faster. This delivers more oxygen throughout your body, which keeps your heart and lungs healthy.
            Regular cardio exercise can also help you lose weight, get better sleep, and reduce your risk for chronic disease.`,
            link: `https://www.healthline.com/health/cardio-exercises-at-home`,
            linkMes: `19 Cardio Exercises You Can Do at Home`
        }
    ])

  return (
    <div className='tips'>
        {cards.map( (card, i) => { return <TipsCard key={i} cardHeading={card.heading} cardContent={card.content} cardLink={card.link} cardLinkMes={card.linkMes}/> })}
    </div>
  )
}


