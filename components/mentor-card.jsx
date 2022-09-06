import React from 'react'
import { clx } from '../helpers/clx'
import Label from './label'
import Profile from './profile'

export default function MentorCard({
      about,
      contained,
      classname,
      children
}) {
      const classes = clx(
            "w-full md:max-w-[330px] dark:bg-secondary-500 h-fit max-h-[315px] bg-white shadow-md rounded-lg p-4 flex flex-col justify-between",
            contained && "min-w-full md:min-w-[330px]",
            classname
      )
      return (
            <div className={classes}>
                  <div className='flex justify-between items-center mb-6'>
                        <Profile />
                        <p className='text-primary-500 font-semibold dark:text-white'>+Follow</p>
                  </div>
                  <p className={`${about && "mb-6"} line-clamp-2 text-secondary-400 dark:text-white`}>{about}</p>
                  <div className='flex justify-between items-center'>
                        <Label labelFor='task' taskCount={40} />
                        <Label labelFor='review' reviewCount={150} rating={5.0} />
                  </div>
            </div>
      )
}