
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
function Navigator() {
    return (
      <>
        <nav className="nav" id="nav">
          <Link to="/"><img src={logo} className="logo" alt="logo"/></Link>
          <input type="checkbox" id="hiddenCheck"/>
          <label for="hiddenCheck" className="hiddenCheck">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </label>
          <ul className="nav_ul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Catalogo">Catalogo</Link></li>
            <li><Link to="/Servicios">Servicios</Link></li>
            <li><Link to="/Contacto">Contacto</Link></li>
          </ul>
        </nav> 
      </>
    );
}
  
export default Navigator;
  