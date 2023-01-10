import React from 'react'
import './CSS/HeroSection.css'
import meetingIcon from './Images/MEETING.svg'
import cameraIcon from './Images/camera.svg'
import peopleIcon from './Images/people.svg'
import settingIcon from './Images/settings.svg'


export default function HeroSection() {
  return (
    <>
      <section className="firstBar">
        <div className="meeting-circle">
          <img src={meetingIcon} alt="" className="img-fluidd active" />
        </div>
        <div className="camera-circle">
          <img src={cameraIcon} alt="" className="img-fluidda" />
        </div>
        <div className="people-circle">
          <img src={peopleIcon} alt="" className="img-fluiddb" />
        </div>
        <div className="setting-circle">
          <img src={settingIcon} alt="" className="img-fluiddc" />
        </div>
      </section>

    



    </>
  )
}
