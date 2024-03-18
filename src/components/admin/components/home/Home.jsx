import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
  from 'react-icons/bs'
import { CiTimer } from "react-icons/ci";
import { FaPercentage } from "react-icons/fa";
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import '../../Admin.css';
function Home() {

  return (
    <div className='admin-body'>
      <div className='grid-container'>
      <Header />
      <Sidebar />
      <main className='main-container'>
        <div className='main-title'>
          <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
          <div className='card'>
            <div className='card-inner'>
              <h3>TOTAL EMPLOYEES</h3>
              <BsPeopleFill className='card_icon' />
            </div>
            <h1>300</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>ON TIME PERCENTAGE</h3>
              <FaPercentage className='card_icon' />
            </div>
            <h1>12</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>ON TIME TODAY</h3>
              <CiTimer className='card_icon' />
            </div>
            <h1>33</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>LATE TODAY</h3>
              <BsFillBellFill className='card_icon' />
            </div>
            <h1>42</h1>
          </div>
        </div>
      </main>
      </div>
    </div>
   
  )
}

export default Home