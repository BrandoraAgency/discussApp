import React from 'react'
import { useState } from 'react'
import HeroSection from '../components/HeroSection'
import Meetings from '../components/Meetings'
import Navbar from '../components/Navbar'
import RightSideBar from '../components/Rightsidebar'
import ScheduleMeeting from '../components/ScheduleMeeting'
import { discussContext } from '../context/DiscussContext'
import Sidebar from '../components/Sidebar'

export default function Dashboard() {

  const [hideMeeting , sethideMeeting] = useState(false);
  return (
      <>
      <discussContext.Provider value={{hideMeeting , sethideMeeting}}>
      <Navbar/>
      <div className="mainScreen" style={{display:"flex"}}>
      <HeroSection/>
      <Sidebar/>
      <Meetings/>
      {
        hideMeeting && <ScheduleMeeting/>
      }
      <RightSideBar/>
      </div>
      </discussContext.Provider>
      </>
  )
}
