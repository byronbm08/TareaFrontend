import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from '../imagenes/logoPrincipal.png';

export const Menu = ({ opciones }) => {
  return (
    <header className='p-4 mt-5 bd-navbar'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-dark " data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" className="logo-principal" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {opciones.map((opcion) => (
                <li className="nav-item" key={opcion.texto}>
                  <a className="nav-link text-white" aria-current="page" href={opcion.ruta}>{opcion.texto}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
      <Outlet />
    </header>
  )
}

export default Menu;
