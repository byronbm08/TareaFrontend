export const Footer = ({ year }) => {
  return (
    <div>
      <footer className="footer-estilo pt-4 md-5 pt-md-5 border-top">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md">
              <h5>TecnoClick</h5>
              <small className="d-block mb-3 text-muted">&copy; {year} Tecnología y Accesorios</small>
              <small className="d-block mb-3 text-muted">Envíos a todo el país - Consulta nuestras políticas de garantía y devolución</small>
            </div>
            <div className="col-6 col-md">
              <h5>Secciones</h5>
              <ul className="list-unstyled text-small">
                <li><a className="link-secondary" href="/">Inicio</a></li>
                <li><a className="link-secondary" href="/productos">Productos</a></li>
                <li><a className="link-secondary" href="/mispedidos">Mis pedidos</a></li>
                <li><a className="link-secondary" href="/contactanos">Contacto</a></li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Redes Sociales</h5>
              <ul className="list-unstyled text-small">
                <li><a className="link-secondary" href="https://www.facebook.com/TecnoClick">Facebook</a></li>
                <li><a className="link-secondary" href="https://www.instagram.com/TecnoClick">Instagram</a></li>
                <li><a className="link-secondary" href="https://www.twitter.com/TecnoClick">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


