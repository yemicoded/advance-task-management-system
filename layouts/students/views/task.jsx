import React from 'react'
import CardsTopBar from '../../../components/cards-topbar'
import Container from '../../../components/container'
import PrimaryHeader from '../../../components/general/header'
import ScrollContainer from '../../../components/scroll-container'
import TaskCard from '../../../components/task-card'
import { clx } from '../../../helpers/clx'

export default function Task({
      classname,
      children
}) {
      const timeLimitRef=React.useRef()
      const newTaskRef=React.useRef()

      const classes = clx(
            "",
            classname
      )
      return (
            <Container classname='px-4 lg:px-0'>
                  <Container classname='py-6 lg:py-0'>
                        <CardsTopBar title='Time Limit'scrollRef={timeLimitRef} />
                        <ScrollContainer scrollRef={timeLimitRef} classname='px-0 space-x-6'>
                              <TaskCard progress={90} contained/>
                              <TaskCard progress={75} contained/>
                              <TaskCard progress={60} contained/>
                              <TaskCard progress={20} contained/>
                              <TaskCard progress={95} contained/>
                              <TaskCard progress={100} contained/>
                        </ScrollContainer>
                  </Container>
                  <Container classname='py-6'>
                        <CardsTopBar title='New Task'scrollRef={newTaskRef} />
                        <ScrollContainer scrollRef={newTaskRef} classname='px-0 space-x-6'>
                              <TaskCard progress={30} contained/>
                              <TaskCard progress={45} contained/>
                              <TaskCard progress={70} contained/>
                              <TaskCard progress={20} contained/>
                              <TaskCard progress={65} contained/>
                              <TaskCard progress={90} contained/>
                        </ScrollContainer>
                  </Container>
            </Container>
      )
}