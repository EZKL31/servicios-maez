
import  './Footer.css'
/* footer */
import whatsapp from '../../../imagenes/logotipo-de-instagram.png';
import instagram  from '../../../imagenes/logotipo-de-instagram.png';
import Facebook  from '../../../imagenes/facebookwhite.png';
import personalizado from '../../../imagenes/serviciopersonal.png';
import seguridad from '../../../imagenes/seguridad.png';
import calidad from '../../../imagenes/calidadwhite.png';
import atencion from '../../../imagenes/atencion.png';
function Footer(){

return(

<footer>
          <div class="footer-primerafila">
             
             <div class="primerafila-contenedor">
             
             <div class="columna-footer">
             <div class="footer-cuadro-icono">
                  <div class="footer-icono">
                  <img src={atencion}></img>
                  </div>
                  <div class="footer-cuadro-texto">
                    <div class="footer-titulo">
                      <h5>Atencion </h5>
                    </div>
                    <div class="footer-texto">
                      <p>Atención personalizada a nuestros clientes.</p>
                    </div>
                  </div>
                </div>

                
                <div class="footer-cuadro-icono">
                  <div class="footer-icono">
                  <img src={personalizado}></img>
                  </div>
                  <div class="footer-cuadro-texto">
                    <div class="footer-titulo">
                      <h5>Personalizado:</h5>
                    </div>
                    <div class="footer-texto">
                      <p>Sus intereses son nuestra prioridad</p>
                    </div>
                  </div>
                </div>
                </div>

                <div class="columna-footer">
                <div class="footer-cuadro-icono">
                  <div class="footer-icono">
                      <img src={calidad}></img>
                  </div>
                  <div class="footer-cuadro-texto">
                    <div class="footer-titulo">
                      <h5>Calidad:</h5>
                    </div>
                    <div class="footer-texto">
                      <p>Resultados de calidad y garantía en trabajo.</p>
                    </div>
                  </div>
                </div>
                
                <div class="footer-cuadro-icono" id="ultimo-icono">
                  <div class="footer-icono">
                  <img src={seguridad}></img>
                  </div>
                  <div class="footer-cuadro-texto">
                    <div class="footer-titulo">
                      <h5>Seguridad:</h5>
                    </div>
                    <div class="footer-texto">
                      <p>Seguridad y privacidad en nuestros servicios.</p>
                    </div>
                  </div>
                </div>
              </div>

          </div>
           </div>
          <div class="footer-segundafila">
          
           <div class="segundafila-contenedor"> 
              
              
              
              <div class="segundafila-cuadro">
                <div class="segundafila-titulo">
                  <h5>Remodelacion</h5>
                </div>
                <div class="segundafila-texto">
                <p>Instalaciones generales</p>
                <p>Pintura para interior y exterior</p>
                <p>Puertas y ventanas de vidrio</p>
                </div>
              </div>



              <div class="segundafila-cuadro">
                <div class="segundafila-titulo">
                  <h5>Albañileria</h5>
                </div>
                <div class="segundafila-texto">
                <p>Construccion.</p>
                <p>Anexos, Repellos.</p>
                <p>Pisos.</p>
                </div>
              </div>



              <div class="segundafila-cuadro">
                <div class="segundafila-titulo">
                <h5>Electricos</h5>
                </div>
                <div class="segundafila-texto">
                <p>Tablero Electrico</p>
                <p>Planos electricos</p>
                <p>Instalacion de lamparas</p>
                </div>  
              </div>


              <div class="segundafila-cuadro">
                <div class="segundafila-titulo">
                  <h5>Contacto</h5>
                </div>
                <div class="footer-contacto">
                  <div class="icono-footer-contacto">
                     <p>asdad</p>
                  </div>
                  <div class="texto-footer-contacto">
                  <p>Maez.serviciosmultiples@gmail.com</p>
                  </div>
                </div>
                <div class="footer-contacto">
                  <div class="icono-footer-contacto">
          
                  </div>
                  <div class="texto-footer-contacto">
                  <p>+507 6394-7277</p>
                  </div>
                </div>
                </div> 
              </div>


          </div>
          <div class= "footer-tercerafila">
              <div class="footer-about">
              ©2023 Servicios-Maez |  Sitio creado por Ezequiel Amaya.
              </div>
              <div class="footer-about-espacio">
                  
              </div>
              <div class="footer-redes">
              
              <a href="https://api.whatsapp.com/send?phone=50769592149" target='blank'><img src={Facebook} alt='whatsapp'></img></a>
              <a href="https://www.instagram.com/maezserviciosmultiples/" target='blank'><img src={instagram}></img></a>
              
              </div>
              
          </div>  
          <div class= "stick-n-bot">
                <a> <img src="" alt="" /> </a>
          </div>

        </footer>)
    
}
export default Footer;















