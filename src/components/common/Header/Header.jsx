import React from 'react';
import logo from '../../../imagenes/maez.png'
import  './Header.css'
function Header(){

return(

<section> 
<header class="encabezado">
          <div class="ancho">
            <div class="logo">
                 <a href='#'> <img class="logo" src={logo}></img> </a>
              </div>
              <nav>
                <ul>
                  <li><a href='#'>Inicio</a></li>
                  <li><a href='#'>Nosotros</a></li>
                  <li><a href='#'>Servicios</a></li>
                  <li><a href='#'>Contacto</a></li>
                </ul>
              </nav>
          </div>
        </header>
</section>)
    
}
export default Header;