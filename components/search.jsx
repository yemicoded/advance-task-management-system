import React from 'react'
import { clx } from '../helpers/clx'
import {BiSearch} from 'react-icons/bi'

export default function Search({
      label,
      placeholder,
      name,
      classname,
      children
}) {
      const classes = clx(
            "border-2 border-secondary-200 w-full lg:w-[480px] px-4 text-secondary-400 py-2 rounded-lg flex justify-between items-center",
            classname
      )
      return (
            <div className={classes}>
                  <input type="text" placeholder='Search Task' className='focus:outline-0 flex-1 bg-transparent text-secondary-500 dark:text-white' />
                  <BiSearch className='ml-2 cursor-pointer'/>
            </div>
      )
}