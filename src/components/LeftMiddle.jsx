import React from 'react'
import { TRENDS } from '../database/TRENDS'

const LeftMiddle = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4'>
        {
            TRENDS.map((ele,index)=>{
                return (
                    <div className='flex flex-col gap-2 rounded-xl p-4 sm:w-1/2 w-full border-2 border-solid border-slate-200 rounded-xl' key={index}>
                        <div>{ele.title}</div>
                        <div className='lg:text-6xl text-4xl text-black'>{ele.male+ele.female}</div>
                        <div className='text-xs text-slate-500'>{ele.male} Men</div>
                        <div className='text-xs text-slate-500'>{ele.female} Women</div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default LeftMiddle