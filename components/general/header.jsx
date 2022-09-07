import React from 'react'
import {useTheme} from 'next-themes'
import { BiBell, BiCategory } from 'react-icons/bi'
import { clx } from '../../helpers/clx'
import Button, { IconButton } from '../button'
import Profile from '../profile'
import Search from '../search'
import {CgSortAz} from 'react-icons/cg'
import { HiMenu } from 'react-icons/hi'
import { VscSettings } from 'react-icons/vsc'
import {MdDarkMode, MdLightMode} from 'react-icons/md'

export default function PrimaryHeader({
      classname,
      onClickMenu,
      title,
      padded,
      noSearchBar,
      transparent,
      children
}) {
      const { systemTheme, theme, setTheme } = useTheme()
      const currentTheme=theme==='system'? systemTheme:theme
      const themeChanger=()=>{
            currentTheme==='dark'? setTheme('light'):setTheme('dark')
            console.log(currentTheme)
      }
      const classes = clx(
            "h-fit max-w-full bg-white dark:bg-secondary-500 p-6 px-0 flex flex-col space-y-6",
            transparent && 'bg-transparent',
            classname
      )
      return (
            <div className={classes}>
                  <div className={`flex justify-between items-center w-full ${padded && 'px-4 lg:px-6'}`}>
                        <p className='hidden lg:block font-semibold text-2xl'>{title}</p>
                        <IconButton icon={<HiMenu size={30} />} variant='outlined' category='secondary' size='large' rounded classname='lg:hidden' onclick={onClickMenu} />
                        <div className='flex space-x-6'>
                               {currentTheme === 'light'? <IconButton icon={<MdDarkMode size={30} />} variant='outlined' category='secondary' size='large' rounded onclick={themeChanger} />
                              :
                              <IconButton icon={<MdLightMode size={30} />} variant='outlined' category='secondary' size='large' rounded onclick={themeChanger} />}
                              <IconButton icon={<BiBell size={30} />} variant='outlined' category='secondary' size='large' rounded />
                              <Profile src/>
                        </div>
                  </div>
                  <div className={`${padded && 'px-4 lg:px-6'} flex flex-col space-y-6 lg:space-y-0`}>
                        <p className='lg:hidden font-semibold text-2xl'>{ title}</p>
                        {!noSearchBar && <div className={`flex justify-between w-full space-x-2 lg:space-x-4 `}>
                              <Search classname='' placeholder='Search Task'/>
                              <div className={`hidden lg:flex space-x-6 `}>
                                    <Button size='medium' variant='outlined' category='secondary' iconLeft={<BiCategory size={25} />}>Category</Button>
                                    <Button size='medium' variant='outlined' category='secondary' iconLeft={<CgSortAz size={25}/>}>Sort By: Deadline</Button>
                              </div>
                              <IconButton icon={<VscSettings size={20} />} variant='outlined' category='secondary' size='medium' classname='lg:hidden' />
                        </div>}
                  </div>
            </div>
      )
}

export function SecondaryHeader({
      classname,
      onClickMenu,
      padded,
      transparent,
      noSearchBar,
      children
}) {
      const { systemTheme, theme, setTheme } = useTheme()
      const currentTheme=theme==='system'? systemTheme:theme
      const themeChanger=()=>{
            currentTheme==='dark'? setTheme('light'):setTheme('dark')
            console.log(currentTheme)
      }
      const classes = clx(
            "h-fit max-w-full bg-white p-6 px-0 flex flex-col space-y-6",
            transparent && 'bg-transparent',
            classname
      )
      return (
            <div className={classes}>
                  <div className={`flex justify-between items-center w-full ${padded && 'px-4'}`}>
                        <div className='hidden lg:block flex-col space-y-3'>
                              <p className='font-semibold text-2xl'>Hi, Skylar Dias</p>
                              <p className='text-secondary-500 text-md dark:text-secondary-100'>Lets finish your task today!</p>
                        </div>
                        <IconButton icon={<HiMenu size={30} />} variant='outlined' category='secondary' size='large' rounded classname='lg:hidden' onclick={onClickMenu} />
                        <div className='flex space-x-6'>
                              {currentTheme === 'light'? <IconButton icon={<MdDarkMode size={30} />} variant='outlined' category='secondary' size='large' rounded onclick={themeChanger} />
                              :
                              <IconButton icon={<MdLightMode size={30} />} variant='outlined' category='secondary' size='large' rounded onclick={themeChanger} />}
                              <IconButton icon={<BiBell size={30} />} variant='outlined' category='secondary' size='large' rounded />
                              <Profile src/>
                        </div>
                  </div>
            </div>
      )
}