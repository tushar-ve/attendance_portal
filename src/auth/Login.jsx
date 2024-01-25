import React from 'react'
// import {logo} from '/register_logo.png'
function Login() {
  return (
    <>
      <div className='flex'>
        <span><img src='/register_logo.png' /> </span><hr className="flex-grow border-t mt-16 mr-16 border-[#41A7C8]" />

      </div>
      
        <div className='relative border-2 box-border h-383 border-[#41A7C8] bg-white p-1 w-3/12 h-auto flex flex-col  
                justify-center rounded  mt-40 ml-20 '
        >
          <div className='flex flex-col  border-0 mb-5 w-full'
          >
            
            <img className='w-1/4 border-none' src="/register_logo.png" alt="RegisterLogo" />
          </div>
          <div className='text-center'>
          <h2 className='underline text-[#41A7C8] font-bold	tracking-wider font-poppins'>LOGIN</h2>
          <p>Beyond this wall lies your potential. Open it.</p>
          </div>
          <div className='flex flex-col relative w-full p-6'>
          
            <label>Employee ID</label>
            <input
              className='border-2 bg-[#41A7C8] rounded text-center focus:outline-none  focus:bg-[#FFF] focus:border-[#41A7C8] placeholder-white'
              type="text"
              placeholder='Enter ID'
            />
           
            <label>Password</label>
            <input
              className='border-2 bg-[#41A7C8] rounded text-center focus:outline-none
                                focus:bg-[#FFF] focus:border-[#41A7C8] placeholder-white'
              type="text"
              placeholder='Enter Password'
            />
          </div>
          <div className='text-center'>
          <button className='bg-[#41A7C8] mt-5 mb-5 w-28 h-8  rounded-lg
                                  hover:bg-[#fff] hover:border-2
                                  hover:transition ease-in-out'
          >
            LOGIN
          </button>
          </div>
        </div>
      
    </>
  )
}

export default Login
