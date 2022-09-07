import Image from 'next/image'
import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { clx } from '../helpers/clx'

export default function Profile({
      src,
      classname,
      children
}) {
      const classes = clx(
            "flex items-center space-x-2 ",
            classname
      )
      return (
            <div className={classes}>
                  <div className='w-10 h-10 rounded-full bg-primary-500 dark:ring-2 dark:ring-secondary-200 overflow-hidden'>
                        <Image src='/profile.png' width='70px' height='70px' alt='Profile Image' object-fit='cover' />
                  </div>
                  {! src && <div>
                        <p className='font-semibold leading-4 text-secondary-500 dark:text-white'>Jessica Jane</p>
                        <p className='text-sm leading-5 text-secondary-400 dark:text-secondary-300'>Web Developer</p>
                  </div>}
            </div>
      )
}
