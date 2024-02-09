import React from 'react'
import LeftUpper from './LeftUpper'
import LeftMiddle from './LeftMiddle'
import LeftLower from './LeftLower'

const LeftMain = () => {
  return (
    <div className=' flex flex-col gap-4 lg:w-3/5'>
        <LeftUpper/>
        <LeftMiddle/>
        <LeftLower/>
    </div>
  )
}

export default LeftMain