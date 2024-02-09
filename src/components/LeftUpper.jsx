import React from 'react'
import { JOBS } from '../database/JOBS'

const LeftUpper = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4'>
        {JOBS.map((ele,index)=>{
            return (
                <div className='flex flex-col gap-2 rounded-xl p-4 sm:w-1/3 w-full' style={{backgroundColor:ele.back}} key={index}>
                    <div className='text-sm text-black'>{ele.title}</div>
                    <div className='lg:text-4xl text-3xl text-black'>{ele.count}</div>
                    <div className='text-sm' style={{color:ele.color}}>{ele.remark}</div>
                </div>
            )
        })}
    </div>
  )
}

export default LeftUpper