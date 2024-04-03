import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
// Modulos
// Definen objetos, funciones, clases, constante, enumerados etc...
const Header = ()=>{
    const [showMenu, setShowMenu] = useState(false);
    // JSX  --> Invento de Facebook de definir Pseudo HTML en archivos de Javascript
    return (
        <header>
            <h1>Title</h1>
            <nav className={(showMenu) ? '' : 'hide'}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pokecard">PokeCard</Link></li>
                </ul>
            </nav>
            <section className="menuHamburger" onClick={()=>{setShowMenu(!showMenu)}}>
                <div></div>
                <div></div>
                <div></div>
            </section>
        </header>
    );
}


export default Header;
