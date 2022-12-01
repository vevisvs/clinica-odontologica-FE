import React from 'react'
import OdontologoList from '../components/odontologo/OdontologoList'

const Home = () => {
  return (
    <>
      <h2 className='text-4xl font bold uppercase'>Reserva de turnos de consultorio odontológico</h2>
      <OdontologoList />
    </>
  )
}

export default Home