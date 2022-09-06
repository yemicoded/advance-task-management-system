import React from 'react'
import { clx } from '../helpers/clx'
import { SiBookstack } from 'react-icons/si'
import {AiFillStar} from 'react-icons/ai'


export default function Label({
      label,
      taskCount,
      taskDetail,
      rating,
      reviewCount,
      labelFor,
      icon,
      classname,
      children,
}) {
      const classes = clx(
            "flex items-center space-x-2",
            classname
      )
      switch (labelFor) {
            case 'task':
                  return (
                  <div className={classes}>
                        <SiBookstack />
                        <p className='font-semibold text-secondary-500 text-sm dark:text-white'>{taskCount} Tasks</p>
                  </div>)
            case 'review':
                  return (
                  <div className={classes}>
                        <AiFillStar className='text-gold'/>
                        <p className='font-semibold text-secondary-500 text-sm dark:text-white'>{rating} ({reviewCount} Reviews)</p>
                  </div>
                  )
            case 'task-detail':
                  return (
                        <div className={classes}>
                              <div className='h-8 w-8 rounded-lg text-secondary-500 flex items-center justify-center font-semibold bg-secondary-100'>1</div>
                              <p className='font-semibold text-secondary-500 dark:text-white'>{ taskDetail }</p>
                        </div>
                  )
      }
}