import Reaact from 'react'
import { BiDotsHorizontal } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { clx } from '../../helpers/clx'
import Button from '../button'
import Label from '../label'
import TaskCard from '../task-card'

export default function TaskDetailsCard({
      classname,
      children
}) {
      const classes = clx(
            "min-w-fit md:w-fit h-fit py-4 rounded-xl bg-white dark:bg-secondary-500 shadow-md",
            classname
      )
      return (
            <div className={classes}>
                  <TopBar title='Task Today' icon={<BsThreeDots size={20} className='' />} />
                  <TaskCard progress={30} classname='shadow-none' contained/>
                  <hr className='border-1 my-4 mx-4'/>
                  <div>
                        <TopBar title='Detail Task' subtitle='UI/UX Design' classname='py-4' />
                        <div className='px-4 flex flex-col space-y-4 '>
                              <Label labelFor='task-detail' taskDetail='Understanding Figma' />
                              <Label labelFor='task-detail' taskDetail='Understanding Figma'/>
                              <Label labelFor='task-detail' taskDetail='Understanding Figma' />
                        </div>
                        <div className='mt-8 px-4'>
                              <Button size='medium' variant='contained' fullWidth>Go To Details</Button>
                        </div>
                  </div>
            </div>
      )
}

export function TopBar({
      classname,
      title,
      subtitle,
      icon,
      children
}) {
      const classes = clx(
            "flex items-center justify-between w-full px-4",
            classname
      )
      return (
            <div className={classes}>
                  <p className='text-secondary-500 font-semibold dark:text-white'>{title}</p>
                  {icon ? icon : <p className='text-sm text-secondary-400 dark:text-white'>{ subtitle }</p>}
            </div>
      )
}