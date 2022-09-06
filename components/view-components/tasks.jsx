import React from 'react'
import ScrollContainer from '../scroll-container'
import TaskCard from '../task-card'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
import { BsFacebook, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import ScrollTopBar from '../cards-topbar'

export default function Tasks() {
      return (
            <div className='py-6 max-w-full'>
            <ScrollTopBar scrollRef={scrollRef} />
            <ScrollContainer scrollRef={scrollRef}>
                  <TaskCard progress={30} contained/>
                  <TaskCard progress={50}/>
                  <TaskCard progress={80}/>
                  <TaskCard progress={50}/>
                  <TaskCard progress={50}/>
            </ScrollContainer>
            </div>
      )
}