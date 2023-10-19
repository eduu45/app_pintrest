import React from "react";
import '/src/app/Styles/StylesHead.css';
const Head = () =>{

    return(
        <div className="bar-container">
               <ul className="list">
                   <li><a href="/">Inicio</a></li>
                   <li><a href="/about">Crear</a></li>
               </ul>

            <div className="perfil-container">
                <img className="foto-perfil" src="/images/fotoperfil.png" alt=""/>

            </div>
        </div>
    )
}

export default Head;