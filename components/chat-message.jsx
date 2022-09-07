import Image from 'next/image'
import React from 'react'
import { clx } from '../helpers/clx'

export default function ChatMessage({
      classname,
      src,
      date,
      received,
      children
}) {
      const classes = clx(
            "bg-primary-500 p-3 rounded-xl max-w-[350px] lg:max-w-[400px] text-white mt-3",
            src && 'max-w-[300px] w-[300px]',
            received && "shadow-sm bg-white text-secondary-400",
            classname
      )
      return (
            <div className={`w-full flex item-center ${received? 'justify-start':'justify-end'}`}>
                  <div>
                        <div className={classes}>
                              <div className={`h-fit ${src && 'max-w-[300px]'} overflow-hidden`}>
                                    {src && <Image src={src} width={300} height={150} alt="chat image" layout='responsive' objectFit='cover' />}
                                    <p className={`font-medium ${src && 'mt-3'}`}>{children}</p>
                              </div>
                        </div>
                        {date && <span className={`w-full inline-block ${received? 'text-start':'text-end'}`}>{date}</span>}
                  </div>
            </div>
      )
}