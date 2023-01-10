import React from 'react'
import './CSS/MeetingDash.css'
import {BiArrowBack} from 'react-icons/bi'
import img3 from './Images/eclipse.png'
import {BsChevronDown} from 'react-icons/bs'


export default function () {
  return (
    <>
   <navbar className="nav">
       <div className='backArrow'>
       <BiArrowBack/>
       </div>
       <p className='project'>Project Discussion Meeting</p>

       <p className='timee'>
           12:18
       </p>
    <ul className="right-listt">
      <img src={ img3 } alt="" className='HostImg'/>
      <div className="hostName">
          <p className='name'>M. Wajahat (You)</p>
          <p className='host'>Host</p>
      </div>
      <BsChevronDown/>
</ul>
    </navbar>
    </>
  )
}
