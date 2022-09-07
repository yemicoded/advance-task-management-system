import React from 'react'
import ChatCard, { ChatProfile } from '../components/chat-card'
import ChatMessage from '../components/chat-message'

export default function Test() {
      return (
            <React.Fragment>
                  <ChatCard />
                  <br />
                  <br />
                  <ChatProfile />
                  <ChatMessage received date='Today 11:53' src='/chat-img.png'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus incidunt nulla amet vel eius sed optio corrupti odit temporibus necessitatibus?</ChatMessage>
                  <ChatMessage received>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, incidunt.</ChatMessage>
            </React.Fragment>
      )
}