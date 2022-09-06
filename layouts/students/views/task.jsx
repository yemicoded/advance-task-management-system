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
      const scrollRef=React.useRef()

      const classes = clx(
            "",
            classname
      )
      return (
            <Container classname='px-4 lg:px-0'>
                  <Container classname='py-6 lg:py-0'>
                        <CardsTopBar title='Time Limit'scrollRef={scrollRef} />
                        <ScrollContainer scrollRef={scrollRef} classname='px-0 space-x-6'>
                              <TaskCard contained/>
                              <TaskCard contained/>
                              <TaskCard contained />
                              <TaskCard contained/>
                              <TaskCard contained/>
                        </ScrollContainer>
                  </Container>
                  <Container classname='py-6'>
                        <CardsTopBar title='New Task'scrollRef={scrollRef} />
                        <ScrollContainer scrollRef={scrollRef} classname='px-0 space-x-6'>
                              <TaskCard contained/>
                              <TaskCard contained/>
                              <TaskCard contained />
                              <TaskCard contained/>
                              <TaskCard contained/>
                        </ScrollContainer>
                  </Container>
            </Container>
      )
}