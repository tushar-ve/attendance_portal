import React from 'react'
import { Link } from 'react-router-dom';
import {
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill
}
  from 'react-icons/bs'
import { FaHome } from "react-icons/fa";
import { MdPeopleOutline } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          AMS
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/admin-dashboard">
            <FaHome className='icon' /> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/employees">
            <MdPeopleOutline className='icon' /> Employees
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="">
            <AiOutlineSchedule className='icon' /> Schedule
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="">
            <BsPeopleFill className='icon' /> Attendance Sheet
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="">
            <BsListCheck className='icon' /> Late Time
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="">
            <BsMenuButtonWideFill className='icon' /> Leave
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="">
            <BsFillGearFill className='icon' /> Over Time
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar