import React from 'react'
import '../estilos/paginaNoEncontrada.css';
import paginanoencontrada from '../imagenes/paginanoencontrada.png';


const Paginanoexiste = ({nombre}) => {
  return (
    <div className='paginaNoEncontrada'>
      <h1 className='tituloNoEncontrado'>{nombre}</h1>
      <img src={paginanoencontrada} alt='Página no encontrada' className='imagenNoEncontrada'/>
      <p className='textoNoEncontrado'>Lo sentimos, la página que buscas no se encuentra disponible.</p>
    </div>
  )
}
export default Paginanoexiste;