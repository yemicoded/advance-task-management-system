import React from 'react'
import { clx } from '../helpers/clx'

export default function CircularProgress({
      progress,
      bgDark,
      classname,
      children
}) {

      const [progressValue, setProgressValue]=React.useState(0)
      const classes = clx(
            "w-[80px] h-[80px] rounded-full bg-primary-500 relative before:absolute before:top-[50%] before:left-[50%] before:translate-y-[-50%] before:translate-x-[-50%] before:content-[''] before:w-[90%] before:h-[90%] before:bg-secondary-100 before:rounded-full duration-50",
            bgDark && 'before:bg-secondary-900 text-white',
            classname
      )

      React.useEffect(() => {
            setProgressValue(0)
            const progressInterval = setInterval(() => {
                        setProgressValue(prevValue => {
                              if (prevValue >= progress) {
                                    setProgressValue(progress)
                                    return clearInterval(progressInterval)
                              }
                              return prevValue+1
                        })
            }, 50)
      }, [progress])

      return (
            <div className={classes} style={{background:`conic-gradient(#546FFF ${progressValue * 3.6}deg, #BAC8FF ${progressValue * 3.6}deg)`}}>
                  <p className='text-center text-2xl font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{ progressValue}%</p>
            </div>
      )
}