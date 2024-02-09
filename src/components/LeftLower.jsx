import React from 'react'
import { ANNOUNCEMENTS } from '../database/ANNOUNCEMENTS'
import { BsFillPinAngleFill,BsThreeDots } from "react-icons/bs";

const LeftLower = () => {
  return (
    <div className='mb-1.5 border-2 border-solid border-slate-100 rounded-xl'>
            <div className='flex justify-between items-center p-4'>
                <p className='lg:text-base text-sm  text-stone-950 lg:text-black'>Announcement</p>
                <span className='border-2 border-solid border-slate-300 rounded p-[2px] text-xs' >Today, <input type="date" name="" id="" /></span>
            </div>
            <div className='p-4 flex flex-col gap-2 overflow-y-scroll no-scrollbar h-60'>
            {
                ANNOUNCEMENTS.map((ele,index)=>{
                    return (
                        <div className='flex  justify-between items-center p-2 border-2 border-solid border-slate-100 rounded-xl bg-slate-50' key={index}>
                        <div className='w-3/4'>
                            <p className='mb-2 text-xs sm:text-sm'>{ele.title}</p>
                            <p className='text-xs text-slate-500'>{ele.time}</p>
                        </div>
                        <div className='flex justify-between gap-6'><BsFillPinAngleFill /><BsThreeDots /></div>
                    </div>
                    )
                })
            }
            </div>
            <div className='text-center border-solid border-t-2 text-red-500 text-sm p-2 font-bold'>See All Announcement</div>
        </div>
  )
}

export default LeftLower