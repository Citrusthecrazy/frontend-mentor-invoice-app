import { FC, HTMLProps, ReactNode } from 'react'

interface IInputGroup{
    children: ReactNode
}

const InputGroup:FC<IInputGroup & HTMLProps<HTMLDivElement>> = ({children,...props}) => {
  return (
    <div className="flex flex-col justify-start" {...props}>{children}</div>
  )
}

export default InputGroup