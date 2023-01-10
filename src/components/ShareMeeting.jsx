import React from 'react'
import './CSS/ShareMeeting.css'
import { GrClose } from 'react-icons/gr'
export default function () {
  return (
    <>
    <div className="shareMeeting">
       <div className="heading">
       <div className="onleft">
       <h4>Share Meeting / Invite People</h4>
       <p>Share this meeting link with others you want in the meeting</p>
       </div>
       <div className="onright">
       <GrClose/>
       </div>
       </div>
       <hr className='hr-line'/>
       <div className="copyLink">
        <form action="">
            <input type="text" />
            <button>COPY CODE</button>
        </form>
       </div>
       <hr class="hr-text" data-content="OR" className='or-hr'/>
       <div className="invite-email">
        <p>Or invite using their <span>Email Address</span> instead.</p>
        <form action="">
            <input type="text" />
            <button>INVITE</button>
        </form>
       </div>
       <hr className='hr-line'/>
       <div className="lastText">
       <p>People who use this meeting link must get your permission before 
        joining in.</p>
       </div>
    </div>
    </>
  )
}
