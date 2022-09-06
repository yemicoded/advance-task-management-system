import React from 'react'
import Container from '../../../components/container'
import { clx } from '../../../helpers/clx'
import Tabs from '../../../components/tab'
import LanguageSelect, { CountrySelect, GenderSelect } from './components/select-options'
import Button from '../../../components/button'
import Switch from '../../../components/switch'

const reducer = (state, action)=>{
      switch (action.type) {
            case 'toggleMessage':
                  if(state.message)
                        return { ...state, message: false }
                  return { ...state, message: true }
            case 'toggleTaskUpdate':
                  if(state.taskUpdate)
                        return { ...state, taskUpdate: false }
                  return { ...state, taskUpdate: true }
            case 'toggleTaskDeadline':
                  if(state.taskDeadline)
                        return { ...state, taskDeadline: false }
                  return { ...state, taskDeadline: true }
            case 'toggleMentorHelp':
                  if(state.mentorHelp)
                        return { ...state, mentorHelp: false }
                  return { ...state, mentorHelp: true }
            default:
                  return null
      }
}

export default function Settings({
      classname,
      children
}) {
      const tabs = ["General", "Notification"]
      const [activeTab, setActiveTab] = React.useState(1)
      const [status, dispatch] = React.useReducer(reducer, {
            message:false,
            taskUpdate:true,
            taskDeadline:false,
            mentorHelp:true
      })
      const classes = clx(
            "",
            classname
      )
      return (
            <React.Fragment>
                  <Tabs tabOptions={tabs} activeTab={activeTab} onclick={setActiveTab} classname='lg:hidden px-4 bg-white dark:bg-secondary-500 border-b-0' />
                  <Container classname='p-4 lg:p-0'>
                        <Container classname='min-h-screen px-4 py-2 lg:p-8 w-full bg-white dark:bg-secondary-500 rounded-xl'>
                              <Tabs tabOptions={tabs} activeTab={activeTab} onclick={setActiveTab} classname='hidden lg:flex border-b-0' />
                              {activeTab===1 && <Container>
                                    <form>
                                          <LanguageSelect />
                                          <CountrySelect />
                                          <GenderSelect />
                                          <Button size='large' classname='px-16 mt-10'>Save Changes</Button>
                                    </form>
                              </Container>}
                              {activeTab===2 && <Container>
                                    <form>
                                          <Switch label='Message' active={status.message} toggleActive={() =>dispatch({type:'toggleMessage'})} classname='my-4'/>
                                          <Switch label='Task update' active={status.taskUpdate} toggleActive={() =>dispatch({type:'toggleTaskUpdate'})} classname='my-4'/>
                                          <Switch label='Task Deadline' active={status.taskDeadline} toggleActive={() =>dispatch({type:'toggleTaskDeadline'})} classname='my-4'/>
                                          <Switch label='Mentor Help' active={status.mentorHelp} toggleActive={() =>dispatch({type:'toggleMentorHelp'})} classname='my-4'/>
                                          <Button size='large' classname='px-16 mt-10'>Save Changes</Button>
                                    </form>
                              </Container>}
                        </Container>
                  </Container>
            </React.Fragment>
      )
}