import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import { clx } from '../helpers/clx'

export default function Select({
      selectedOption,
      setSelectedOption,
      name,
      placeholder,
      options,
      classname,
      label,
      children
}) {
      const [isOpen, setOpen] = React.useState(false)
      const handleSelect = (option) => {
            setSelectedOption(option)
            setOpen(false)
      }
      const classes = clx(
            "text-sm w-[300px] h-[50px] border-2 rounded-xl px-4 py-2 flex justify-between items-center",
            classname
      )
      return (
            <div>
                  <select className='hidden' defaultValue={selectedOption} name={name} placeholder={placeholder}>
                        {options.map((option, index) => <option key={index} value={option} className='w-full h-[20px] py-8'>{option}</option>)}
                  </select>

                  <p className={label && "text-md font-semibold py-2"}>{label}</p>
                  <div className='w-fit relative'>
                        <div className={classes} onClick={()=>setOpen(!isOpen)}>
                              {selectedOption}
                              <RiArrowDropDownLine className={`text-4xl ${isOpen? "rotate-180": "rotate-0"}`} />
                        </div>
                        <div className={`${isOpen? "block":"hidden"} absolute top-[40px] my-3 h-fit w-full rounded-lg border-2 bg-white z-40 overflow-hidden`}>
                              {options.map((option, index) => <p key={index} className={`text-sm py-3 px-4 hover:bg-secondary-200 animation-pin dark:text-secondary-500 ${selectedOption === option && "bg-secondary-100"}`} onClick={()=>handleSelect(option)}>{option}</p>)}
                        </div>
                  </div>
            </div>
      )
}