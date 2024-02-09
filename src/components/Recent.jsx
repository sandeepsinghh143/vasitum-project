import React from 'react'

const Recent = () => {
  return (
    <div className='lg:w-full recent-inner rounded-xl sm:w-2/5 text-xs w-full'>
            <div className='recent p-[20px] rounded-t-xl font-black sm:text-sm text-xs'>Recently Activity</div>
            <div className='flex flex-col gap-y-8 p-[20px]'>
            <div className='recent-inner'>
                <p className='text-xs'>10.40 AM, Fri 10 Sept 2021</p>
                <h3 className='font-black py-2 sm:text-sm text-xs'>You Posted a New Job</h3>
                <p className='text-xs'>Kindly check the requirements and terms of work and make sure everything is right</p>
            </div>
            <div className='recent-inner flex lg:flex-row flex-col gap-2 lg:items-center lg:justify-between'>
                <span className='lg:text-sm text-xs'>Today you makes 12 Activity</span>
                <button className='btn-activity text-base'>See All Activity</button>
            </div>
        </div>
    </div>
  )
}

export default Recent