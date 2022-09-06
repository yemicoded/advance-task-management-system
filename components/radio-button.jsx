import React from  'react'
import { clx } from '../helpers/clx'

export default function Radio({
      classname,
      options,
      checked,
      setChecked,
      label,
      children
}) {
      const classes = clx(
            "border-2 py-4 px-4 w-max rounded-xl flex justify-between items-center space-x-4 cursor-pointer",
            classname
      )
      return (
            <div>
                  <p className={label && "text-md font-semibold py-2"}>{label}</p>
                  {options.map((option, index) => <input key={index} type='radio' name='name' value={option.value} checked={option.value===checked} onChange={()=>setChecked(option.value)} className='hidden' />)}
                  <div className='flex space-x-2'>
                        {options.map((option, index) => (
                              <div key={index} className={`${classes} ${checked===option.value && "border-primary-500"}`} onClick={()=>setChecked(option.value)}>
                                    <p>{option.key}</p>
                                    <div className={`p-2 border-2 w-4 h-4 rounded-full ${option.value === checked && "border-primary-500 border-4 p-[6px]"}`} />
                              </div>
                        ))}
                  </div>
            </div>
      )
}