import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-purple-600 text-4xl font-bold cursor-pointer'>MeaFlix</h1>
        <div>
            <button className='  px-6 py-2 rounded cursor-pointer text-white'>Sign In</button>
            <button className='bg-purple-600  px-6 py-2 round  red cursor-pointer text-white '>Sign Out</button>
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white '></div>
        </div>

    </div>

  )
}

export default Navbar