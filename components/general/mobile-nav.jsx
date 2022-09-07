import React from 'react'
import {useTheme} from 'next-themes'
import { useRouter } from 'next/router'
import ReactDOM from 'react-dom'
import { createPortal } from 'react-dom'
import { clx } from '../../helpers/clx'
import { FaBookOpen } from 'react-icons/fa'
import { IconButton } from '../button'
import { pageNavs } from '../../constants/page-nav'
import LinkButton from '../link-button'
import Switch from '../switch'

export default function MobileNav({
      isOpen = false,
      onClose,
      classname,
      children
}) {
      const router = useRouter()
      const pathname = router.pathname
      
      const [activeLink, setActiveLink] = React.useState(1)
      const handleActiveLink = (index) => {
            setActiveLink(index + 1)
            onClose()
      }

      const { systemTheme, theme, setTheme } = useTheme()
      const currentTheme=theme==='system'? systemTheme:theme
      const themeChanger=()=>{
            currentTheme==='dark'? setTheme('light'):setTheme('dark')
      }

      const classes = clx(
            "fixed w-full h-screen z-40 bg-black/20 lg:hidden",
            classname
      )
      if(isOpen)
            return (
                  <div className={classes} onClick={onClose}>
                        <div className='w-[70%] md:w-[40%] h-full bg-white dark:bg-secondary-500 p-4 py-8'>
                              <div className='flex space-x-4 items-center  mb-8 z-50'>
                                    <IconButton icon={<FaBookOpen size={20} />} variant='contained' category='primary' size='medium' />
                                    <p className='text-2xl font-semibold'>Nuegas</p>
                              </div>
                              <div className='flex flex-col space-y-6 py-6'>
                                    {pageNavs.map((pageNav, index)=><LinkButton key={pageNav.title} href={pageNav.route} label={pageNav.title} icon={pageNav.icon} active={pageNav.route===pathname} onclick={()=>handleActiveLink(index)} fullWidth />)}
                              </div>
                              <div className='my-8'>
                                    <Switch active={currentTheme==='dark'} toggleActive={themeChanger} label={currentTheme==='dark'? 'Dark Mode': 'Light Mode'} />
                              </div>
                        </div>
                  </div>
            )
}