
import './App.css';
import  {Header } from './components/common'
import servicio from './imagenes/soldadura.jpg';
import icon from './imagenes/confiar.png';



function App() {

  
  return (
    <html lang="en">
      <head>
        <title>Servicios Maez</title>
      </head>
      <body>
       
       
        <div id="root">
         < Header/>
          <div class="banner">
            <div class="capa">
              <div class="contenido">
                <h1>Estamos dedicados a brindar servicios
                de confianza para residancias y comercios.</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing<br></br> 
                elit. Numquam, fugit. Sit architecto modi exercitationem 
                omnis beatae similique nobis? Veritatis fugiat qui odio</p>
                <center><a class="button" href='#'>Contactanos!</a></center>
                </div>
            </div>
          </div>
          <section class="our-services">
            <h2 class="services-tittle">Nuestros <u>Servicios</u></h2>
            <div class="servcontainer">
              <div class="servicios">
                 <div class="content">
                   <img class="imgservicio" src={servicio} ></img>
                   <h3>servicio</h3> <p class="servtext"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, assumenda.</p>
                </div>
              </div>
              <div class="servicios"> 
                <div class="content">
                  <img class="imgservicio" src={servicio}></img>
                  <h3>servicio</h3> 
                  <p class="servtext"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, assumenda.</p> 
                </div>
              </div>
              <div class="servicios">
                 <div class="content">
                  <img class="imgservicio" src={servicio} ></img>
                  <h3>servicio</h3> 
                  <p class="servtext"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, assumenda.</p>
                  </div>
              </div>
              <div class="servicios">
                <div class="content"> 
                  <img class="imgservicio" src={servicio} ></img>
                  <h3>servicio</h3>
                  <p class="servtext"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, assumenda.</p>
                </div>
              </div>
              <div class="servicios">
                <div class="content">
                  <img class="imgservicio" src={servicio} ></img>
                  <h3>servicio</h3>
                  <p class="servtext"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, assumenda.</p>
                </div>
              </div>
              <div class="servicios">
                <div class="content"> 
                  <img class="imgservicio" src={servicio} ></img>
                  <h3>servicio</h3> 
                  <p class="servtext"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, assumenda.</p>
                </div>
              </div>
            </div>
          </section>
        
          
          <footer>
          <div class="footer-primerafila">
              <div class="footer-cuadro-icono">
                <div class="footer-icono">
                <img src={icon}></img>
                </div>
                <div class="footer-cuadro-texto">
                  <div class="footer-titulo">
                    <h5>asesoria</h5>
                  </div>
                  <div class="footer-texto">
                    <p>brindamos asesoria profecional</p>
                  </div>
                </div>
              </div>
              <div class="footer-cuadro-icono">
                <div class="footer-icono">
                    <img src={icon}></img>
                </div>
                <div class="footer-cuadro-texto">
                  <div class="footer-titulo">
                    <h5>asesoria</h5>
                  </div>
                  <div class="footer-texto">
                    <p>brindamos asesoria profecional</p>
                  </div>
                </div>
              </div>
              <div class="footer-cuadro-icono">
                <div class="footer-icono">
                <img src={icon}></img>
                </div>
                <div class="footer-cuadro-texto">
                  <div class="footer-titulo">
                    <h5>asesoria</h5>
                  </div>
                  <div class="footer-texto">
                    <p>brindamos asesoria profecional</p>
                  </div>
                </div>
              </div>
              <div class="footer-cuadro-icono">
                <div class="footer-icono">
                <img src={icon}></img>
                </div>
                <div class="footer-cuadro-texto">
                  <div class="footer-titulo">
                    <h5>asesoria</h5>
                  </div>
                  <div class="footer-texto">
                    <p>brindamos asesoria profecional</p>
                  </div>
                </div>
              </div>
          </div>

          <div class="footer-segundafila">
              <div class="segundafila-cuadro">
                <div class="segundafila-titulo">
                  <h5>asesoria</h5>
                </div>
                <div class="segundafila-texto">
                <p>brindamos asesoria profecional</p>
                </div>
              </div>
              <div class="segundafila-cuadro">
                <div class="segundafila-titulo">
                  <h5>asesoria</h5>
                </div>
                <div class="segundafila-texto">
                <p>brindamos asesoria profecional</p>
                </div>
              </div>
              <div class="segundafila-cuadro">
                <div class="segundafila-titulo">
                <h5>asesoria</h5>
                </div>
                <div class="segundafila-texto">
                <p>brindamos asesoria profecional</p>
                </div>  
              </div>
              <div class="segundafila-cuadro">
                <div class="footer-contacto">
                  <div class="icono-footer-contacto">
                  
                  </div>
                  <div class="texto-footer-contacto">
                  <p>brindamos asesoria profecional</p>
                  </div>
                </div>
                <div class="footer-contacto">
                  <div class="icono-footer-contacto">
                  
                  </div>
                  <div class="texto-footer-contacto">
                  <p>brindamos asesoria profecional</p>
                  </div>
                </div>
                <div class="footer-contacto">
                  <div class="icono-footer-contacto">
                  
                  </div>
                  <div class="texto-footer-contacto">
                  <p>brindamos asesoria profecional</p>
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
              <img src={icon}></img>
              <img src={icon}></img>
              <img src={icon}></img>
              </div>
              
          </div>   
        </footer>












        </div>





        
      </body>
    </html>
  );
}

export default App;
