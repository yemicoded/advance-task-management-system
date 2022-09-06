import React from 'react'
import { AiFillFolderOpen } from 'react-icons/ai'
import { clx } from '../helpers/clx'

export default function Upload({
      id,
      fullWidth,
      classname,
      children
}) {
      const [chosenFile, setChosenFile]=React.useState(null)
      const handleChange = (event) => {
            let name = event.target.files[0].name
            if (name === 'undefined') {
                  setChosenFile(null)
            }
            setChosenFile(name)
      }
      const classes = clx(
            "w-[200px] h-[150px] rounded-xl border-2 border-dashed flex items-center justify-center",
            fullWidth && "w-[100%]",
            classname
      )
      return (
            <div className={classes}>
                  <input type="file" name="upload" id={id} onChange={handleChange} hidden />
                  {!chosenFile ? <label htmlFor={id} className='flex flex-col items-center'>
                        <AiFillFolderOpen size={40} />
                        <span>Choose File</span>
                  </label>
                        :
                  <span id='file-chosen' className='flex flex-col space-y-2 items-center'>
                        <span className='font-semibold underline'>Selected File:</span>
                        <span className='text-center'>{chosenFile}</span>
                        <label htmlFor={id} className='py-2 px-3 rounded-lg bg-secondary-100 select-none cursor-pointer hover:bg-secondary-200'>Change File</label>
                  </span>}
                  
            </div>
      )
}