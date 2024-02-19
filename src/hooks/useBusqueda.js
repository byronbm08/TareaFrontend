import { useState, useEffect } from 'react';

const useBusqueda = (productos, terminoBusqueda) => {
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

  useEffect(() => {
    if (terminoBusqueda) {
      const filtrar = productos.filter((producto) => 
      producto.toLowerCase().includes(terminoBusqueda.toLowerCase())
      );
      setResultadosBusqueda(filtrar);
    } else {
      // Si no hay terminoBusqueda, opcionalmente podrías mostrar todos los productos o ninguno
      setResultadosBusqueda(productos);
    }
  }, [terminoBusqueda, productos]);

  return resultadosBusqueda;
};

export default useBusqueda;