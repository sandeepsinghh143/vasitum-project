import React from 'react'
import NavBar from './NavBar'
import Dashboard from '../pages/Dashboard'

const MainArea = () => {
  return (
    <div className='lg:w-10/12 sm:w-11/12 w-full'>
      <NavBar/>
      <div className='mx-[50px]'>
        <Dashboard/>
      </div>
    </div>
  )
}

export default MainArea