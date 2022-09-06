import React from 'react'
import { clx } from '../../helpers/clx'
import Button from '../button'
import Upload from '../upload'

export default function AssignmentCard({
      classname,
      children
}) {
      const classes = clx(
            "w-full md:max-w-[330px] h-fit bg-white rounded-lg p-4 flex flex-col space-y-4 shadow-md",
            classname
      )
      return (
            <div className={classes}>
                  <p className='font-semibold text-secondary-500'>Assigned Assignment</p>
                  <div className='flex flex-col space-y-2'>
                        <p className='font-semibold text-2xl'>Creating Awesome Mobile Apps</p>
                        <p>UI/UX Design, App Design</p>
                  </div>
                  <div className='flex flex-col space-y-2'>
                        <p className='font-semibold text-lg'>Student Details</p>
                        <div className='flex justify-between'>
                              <span className='text-secondary-400'>Student Name</span>
                              <span className='font-semibold'>Skylar Dias</span>
                        </div>
                        <div className='flex justify-between'>
                              <span className='text-secondary-400'>Student Class</span>
                              <span className='font-semibold'>MPA 2</span>
                        </div>
                        <div className='flex justify-between'>
                              <span className='text-secondary-400'>Student Number</span>
                              <span className='font-semibold'>101</span>
                        </div>
                  </div>
                  <div className='flex flex-col space-y-2'>
                        <p className='font-semibold text-lg'>File Task</p>
                        <div className='flex justify-between'>
                              <span className='text-secondary-400'>Last Modified</span>
                              <span className='font-semibold'>1 July 2022</span>
                        </div>
                  </div>
                  <div className='flex flex-col space-y-2'>
                        <span className='text-secondary-400'>File Submissions</span>
                        <Upload id='assignment-upload' fullWidth/>
                        <span className='text-secondary-400'>*drag or browse from browser</span>
                  </div>
                  <div className=''>
                        <Button size='medium' variant='contained' fullWidth>Go To Details</Button>
                  </div>
            </div>
      )
}