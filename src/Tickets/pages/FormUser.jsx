
import { useState } from 'react';
import TicketsTable from '../components/TicketsTable'
import PaymentForm from '../components/form/PaymentForm'
const tickets = [
    {
        id: 1,
        descripcion : "Voleta general",
        precio : 15000,
        cantidad : 0,
        fecha :""
    },
    {
        id: 2,
        descripcion : "Voleta Preferencial",
        precio : 60000,
        cantidad : 0,
        fecha :""
    }

]



const FormUser = () => {
 
  return (
    <>
      <PaymentForm />
    </>
  )
}

export default FormUser
