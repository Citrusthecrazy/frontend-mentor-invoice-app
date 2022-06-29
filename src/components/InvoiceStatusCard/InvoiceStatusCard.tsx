import React, { FC } from 'react'
import { IStatus } from '../../util/types'
import InvoiceStatus from '../InvoiceStatus/InvoiceStatus'

const InvoiceStatusCard:FC<IStatus> = ({status,className}) => {
  return (
    <div className={`bg-white rounded-lg flex flex-row
     justify-between items-center h-[91px] px-6 ${className}`}>
        <span className="text-gray-500 font-medium">Status</span>
        <InvoiceStatus status={status}/>
    </div>
  )
}

export default InvoiceStatusCard