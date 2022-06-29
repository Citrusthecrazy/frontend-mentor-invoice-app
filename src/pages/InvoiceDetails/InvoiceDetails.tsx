import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BackButton, InvoiceStatusCard } from '../../components'
import data from '../../data.json'
import { Invoice } from '../../util/types'

const InvoiceDetails = () => {
    const [invoice, setInvoice] = useState<Invoice | null>(null)
    const {id} = useParams()
    useEffect(() => {
        if(!id) return;
      setInvoice(getInvoiceById(id))
      return () => {
        setInvoice(null);
      }
    }, [id])
    
  return (
    <div className='flex flex-col pt-[104px] px-6'>
        <BackButton/>
        {invoice && <InvoiceStatusCard className="mt-8" status={invoice.status}/>}
    </div>
  )
}

const getInvoiceById = (id:string) =>{
    const invoice = data.find((inv:Invoice) => inv.id === id)
    if(invoice) return invoice
    return null
}

export default InvoiceDetails