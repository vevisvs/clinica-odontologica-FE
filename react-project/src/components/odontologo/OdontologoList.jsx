import React from 'react'
import { useState, useEffect } from 'react'
import api from '../../api/apiOdontologo'
import axios from 'axios'
import Odontologo from './Odontologo'

const OdontologoList = () => {

    //crear un estado para manejar el estado interno del objeto:
   const [odontologo, setOdontologo] = useState({}) //colocar un objeto vacío dentro???

    //realizar la búsqueda asíncrona de los datos cuando se monte el componente:
    useEffect(() => {
        axios.get(api.RUTA_API) //endpoint que lista a todos los odontologos
        .then(response => setOdontologo(response.data))
    }, [])

    return (
        <>
            <h1 className='text-center text-2xl my-4'>Listado de odontologos</h1>
            <div>
                <h3>{<Odontologo />}</h3>
            </div>
            <button className='my-4 bg-transparent hover:bg-teal-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>Agregar</button>
            <button className='my-4 bg-transparent hover:bg-teal-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>Editar</button>
            <button className='my-4 bg-transparent hover:bg-teal-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>Eliminar</button>
        </>
    )
}

export default OdontologoList