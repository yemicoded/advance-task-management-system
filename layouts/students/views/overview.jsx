import React from 'react'
import Container from '../../../components/container'
import FlexContainer from '../../../components/flex-container'
import RunningTask from '../../../components/view-components/running-task'
import ActivityChart from '../../../components/view-components/activity-chart'
import Tasks from '../../../components/view-components/tasks'
import ScrollContainer from '../../../components/scroll-container'
import TaskCard from '../../../components/task-card'
import MentorCard from '../../../components/mentor-card'
import CardsTopBar from '../../../components/cards-topbar'
import TaskDetailsCard from '../../../components/view-components/task-details-card'

export default function Overview() {
      const mentorRef=React.useRef()
      const taskRef=React.useRef()
      
      return (
            <Container>
                  <FlexContainer classname='block lg:flex space-x-6 py-6 flex-col lg:flex-row'>
                        <RunningTask classname='lg:min-h-full'/>
                        <ActivityChart classname='hidden lg:block lg:flex-1'/>
                  </FlexContainer>
                  <ActivityChart classname='lg:hidden' />
                  <Container classname='py-6'>
                        <CardsTopBar title='Monthly Mentors' scrollRef={mentorRef} />
                        <ScrollContainer scrollRef={mentorRef} classname='max-w-4xl px-0 space-x-6'>
                              <MentorCard contained/>
                              <MentorCard contained/>
                              <MentorCard contained/>
                        </ScrollContainer>
                  </Container>
                  <Container classname='py-6'>
                        <CardsTopBar title='Upcoming Tasks' scrollRef={taskRef} />
                        <ScrollContainer scrollRef={taskRef} classname='max-w-4xl px-0 space-x-6'>
                              <TaskCard progress={30} contained/>
                              <TaskCard progress={45} contained/>
                              <TaskCard progress={70} contained/>
                              <TaskCard progress={20} contained/>
                              <TaskCard progress={65} contained/>
                              <TaskCard progress={90} contained/>
                        </ScrollContainer>
                  </Container>
                  <Container classname='lg:hidden pb-6'>
                        <TaskDetailsCard />
                        <p className='text-md text-secondary-400 dark:text-white text-center my-4'>Developed by <span className='italic text-primary-300 font-semibold'>Oloko Sodiq</span> </p>
                  </Container>
            </Container>
      )
}