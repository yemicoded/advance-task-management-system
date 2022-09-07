import React from 'react'
import { clx } from '../../../helpers/clx'
import Search from '../../../components/search'
import ChatMessage from '../../../components/chat-message'
import ChatCard, { ChatProfile } from '../../../components/chat-card'
import { IconButton } from '../../../components/button'
import { BsCameraVideo } from 'react-icons/bs'
import { VscCallOutgoing } from 'react-icons/vsc'
import { MdPermMedia } from 'react-icons/md'
import { TbSend } from 'react-icons/tb'

export default function Message({
      classname,
      children
}) {
      const [isMessageOpen, setIsMessageOpen]=React.useState(false)
      const classes = clx(
            "flex w-full max-h-[100vh]",
            classname
      )
      return (
            <div className={classes}>
                  <div className='w-full lg:max-w-[370px] max-h-[90vh] lg:max-h-[90vh] overflow-auto scrollbar-thumb-secondary-100 hover:scrollbar-thumb-secondary-200 scrollbar-thin p-6 bg-white dark:bg-secondary-500 dark:border-0 dark:border-secondary-200'>
                        <Search classname='lg:w-full' placeholder='Search Name'/>
                        <div className='my-6'>
                              <div className='py-4 border-b-2 border-secondary-100/20'>
                                    <ChatCard classname='max-w-full' active/>
                              </div>
                              <div className='py-4 border-b-2 border-secondary-100/20'>
                                    <ChatCard classname='max-w-full' />
                              </div>
                              <div className='py-4 border-b-2 border-secondary-100/20'>
                                    <ChatCard classname='max-w-full' />
                              </div>
                              <div className='py-4 border-b-2 border-secondary-100/20'>
                                    <ChatCard classname='max-w-full' />
                              </div>
                              <div className='py-4 border-b-2 border-secondary-100/20'>
                                    <ChatCard classname='max-w-full' />
                              </div>
                              <div className='py-4 border-b-2 border-secondary-100/20'>
                                    <ChatCard classname='max-w-full' />
                              </div>
                              <div className='py-4 border-b-2 border-secondary-100/20'>
                                    <ChatCard classname='max-w-full' />
                              </div>
                        </div>
                  </div>
                  {isMessageOpen && <div className='flex-1 relative flex flex-col lg:max-h-[85vh] bg-[#FAFAFA] pb-2'>
                        <div className='w-full max-h-[100px] bg-white border-t-2 border-l-2 border-secondary-100/20 px-6 flex justify-between items-center'>
                              <ChatProfile />
                              <div className='flex space-x-4'>
                                    <IconButton icon={<BsCameraVideo />} size='large' variant='outlined' category='secondary' rounded />
                                    <IconButton icon={<VscCallOutgoing />} size='large' variant='outlined' category='secondary' rounded/>
                              </div>
                        </div>
                        <div className='px-6 max-h-[65vh] py-4 overflow-auto scrollbar-thumb-secondary-100 hover:scrollbar-thumb-secondary-200 scrollbar-thin'>
                              <ChatMessage>Hello World</ChatMessage>
                              <ChatMessage>Good Morning Angelie. I have questions concerning my task.</ChatMessage>
                              <ChatMessage received>Ohh! any problem with your assignment?</ChatMessage>
                              <ChatMessage src='/chat-img.png'>check this out</ChatMessage>
                              <ChatMessage src='/chat-img.png'>check this out</ChatMessage>
                              <ChatMessage src='/chat-img.png'>check this out</ChatMessage>
                              <ChatMessage src='/chat-img.png'>check this out</ChatMessage>
                        </div>
                        <div className='bg-white py-4 px-6 fixed xl:static bottom w-full flex justify-between'>
                              <Search placeholder='Send your message...' noIcon classname='border-0' />
                              <div className='flex space-x-8 items-center'>
                                    <IconButton icon={<MdPermMedia size={80} />} size='large' variant='outlined' category='secondary' rounded classname='border-0' />
                                    <IconButton icon={<TbSend fill='white'/>} size='large'/>
                              </div>
                        </div>
                  </div>}
            </div>
      )
}