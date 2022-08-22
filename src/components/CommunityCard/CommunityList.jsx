import React from 'react'
import CommunityCard from './CommunityCard'

export default function CommunityList({cards, userId, onRemove}) {
  return (
    <div className='communityList'>
        { cards.map( card => <CommunityCard card={card} userId={userId} key={card.activities.activityId} onRemove={onRemove} />)}
    </div>
  )
}
