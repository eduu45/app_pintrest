import React from "react";
import '../Styles/StylesNav.css'

const Nav = () =>{
    return(
        <nav className="navbar">
            <div className="titulo">
                <img src="/Images/logopinterest.png" alt="" className="logo"/>
            </div>

            <ul className="list">
                <li><a href="">Inicio</a></li>
                <li><a href="">Crear</a></li>
            </ul>
        </nav>
    );
};
export default Nav;