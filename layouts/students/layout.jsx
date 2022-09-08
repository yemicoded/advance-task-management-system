import React from 'react'
import ReactDOM from 'react-dom'
import PrimaryHeader, { SecondaryHeader } from '../../components/general/header'
import MobileNav from '../../components/general/mobile-nav'
import SideNav from '../../components/general/side-nav'
import TaskDetailsCard from '../../components/view-components/task-details-card'
import { clx } from '../../helpers/clx'

export default function Layout({
      pageTitle,
      searchFilter,
      children
}) {
      const [isModalOpen, setIsModalOpen] = React.useState(false)
      const handleClose = (e) => {
            if (e.target===e.currentTarget) {
                  setIsModalOpen(!isModalOpen)
            }
      }
      const classes = clx(
            "flex lg:min-h-fit max-h-screen relative overflow-hidden"
      )
      console.log(isModalOpen)
      if (pageTitle === 'Overview') {
            return (
                  <div className={classes}>
                        <SideNav classname='min-h-screen' />
                        { /* Mobile   */}
                        <div className='lg:hidden max-h-screen overflow-scroll w-full bg-[#FAFAFA]'>
                              <SecondaryHeader padded onClickMenu={() => setIsModalOpen(!isModalOpen)} classname='dark:bg-secondary-500' />
                              <div className='dark:bg-secondary-500/80 h-fit w-full'>
                              <div className='lg:hidden flex-col space-y-2 p-4'>
                                    <p className='text-secondary-500 font-semibold text-xl dark:text-white'>Hi, Skylar Dias</p>
                                    <p className='text-secondary-500 text-md dark:text-secondary-100'>Lets finish your task today!</p>
                              </div>
                              <main className='px-4 max-w-full max-h-full pb-6'>{children}</main>
                              </div>
                        </div>
                        {/* Desktop */}
                        <div className={`hidden lg:block max-h-screen overflow-auto scrollbar-thumb-secondary-100 hover:scrollbar-thumb-secondary-200 scrollbar-thin flex-1 ${pageTitle!=='Message' && 'px-6'} bg-[#FAFAFA] dark:bg-secondary-300/30`}>
                              <SecondaryHeader transparent onClickMenu={()=>setIsModalOpen(!isModalOpen)}/>
                              <main className='min-h-screen'>{children}</main>
                        </div>
                        <div className='hidden min-h-screen overflow-auto scrollbar-thumb-secondary-100 hover:scrollbar-thumb-secondary-200 scrollbar-thin lg:flex w-fit bg-[#F5F5F7]  dark:bg-secondary-300/20 justify-center px-4 py-6'>
                              <TaskDetailsCard classname='' />
                        </div>
                        <MobileNav isOpen={isModalOpen} onClose={handleClose} />
                  </div>
            )
      }
      return (
            <div className={classes}>
                  <SideNav classname='' />
                  { /* Mobile   */}
                  <div className='lg:hidden max-h-screen overflow-scroll w-full bg-[#FAFAFA] '>
                        <div className='dark:bg-secondary-500/80 h-fit w-full'>
                        <PrimaryHeader title={pageTitle} padded noSearchBar={!searchFilter} onClickMenu={()=>setIsModalOpen(!isModalOpen)}/>
                        <main className='max-w-full min-h-screen lg:min-h-screen'>{children}</main>
                        </div>
                  </div>
                  {/* Desktop */}
                  <div className='hidden lg:block lg:max-h-[100vh] overflow-hidden flex-1 bg-[#FAFAFA] dark:bg-secondary-300/30'>
                        <PrimaryHeader title={pageTitle} padded noSearchBar={!searchFilter} onClickMenu={() => setIsModalOpen(!isModalOpen)} />
                        <div className={`${pageTitle!=='Message'? 'overflow-auto max-h-[90vh] scrollbar-thin':'overflow-hidden max-h-[100vh]'} scrollbar-thumb-secondary-100 hover:scrollbar-thumb-secondary-200`}>
                              <main className={`mb-16 ${pageTitle !== 'Message' && 'p-6'}`}>{children}</main>
                        </div>
                  </div>
                  <MobileNav isOpen={isModalOpen} onClose={handleClose} />
            </div>
      )
} 