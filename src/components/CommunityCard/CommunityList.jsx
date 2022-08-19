import React from 'react'
import CommunityCard from './CommunityCard'

export default function CommunityList({cards, onRemove}) {
  return (
    <div className='communityList'>
        { cards.map( card => <CommunityCard card={card} key={card.activities.activityId} onRemove={onRemove} />)}
    </div>
  )
}
