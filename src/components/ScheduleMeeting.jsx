import React, { useContext } from 'react'
import { discussContext } from '../context/DiscussContext'
import './CSS/ScheduleMeeting.css'
import { CgClose } from 'react-icons/cg'
import calendarIcon from './Images/calendar.svg'
import { AiFillCaretDown } from 'react-icons/ai'

export default function ScheduleMeeting() {
  const { hideMeeting, sethideMeeting } = useContext(discussContext);
  return (
    <>
      <div className="scheduleMeeting">
        <div className='SchduMeeting'>
          <h4>Schedule Meeting</h4>
          <CgClose onClick={() => {
            sethideMeeting(!hideMeeting)
          }} />

        </div>
        <hr className='hr-lineee' />
        <div className="topic">
          <h6>Topic:</h6>
          <p>+ Add Discription</p>
        </div>
        <div className="formms">
          <form action="">
            <input type="text" placeholder='Project Title' />
          </form>
          <img src="" alt="" />
        </div>

        <div className="topic when">
          <h6>When:</h6>
        </div>
        <div className="formms">
          <form action="" >
            <input type="date" className='date' />
          </form>
          <img src={calendarIcon} alt="" />
        </div>

        <div className="timeee">
          <h6>Time:</h6>
        </div>
        <div className="timeForms">
          <form action="" className='fromForm'>
            <input type="text" placeholder='From' />
          </form>
          <p>To</p>
          <form action="" className='toForm'>
            <input type="text" placeholder='To' />
          </form>
          <select name="" id="" className='SelectOption'>

            <option value="">AM</option>
            <option value="">PM</option>
          </select>
          <AiFillCaretDown />
        </div>

        <div className="timeee">
          <h6>Time Zone:</h6>
        </div>
        <div className='timeZoneSelect'>
          <select name="" id="" className='timezone'>

            <option value="">(GMT-7:00) Pacific Time (US and Canada)</option>
            <option value="">(GMT-9:00) Pacific Time (US and Canada)</option>
          </select>
          <AiFillCaretDown />
        </div>
        <div className="timeee">
          <h6>Meeting Id:</h6>
        </div>
        <div className='radioButtons'>
          <form>
            <input type="radio" id="html" name="fav_language" value="HTML" /> 
            &nbsp;
            <label for="html">Generate Automatically</label><br /> 
            <input type="radio" id="css" name="fav_language" value="CSS" /> 
            &nbsp;
            <label for="css">Personal Meeting ID 541 087 8823</label><br />
          </form>
        </div>

        <button>SCHEDULE MEETING</button>


      </div>
    </>
  )
}
