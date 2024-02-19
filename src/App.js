
import './App.css';
import { Routes, Route } from 'react-router-dom';
import BIENVENIDOS from './componentes/inicio';
import Paginanoexiste from './componentes/Paginanoexiste';
import './estilos/estilos.css';
import Menu from './componentes/Menu';
import { Footer } from './componentes/Footer';
import ConvenioMarca from './componentes/ConvenioMarca';
import ProductoDetalle from './componentes/ProductoDetalle';
import Contactano from './componentes/Contactano';
import FormProducto from './componentes/FormProducto';
import MiPedido from './componentes/MiPedido';
import Formulario from './componentes/Formulario';


function App() {
  const currentYear = new Date().getFullYear();
  const opcionesMenu = [
    { texto: "Home", ruta: "/" },
    { texto: "Mi cuenta", ruta: "/ingreso" },
    { texto: "Ingreso de productos", ruta: "/ingresoproductos" },
    { texto: "Productos", ruta: "/productos" },
    { texto: "Mis pedidos", ruta: "/mispedidos" },
    { texto: "Marcas", ruta: "/convenios" },
    { texto: "Contactanos", ruta: "/contactanos" },
  ];

const homeDatos = {
  nombre: "TecnoClick",
  quiensomos: "TecnoClick es un emprendimiento online de ventas de tecnología en Quevedo, Ecuador. Nacimos con la pasión de llevar la tecnología más innovadora a nuestros clientes, brindándoles una experiencia de compra cómoda,",
  bienvenida: "En TecnoClick, tu tienda de tecnología en Quevedo, encontrarás todo lo que necesitas para estar a la vanguardia. Desde smartphones y laptops hasta televisores y electrodomésticos, tenemos una amplia selección de productos de las mejores marcas a precios increíbles."
}

const marcasDatos = {
  titulo: "Convenios con Marcas",
  marcas: [
    "Apple",
    "Samsung",
    "Xiaomi",
    "Huawei",
    "Motorola",
    "OnePlus",
    "Realme",
    "Vivo",
    "Oppo",
    "Google",
  ],
}

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Menu opciones={opcionesMenu} />} >
          <Route path='/ingreso' element={<Formulario ></Formulario>} />
          <Route path='/' element={<BIENVENIDOS {...homeDatos}></BIENVENIDOS>} />
          <Route path='/productos' element={<ProductoDetalle> </ProductoDetalle>} />
          <Route path='/mispedidos' element={<MiPedido></MiPedido>} />
          <Route path='/convenios' element={<ConvenioMarca {...marcasDatos}></ConvenioMarca>} />
          <Route path='/ingresoproductos' element={<FormProducto></FormProducto>} />
          <Route path='/contactanos' element={<Contactano></Contactano>} />
          <Route path='*' element={<Paginanoexiste nombre={"Página en Mantenimiento"}></Paginanoexiste>} />
        </Route>
      </Routes>
      <Footer year={currentYear} />
    </div>
  );
}

export default App;
