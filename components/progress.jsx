import React from 'react'
import { clx } from '../helpers/clx'

export default function BarProgress({
      label,
      fullWidth,
      progress,
      classname,
      children
}) {
      const [progressValue, setProgressValue]= React.useState("100%")
      // const progress = React.useRef()
      // const handleChange = ()=>{
      //       setProgressValue(progress.current.value)
      // 
     
      const width=300
      const classes = clx(
            "w-[200px]",
            // width && `w-[${width}px]`,
            fullWidth && "w-[100%]",
            classname
      )
      React.useEffect(() => {
            setProgressValue(20)
      }, [progress])
      return (
        <div className={classes}>
          <div className='flex justify-between items-center py-3'>
            <p className='font-semibold text-secondary-500 dark:text-white'>Progress</p>
                        <p className='font-semibold text-primary-500'>{progress?progress:0}%</p>
          </div>
          <div className='flex items-center w-full h-2 rounded-md bg-primary-200 relative'>
            <div
              className={`relative inset-0 bg-primary-500 progress-bar rounded-md h-full after:bg-primary-500 after:content-[" "] after:absolute after:right-0 after:bottom-1/2 after:translate-y-1/2 after:translate-x-1/2 after:w-[15px] after:h-[15px] after:rounded-full after:ring-2 after:ring-white`}
              style={{ width: `${progress}%`}}></div>
          </div>
        </div>
      );
}