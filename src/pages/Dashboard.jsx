import React from 'react'
import LeftMain from '../components/LeftMain'
import RightMain from '../components/RightMain'


const Dashboard = () => {
  return (
    <div>
        <div className='my-[20px] text-2xl'>Dashboard</div>
        <div className='lg:flex lg:justify-between lg:gap-x-6 gap-x-8'>
        <LeftMain/>
        <RightMain/>
      </div>
    </div>
  )
}

export default Dashboard