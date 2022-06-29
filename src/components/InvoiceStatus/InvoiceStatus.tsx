import React, { FC } from 'react'
import { capitalizeFirstLetter } from '../../util/Formatters'
import { IStatus } from '../../util/types'



const InvoiceStatus:FC<IStatus> = ({status}) => {
  return (
    <div
          className={`font-bold rounded-md h-full flex flex-row min-w-[104px]
                          max-h-10
                          items-center justify-center gap-2 ${
                            status === "paid"
                              ? "bg-paleGreen text-brightGreen "
                              : status == "pending"
                              ? "bg-paleOrange text-brightOrange"
                              : "bg-dirtyWhite text-darkBlue"
                          }`}>
          <div
            className={`w-2 h-2 ${
              status === "paid"
                ? "bg-brightGreen"
                : status === "pending"
                ? "bg-brightOrange"
                : "bg-darkBlue"
            }  rounded-full`}
          />
          <span>{capitalizeFirstLetter(status)}</span>
        </div>
  )
}

export default InvoiceStatus