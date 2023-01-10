import React from 'react'
import MainSection from './MainSection'
import ProjectTile from './ProjectTile'
import './CSS/Meetings.css'
export default function Meetings() {
  return (
    <div className="meetingSelection">
        <MainSection/>
        <ProjectTile/>
        <ProjectTile/>
        <ProjectTile/>
        <ProjectTile/>
        <ProjectTile/>
        <ProjectTile/>

    </div>
  )
}
