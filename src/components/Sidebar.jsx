import React from 'react'
import './CSS/Sidebar.css'
import { AiOutlinePlus } from "react-icons/ai"
import { FiSearch } from "react-icons/fi"
export default function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="meetings">
        <h2>Meetings</h2>
        <AiOutlinePlus/>
        </div>
      <div className="searchBar">
      <form>
      <input type="text" placeholder="Search.." name="search"/>
      <FiSearch/>
    </form>
      </div>
      <div className="upComing">
        <h4>Upcoming</h4>
      </div>
      <div className="upComing">
        <h4>Previous</h4>
      </div>
      <div className="upComing">
        <h4>Personal Room</h4>
      </div>
      <div className="upComing">
        <h4>Meeting Templates</h4>
      </div>
      </section>
    </>
  )
}
