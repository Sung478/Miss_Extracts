import React from 'react'
import "./Picture.css"

export default function Picture({selection, toggleModal}) {
    const pictures = [ '/cyborg-id-1.png', '/cyborg-id-2.png', '/cyborg-id-4.png', '/cyborg-man-face-id.png']

    const handleClick = (index) => {
        console.log(pictures[index])
        selection(pictures[index]);
        toggleModal();
    }
    
  return (
    <div className='Picture'>
        <h3>Choose your picture</h3>
        <div>
        { pictures.map( (picture, i) => { return <img src={picture} key={picture} onClick={() => handleClick(i)} />} )}
        </div>
    </div>
  )
}
