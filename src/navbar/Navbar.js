import { Link } from "react-router-dom";

export default function NavBar() {

    return (

        <nav className="navbar-principal">

            <ul className="navbar-ul">
                <li className="navbar-li"> 
                    <Link to="/home" className="navbar-link">Home</Link>
                </li>
                <li className="navbar-li">
                    <Link to="/properties" className="navbar-link">Propiedades</Link>
                </li>
                <li className="navbar-li">
                    <Link to="/about" className="navbar-link">Sobre nosostros</Link>
                </li>
                <li className="navbar-li">
                    <Link to="/contact" className="navbar-link">Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}

/*
    Pàgines:
    - home
    - houses
    - about
    - contact

*/ 