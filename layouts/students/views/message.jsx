import React from 'react'
import { useRouter } from 'next/router'
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
      const router=useRouter()
      const [isMessageOpen, setIsMessageOpen] = React.useState(true)
      const [isMatch, setIsMatch] = React.useState(false)

      const handleChange = () => {
                  if (isMatch) {
                        router.push(`${router.pathname}/1`)
                  }
      }
      
      React.useEffect(() => {
            const media = window.matchMedia("(max-width: 700px)")
            
            setIsMatch(media.matches)
      }, [router])
      
      const classes = clx(
            "flex w-full max-h-[100vh]",
            classname
      )
      return (
            <div className={classes}>
                  <div className='w-full lg:max-w-[370px] max-h-[100vh] lg:max-h-[90vh] overflow-auto scrollbar-thumb-secondary-100 hover:scrollbar-thumb-secondary-200 lg:scrollbar-thin p-4 lg:p-6 bg-white dark:bg-secondary-500 dark:border-0 dark:border-secondary-200'>
                        <Search classname='lg:w-full' placeholder='Search Name'/>
                        <div className='my-6'>
                              <div className='py-4 border-b-2 border-secondary-100/20'>
                                    <ChatCard active onclick={handleChange} />
                              </div>
                              <div className='py-4 border-b-2 border-secondary-100/20'>
                                    <ChatCard status='unread'  />
                              </div>
                              <div className='py-4 border-b-2 border-secondary-100/20'>
                                    <ChatCard status='unread'  />
                              </div>
                              <div className='py-4 border-b-2 border-secondary-100/20'>
                                    <ChatCard  />
                              </div>
                              <div className='py-4 border-b-2 border-secondary-100/20'>
                                    <ChatCard  />
                              </div>
                              <div className='py-4 border-b-2 border-secondary-100/20'>
                                    <ChatCard status='unread'  />
                              </div>
                              <div className='py-4 border-b-2 border-secondary-100/20'>
                                    <ChatCard />
                              </div>
                        </div>
                  </div>
                  {isMessageOpen && <div className='hidden flex-1 relative lg:flex flex-col lg:max-h-[85vh] bg-[#FAFAFA] pb-2'>
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
                        <div className='bg-white dark:bg-secondary-500 py-4 px-6 fixed xl:static bottom w-full flex justify-between'>
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