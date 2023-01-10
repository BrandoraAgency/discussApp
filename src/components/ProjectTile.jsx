import React from 'react'
import './CSS/ProjectTile.css'
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
export default function ProjectTile() {
  return (
    <>
    <div className="tile">
     <div className="time">
         <p>
             00:00 AM
         </p>
         <span>&nbsp; - &nbsp;</span>
         <p>
             00:00 PM
         </p>
     </div>
     <div className="discussion">
     <h4>Project Discussion</h4>
     <p className="meetingId">Meeting ID: <span className="spanID">999 000 999 00</span></p>
     </div>

     <div className="actions">
   <p className="edit">  <AiOutlineEdit/></p>
   <p className="delete"><AiOutlineDelete/></p>
     </div>
    </div>
    </>
  )
}
