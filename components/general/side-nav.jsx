import React from 'react'
import { useRouter } from 'next/router'
import { FaBookOpen } from 'react-icons/fa'
import { clx } from '../../helpers/clx'
import { IconButton } from '../button'
import LinkButton from '../link-button'
import {BiCategoryAlt} from 'react-icons/bi'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import {TbMessageCircle, TbUserCircle} from 'react-icons/tb'
import Image from 'next/image'
import { pageNavs } from '../../constants/page-nav'

export default function SideNav({
      classname,
      children
}) {
      const router = useRouter()
      const pathname = router.pathname
      
      const [activeLink, setActiveLink] = React.useState(1)
      const handleActiveLink = (index) => {
            setActiveLink(index+1)
      }
      
      const classes = clx(
            "w-[300px] min-h-screen bg-white dark:bg-secondary-500 shadow-md p-8 py-6 hidden lg:block",
            classname
      )
      return (
            <div className={classes}>
                  <div>
                        <div className='flex space-x-4 items-center mb-8'>
                              <IconButton icon={<FaBookOpen size={20} />} variant='contained' category='primary' size='medium' />
                              <p className='text-2xl font-semibold'>Nuegas</p>
                        </div>
                        <div className='flex flex-col space-y-4 py-6'>
                              {pageNavs.map((pageNav, index)=><LinkButton key={pageNav.title} href={pageNav.route} label={pageNav.title} icon={pageNav.icon} active={pageNav.route===pathname} onclick={()=>handleActiveLink(index)} fullWidth />)}
                        </div>
                        <div className='flex justify-center'>
                              <Image src='/help-center.png' alt='Help Center' width='160px' height='200px' objectFit='contain'/>
                        </div>
                  </div>
            </div>
      )
}