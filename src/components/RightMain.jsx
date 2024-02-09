import React from 'react'
import Recent from './Recent'
import UpSchedule from './UpSchedule'

const RightMain = () => {
  return (
    <div className='lg:w-2/5 flex sm:flex-row flex-col lg:flex-col gap-4 md:justify-between'>
        <Recent/>
        <UpSchedule/>
    </div>
  )
}

export default RightMain