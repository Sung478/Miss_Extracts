import React from 'react'
import './Goal.css'

import trophy from './award-trophy.svg'

export default function Goal(props) {
  return (
    <div className='goal'>
        <div className='goal-heading'>
            <img src={trophy} />
            <h3>Goal</h3>
        </div>
        <div className="goal-container">
            <p><strong style={{ margin: 0}}>Inspiration:</strong> {props.inspiration}</p>
            <div>
                <h1>{props.goalAchieved || "0"}</h1>
                <p>out of {props.weeklyGoal} days</p>
            </div>
        </div>
    </div>
  )
}