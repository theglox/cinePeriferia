
import TicketsTable from '../components/TicketsTable'
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



const Tickets = () => {
  return (
    <>
      <TicketsTable tickets = {tickets}/>
    </>
  )
}

export default Tickets
