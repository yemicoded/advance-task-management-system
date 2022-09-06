import React from 'react'
import { clx } from '../helpers/clx'

export default function ScrollContainer({
      scrollRef,
      absolute,
      classname,
      children
}) {
      const classes = clx(
            "scrollbar-hide overflow-x-auto max-w-full snap-x flex space-x-4 h-fit py-4",
            // absolute && "absolute",
            classname
      )
      return (
            <>
            <div ref={scrollRef} className={classes}>
                  {children}
            </div>
            </>
            
      )
}