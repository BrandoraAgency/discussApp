import React , {useContext} from 'react'
import { discussContext } from '../context/DiscussContext'
import './CSS/Navbar.css'
import img1 from './Images/Vector.png'
import img2 from './Images/logo.png'
import img3 from './Images/eclipse.png'
import {AiFillCaretDown} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import { BiBell } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"


export default function Navbar() {
  const { hideMeeting , sethideMeeting } = useContext(discussContext);
  return (
    <>
    <nav className="nav">
    <a href=""><img src={img1} alt="" className="img-fluida" /></a>
      <a href=""><img src={img2} alt="" className="img-fluidb " /></a>
    <ul className="right-list">
      <a>
        <button>JOIN</button>
      </a>
<div className="dropdownSec">
<li className="dropdown">
  <div className="dropDownLists">
  <a href="/" className="dropbtn">START A MEETING <AiFillCaretDown/></a>
    <div className="dropdown-content">
      <a href="#"> <AiOutlinePlus/> Instant Meeting</a>
      <a href="#"  
      onClick={()=>{
        if(hideMeeting===false)
        {
          sethideMeeting(!hideMeeting)

        }
      }} > <AiOutlinePlus/> Schedule Meeting</a>
    </div>
  </div>
  </li>
</div>


  <div className="bellSearch">
  <li className='search-btn'>
   <BiSearch/>
  </li>
  <li className='bell-icon'>
   <BiBell/>
  </li>
  </div>
  <li>
    <img src={img3} alt="" className="img-fluidc" />
  </li>

</ul>
    </nav>
    </>
  )
}
