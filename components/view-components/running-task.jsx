import React from 'react'
import { clx } from '../../helpers/clx'
import CircularProgress from '../circular-progress'

export default function RunningTask({
      classname,
      children
}) {
      const classes = clx(
            "w-full lg:w-[200px] min-h-full lg:h-[250px] bg-secondary-900 rounded-lg p-4 items-center lg:items-start flex lg:flex-col justify-between",
            classname
      )
      return (
            <div className={classes}>
                  <div className='flex flex-col space-y-4 w-full'>
                        <p className='text-lg font-semibold text-white'>Running Task</p>
                        <p className='text-4xl font-semibold text-white'>65</p>
                  </div>
                  <div className='flex space-x-3 items-center'>
                        <CircularProgress progress={45} bgDark />
                        <div className='flex flex-col space-y-1'>
                              <p className='text-2xl font-semibold text-white'>100</p>
                              <p className='text-lg font-semibold text-secondary-400'>Task</p>
                        </div>
                  </div>
            </div>
      )
}