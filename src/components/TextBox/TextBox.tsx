import React, { FC, HTMLProps } from 'react'

const TextBox:FC<HTMLProps<HTMLInputElement>> = ({className,...props}) => {
  return (
    <div className={`bg-white rounded-[4px] p-4 border border-[#DFE3FA] overflow-hidden ${className}`}>
        <input className="w-full font-bold focus:outline-none" {...props}/>
    </div>
  )
}

export default TextBox