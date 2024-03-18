import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import Employees from './components/employees/Employees';
import './Admin.css'
const Admin = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='admin-body'>
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />     
    </div>
    </div>
  )
}

export default Admin