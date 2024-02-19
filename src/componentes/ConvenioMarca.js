import React from 'react'

export const marcas = ({ titulo, marcas }) => {
  return (
    <div className='row'>
      <div className='col-12'>
        <h2>{titulo}</h2>
        <div className="grillaMarcas">
        {marcas.map((marca, index) => (
            <div key={index} className="marca">
              {marca}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default marcas;
