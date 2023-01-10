import React from 'react'
import './CSS/RightSideBar.css'
import videoCall from './Images/videoCall.svg'
import message from './Images/message.svg'
import Company from './Images/Company.svg'
import creative from './Images/creative.svg'
import plus from './Images/plus.svg'


export default function RightSideBar() {
  return (
    <>
    <section className="rightBar">

        <img src={videoCall} alt="" className="img-fluidv"/>
        <img src={message} alt="" className="img-fluidm"/>
        <img src={Company} alt="" className="img-fluido"/>
        <img src={creative} alt="" className="img-fluidr"/>
        <img src={plus} alt="" className="img-fluidp"/>
   
    </section>
    </>
  )
}
