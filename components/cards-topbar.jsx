import React from 'react'
import { clx } from '../helpers/clx'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

export default function CardsTopBar({
      classname,
      title,
      noScroll,
      handleLeftScroll,
      handleRightScroll,
      scrollRef,
      children
}) {
      const scroll = (direction) => {
            switch (direction) {
                  case "right":
                        return scrollRef.current.scrollBy(300, 0)
                  case "left":
                        return scrollRef.current.scrollBy(-300, 0)
                  default:
                        return
            }
      }

      const classes = clx(
            'flex jutify-between dark:text-white items-center w-full',
            classname
      )
      return (
            <div className={classes}>
                  <div className='font-semibold text-xl lg:text-2xl flex-1'>{title}</div>
                  {!noScroll && <div className='flex space-x-4'>
                        <BsFillArrowLeftCircleFill size={30} className='text-primary-500 hover:text-primary-600 cursor-pointer dark:text-white select-none' onClick={()=>scroll("left")}/>
                        <BsFillArrowRightCircleFill size={30} className='text-primary-500 hover:text-primary-600 cursor-pointer dark:text-white select-none' onClick={()=>scroll("right")}/>
                  </div>}
            </div>
      )
}