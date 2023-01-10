import React from 'react'
import './CSS/MainSection.css'
import calendarIcon from './Images/calendar.svg'
import { AiFillCaretDown } from 'react-icons/ai'
export default function MainSection() {
  return (
    <>
      <div className="meetingss">
        <div className="upcomingMeeting">
          <h3>Upcoming Meetings</h3>
        </div>
        <div className="buttons">
          <button type="" className="fromButton"> FROM </button>
          <img src={calendarIcon} alt="" className="img-fluidda" />
          <button type="" className="toButton"> TO </button>
          <img src={calendarIcon} alt="" className="img-fluiddb" />

          <div className="filterDropdown">
            <div class="dropdown">
              <button class="dropbtn">Filter <AiFillCaretDown /></button>
              <div class="dropdown-content">
                <a href="">Link 1</a>
                <a href="">Link 2</a>
                <a href="">Link 3</a>
              </div>
            </div>
          </div>

          <div className="meetingDropdown">
            <div class="dropdown">
              <button class="dropbtn">Start Meeting <AiFillCaretDown /></button>
              <div class="dropdown-content">
                <a href="">Link 1</a>
                <a href="">Link 2</a>
                <a href="">Link 3</a>
              </div>
            </div>
          </div>


        </div>
      </div>


    </>
  )
}
