import React from 'react'

export default function TipsCard(props) {
  return (
        <div className='tips-card'>
            <h2>{props.cardHeading}</h2>
            <p>{props.cardContent}</p>
        </div>
  )
}
