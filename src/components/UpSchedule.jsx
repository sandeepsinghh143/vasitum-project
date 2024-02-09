import React from 'react'
import { SCHEDULE } from '../database/SCHEDULE'
import { BsThreeDots } from "react-icons/bs";

const UpSchedule = () => {
  return (
    <div className='lg:w-full border-2 border-solid border-slate-100 rounded-xl sm:w-3/5 w-full'>
        <div className='flex justify-between items-center py-4 p-[20px]'>
            <span className='lg:text-base text-xs font-normal'>Upcoming Schedule</span>
            <span className='border-2 border-solid border-slate-300 rounded p-[2px] text-xs' >Today, <input type="date" name="" id="" /></span>
        </div>
        <div className='overflow-y-scroll no-scrollbar lg:h-72 p-[20px] h-40'>
        <div className='mb-2'>
            <p className='text-xs text-slate-500 mb-[5px]'>Priority</p>
            {SCHEDULE[0].map((ele,index)=>{
                return (
                    <div className='flex justify-between items-center p-2 border-2 border-solid border-slate-100 rounded-xl bg-slate-50' key={index}>
                        <div>
                            <p className='mb-[5px] sm:text-sm text-xs'>{ele.title}</p>
                            <p className='text-xs text-slate-500'>{ele.date}</p>
                        </div>
                        <div><BsThreeDots /></div>
                    </div>
                )
            })}
        </div>
        <div className='flex flex-col gap-2 mb-1.5'>
            <p className='text-xs text-slate-500'>Other</p>
            {
                SCHEDULE[1].map((ele,index)=>{
                    return (
                        <div className='flex justify-between items-center p-2 border-2 border-solid border-slate-100 rounded-xl bg-slate-50' key={index}>
                        <div>
                            <p className='mb-2 sm:text-sm text-xs'>{ele.title}</p>
                            <p className='text-xs text-slate-500'>{ele.date}</p>
                        </div>
                        <div><BsThreeDots /></div>
                    </div>
                    )
                })
            }
        </div>
        </div>
        <div className='text-center border-solid border-t-2 text-red-500 text-sm p-2 font-bold'>Create a new Schedule</div>
    </div>
  )
}

export default UpSchedule