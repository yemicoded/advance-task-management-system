import React from 'react'
import { clx } from '../../helpers/clx'

export default function UserDetail({
      classname,
      children
}) {
      const classes = clx(
            "hidden lg:block flex-col space-y-3",
            classname
      )
      return (
            <div className={classes}>
                  <p className='font-semibold text-2xl'>Hi, Skylar Dias</p>
                  <p className='text-secondary-500 text-md'>Lets finish your task today!</p>
            </div>
      )
}