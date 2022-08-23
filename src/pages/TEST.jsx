import React, { useEffect } from 'react'

export default function TEST() {

   const getRecentAct = async () => {
        const recent = await axiosInstance.get('/user_id/activities/recent-activites')
        console.log(recent)
    }

useEffect({
    getRecentAct
},[])
  return (
    <div className='TEST'>
        <h3>Yo</h3>
    </div>
  )
}
