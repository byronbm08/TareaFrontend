import React, { useState } from 'react';
import useBusqueda from '../hooks/useBusqueda';


function Busqueda() {

  const misProductos = [
    { nombre: "iPhone 14 Pro Max", fecha: "2024-02-01", valor: 999, iva: 0.12, totalPagar: 1118.88 },
    { nombre: "Samsung Galaxy S23 Ultra", fecha: "2024-02-02", valor: 1199, iva: 0.12, totalPagar: 1342.88 },
    { nombre: "Xiaomi 13 Pro", fecha: "2024-02-03", valor: 699, iva: 0.12, totalPagar: 782.88 },
  ];

  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const resultadosBusqueda = useBusqueda(misProductos, terminoBusqueda);

  const handleSearchChange = (event) => {
    setTerminoBusqueda(event.target.value);
  };


  return (
    <div className='productos p-3'>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-12'>
          <h1>Lista de Productos</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-12'>
          <div className='divBuscar mb-3'>
            <input type="text" className='form-control me-2' onChange={handleSearchChange} value={terminoBusqueda} />

          </div>
        </div>
      </div>
      <div className='row text-start'>
        <div className='col-sm-12 col-md-12 col-12'>
          <table className='table table-hover table-bordered'>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Fecha</th>
                <th>Valor</th>
                <th>IVA</th>
                <th>Total a Pagar</th>
              </tr>
            </thead>
            <tbody>
              {resultadosBusqueda.map((producto, index) => (
                <tr key={index}>
                  <td>{producto.nombre}</td>
                  <td>{producto.fecha}</td>
                  <td>{`$${producto.valor}`}</td>
                  <td>{`${producto.iva * 100}%`}</td>
                  <td>{`$${producto.totalPagar}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
}

export default Busqueda;
