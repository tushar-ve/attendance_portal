import React from 'react'

function Register() {

  return (
    <div className='p-10'>
        <img  src="/register_logo.png" alt="RegisterLogo" />
        <div className='bg-[#41A7C8] w-full h-auto p-2 mt-2
            flex items-center justify-around'
        >
            <div className='relative p-4  item-center w-1/2 ml-20'>
                <img className="w-3/2 h-auto object-cover" src="/register.png" alt="Attendance" />
            </div>
            <div className='relative bg-white p-1 w-3/12 h-auto flex flex-col items-center 
                justify-center rounded'
            >
                <div className='flex flex-col items-center justify-center 
                    mb-5 w-full'
                >
                    <h1 style={{ color: '#044B62' }} className='underline'
                    >Employee Registration Form</h1>
                    <div>Please Enter Valid Details</div>
                    <img src="/register_logo.png" alt="RegisterLogo" />
                </div>
                <div className='flex flex-col relative w-full p-5'>
                    <label>Username</label>
                    <input
                      className='border-2 bg-[#41A7C8] rounded text-center focus:outline-none
                                focus:bg-[#FFF] focus:border-[#41A7C8] placeholder-white' 
                      type="text" 
                      placeholder='Enter Username'
                    />
                    <label>Email</label>
                    <input
                      className='border-2 bg-[#41A7C8] rounded text-center focus:outline-none
                                focus:bg-[#FFF] focus:border-[#41A7C8] placeholder-white'  
                      type="text"
                      placeholder='Enter Email'
                    />
                    <label>Password</label>
                    <input 
                      className='border-2 bg-[#41A7C8] rounded text-center focus:outline-none
                                focus:bg-[#FFF] focus:border-[#41A7C8] placeholder-white' 
                      type="text"
                      placeholder='Enter Password'
                    />
                    <label>Confirm Password</label>
                    <input
                      className='border-2 bg-[#41A7C8] rounded text-center align-center focus:outline-none
                                focus:bg-[#FFF] focus:border-[#41A7C8] placeholder-white'  
                      type="text"
                      placeholder='Enter Confirm Password'
                    />
                    <label>Designation</label>
                    <input 
                      className='border-2 bg-[#41A7C8] rounded text-center focus:outline-none
                                focus:bg-[#FFF] focus:border-[#41A7C8] placeholder-white' 
                      type="text"
                      placeholder='Enter Designation'
                    />
                </div>
                <button className='bg-[#41A7C8] mt-5 mb-5 w-28 h-8 rounded-lg
                                  hover:bg-[#fff] hover:border-2
                                  hover:transition ease-in-out'
                >
                    Sign Up
                </button>
            </div>
        </div>
    </div>
  )
}

export default Register
