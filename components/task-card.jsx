import React from 'react'
import { clx } from '../helpers/clx'
import Image from 'next/image'
import BarProgress from './progress'
import {FiClock} from 'react-icons/fi'

export default function TaskCard({
      task,
      fullWidth,
      progress,
      contained,
      classname,
      children
}) {
      const classes = clx(
            "w-full md:max-w-[330px] h-[315px] dark:bg-secondary-500 bg-white shadow-md rounded-lg p-4 flex flex-col justify-between",
            contained && "min-w-full md:min-w-[330px]",
            // fullWidth && "w-[100%]",
            classname
      )
      return (
            <div className={classes}>
                  <div className='w-full h-[45%] rounded-lg overflow-hidden bg-primary-400'>
                        <Image src="/task-img.png" width="320px" height="140px" alt="" layout="responsive" objectFit='cover' className='w-full' />
                  </div>
                  <div className='mt-4'>
                        <p className='font-semibold'>Creating Awesome Mobile Apps</p>
                        <p className='text-sm text-secondary-500 dark:text-white'>UI/UX Design</p>
                  </div>
                  <BarProgress progress={progress} fullWidth classname='my-0' />
                  <div className='mt-4 flex justify-between items-center'>
                        <div className='flex space-x-2 items-center'>
                              <FiClock />
                              <p className='font-semibold'>1 Hour</p>
                        </div>
                        {/* <div>Stacked Images</div> */}
                  </div>
            </div>
      )
}