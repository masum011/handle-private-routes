import React from 'react'
import './carddataphotos.css'
import { useNavigate } from 'react-router-dom'

export default function CardDataPhotos() {
    const navigate=useNavigate()
  return (
    <div className='main--card' onClick={()=>navigate('./card-details')}>
        <div className="photos">
            <img src="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg" alt="card" />
        </div>
        <div className="content">
            <h3>hello this is card</h3>
            <p>Bio</p>
            <p>Details</p>
        </div>
    </div>
  )
}
