import React from 'react'
import { MdPermMedia } from 'react-icons/md'
import { TbSend } from 'react-icons/tb'
import { IconButton } from '../../../components/button'
import ChatMessage from '../../../components/chat-message'
import { StackChatHeader } from '../../../components/general/header'
import Search from '../../../components/search'
import { clx } from '../../../helpers/clx'

export default function SingleChat({
      classname,
      children
}) {
      const classes = clx(
            "max-h-screen flex flex-col",
            classname
      )
      return (
            <div className={classes}>
                  <StackChatHeader />
                  <div className='px-4 flex-1 py-4 overflow-auto'>
                        <ChatMessage>Hello World</ChatMessage>
                        <ChatMessage date='1:02'>Good Morning Angelie. I have questions concerning my task.</ChatMessage>
                        <ChatMessage date='11:54' received>Ohh! any problem with your assignment?</ChatMessage>
                        <ChatMessage src='/chat-img.png'>check this out</ChatMessage>
                        <ChatMessage src='/chat-img.png'>check this out</ChatMessage>
                        <ChatMessage src='/chat-img.png'>check this out</ChatMessage>
                        <ChatMessage src='/chat-img.png' date='Today 3:09'>check this out</ChatMessage>
                  </div>
                  <div className='bg-white py-2 px-4 w-full flex justify-between'>
                        <Search placeholder='Send your message...' noIcon classname='border-0' />
                        <div className='flex space-x-8 items-center'>
                              <IconButton icon={<MdPermMedia size={80} />} size='large' variant='outlined' category='secondary' rounded classname='border-0' />
                              <IconButton icon={<TbSend fill='white'/>} size='large'/>
                        </div>
                  </div>
            </div>
      )
}