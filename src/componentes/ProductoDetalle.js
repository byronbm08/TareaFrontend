import React, { useState } from 'react';
import useBusqueda from '../hooks/useBusqueda';


function Busqueda() {

  const productosTecnologicos = [
    "iPhone 14 Pro Max",
    "Samsung Galaxy S23 Ultra",
    "Xiaomi 13 Pro",
    "Huawei P60 Pro",
    "Motorola Edge 40 Pro",
    "OnePlus 11 Pro",
    "Realme GT 3 Pro",
    "Vivo X90 Pro",
    "Oppo Find X6 Pro",
    "Google Pixel 7 Pro",
    "MacBook Pro 14",
    "Dell XPS 13 Plus",
    "HP Spectre x360 14",
    "Lenovo ThinkPad X1 Carbon",
    "Asus ZenBook 14 OLED",
    "Acer Swift X",
    "Microsoft Surface Laptop Studio",
    "Samsung Galaxy Tab S8 Ultra",
    "iPad Pro 12.9",
    "Sony WH-1000XM5",
  ];
  

  console.log(productosTecnologicos)
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const resultadosBusqueda = useBusqueda(productosTecnologicos, terminoBusqueda);

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
                <th>Productos</th>
              </tr>
            </thead>
            <tbody>
              {resultadosBusqueda.map((resultado, index) => (
                <tr key={index}>
                  <td>{resultado}</td>
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






