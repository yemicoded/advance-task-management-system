import Image from 'next/image'
import React from 'react'
import { clx } from '../helpers/clx'
import { GoPrimitiveDot } from 'react-icons/go'
import {IoCheckmarkDoneSharp} from 'react-icons/io5'

export default function ChatCard({
      status='read',
      classname,
      children
}) {
      const classes = clx(
            "flex space-x-3 items-center rounded-xl py-2 px-6 bg-[#FAFAFA] hover:bg-secondary-100 w-fit",
            classname
      )
      return (
            <div className={classes}>
                  <div className='w-[60px] h-[60px]'>
                        <Image src='/dp.png' width={100} height={100} alt="" layout='responsive' />
                  </div>
                  <div className='flex space-x-8'>
                        <div className='flex flex-col space-y-1'>
                              <p className='font-semibold text-lg'>Angelie Crison</p>
                              <p className='text-sm'>Thank you very much. I&apos;m glad</p>
                        </div>
                        <div className='flex flex-col space-y-1 justify-between items-end'>
                              <p>1mAgo</p>
                              {status==='unread' && <GoPrimitiveDot size={20} className='text-error-600'/>}
                              {status==='read' && <IoCheckmarkDoneSharp size={20} className='text-primary-500'/>}
                              {/* <span className={`block h-3 w-3 rounded-full bg-error-700`} /> */}
                        </div>
                  </div>
            </div>
      )
}


export function ChatProfile({
      active=true,
      classname,
      children
}) {
      const classes = clx(
            "flex space-x-3 items-center rounded-xl py-2 px-6 bg-[#FAFAFA] hover:bg-secondary-100 w-fit",
            classname
      )
      return (
            <div className={classes}>
                  <div className='w-[60px] h-[60px]'>
                        <Image src='/dp.png' width={100} height={100} alt="" layout='responsive' />
                  </div>
                  <div className='flex space-x-8'>
                        <div className='flex flex-col space-y-1'>
                              <p className='font-semibold text-lg'>Angelie Crison</p>
                              {active ? <span className='inline-flex items-center gap-2 font-semibold text-secondary-400'><GoPrimitiveDot size={20} className='text-success-600' />Online</span>
                                    :
                                    <span className='inline-flex items-center gap-2 font-semibold text-secondary-400'><GoPrimitiveDot size={20} className='text-error-600' />Offline</span>
                              }
                        </div>
                  </div>
            </div>
      )
}