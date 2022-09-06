import React from 'react'
import { clx } from '../../../helpers/clx'
import Container from '../../../components/container'
import CardsTopBar from '../../../components/cards-topbar'
import ScrollContainer from '../../../components/scroll-container'
import MentorCard from '../../../components/mentor-card'
import GridContainer from '../../../components/grid-container'

export default function Mentors({
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
                        <CardsTopBar title='Recent Mentors' scrollRef={scrollRef} />
                        <ScrollContainer scrollRef={scrollRef} classname='px-0 space-x-6'>
                              <MentorCard contained/>
                              <MentorCard contained/>
                              <MentorCard contained/>
                              <MentorCard contained/>
                              <MentorCard contained/>
                              <MentorCard contained/>
                        </ScrollContainer>
                  </Container>
                  <Container classname='py-6 pb-8'>
                        <CardsTopBar title='Mentors' noScroll/>
                        <GridContainer colCount={3} classname='gap-6 md:grid-cols-2 lg:grid-cols-3 my-6'>
                              <MentorCard about='Hi, I&apos;m Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ' classname='md:min-w-full'/>
                              <MentorCard about='Hi, I&apos;m Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ' classname='md:min-w-full'/>
                              <MentorCard about='Hi, I&apos;m Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ' classname='md:min-w-full'/>
                              <MentorCard about='Hi, I&apos;m Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ' classname='md:min-w-full'/>
                              <MentorCard about='Hi, I&apos;m Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ' classname='md:min-w-full'/>
                              <MentorCard about='Hi, I&apos;m Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ' classname='md:min-w-full' />
                              <MentorCard about='Hi, I&apos;m Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ' classname='md:min-w-full'/>
                              <MentorCard about='Hi, I&apos;m Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ' classname='md:min-w-full'/>
                              <MentorCard about='Hi, I&apos;m Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ' classname='md:min-w-full'/>
                              
                        </GridContainer>
                  </Container>
            </Container>
      )
}