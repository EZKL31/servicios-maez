
import './App.css';
import  {Header } from './components/common'
import servicio from './imagenes/soldadura.jpg';
import {Footer} from './components/common'
import aboutus from  './imagenes/maezmain.jpeg';

function App() {

  
  return (
    <html lang="en">
      <head>
        <title>Servicios Maez</title>
      </head>
      <body>
       
       
        <div id="root">
         < Header/>
         
         <div class="inicio">
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
          </div>
            
          


  



  <div class="cnt">
    <div class="card">

      <div class="card__info">
        <h1 class="card__info__title">Quienes <span>somos?</span> </h1>
        <p class="aboutus_p" >Somos una empresa familiar, dispuestos a hacer de todo para que sus sueños de construcción o remodelación se hagan realidad.</p>

        <div class="card__metrics">
          <ul class="card__metrics__list">
            <li class="list__items">
              <p class="aboutus_p">Servicio</p>
              <small>brindamos servicios personalisados</small>
            </li>
            <li class="list__items">
              <p class="aboutus_p" >Calidad</p>
              <small>logramos los mejores resultados</small>
            </li>
            <li class="list__items">
            
              <p class="aboutus_p">Seguridad</p>
              <small>la mayor seguridad a nuestros clientes</small>
            </li>
          </ul>
        </div>

      </div>

      <div class="card__img">
        <div class="card-opacity"></div>
        <img class="quienes_somos_img" src={aboutus}></img>
      </div>

    </div>

  </div>





  <div class="contactanos">
    <div class="formulario">
        <div class="titulo">
           <h1>¡¿Que esperas para contactarnos?!</h1>
           <p>Brindamos servicios multiples es Panama</p>
        </div>
        <div class="campos">
                <form method='POST'>
                <div class="form-group">
                  <p class="group-title">Nombre del contacto</p>
                  <div class="form-inputs-dobles" >
                  <div class="input-doble">
                  <input type="text" class="form-control" name='nombre' id="nombre"/>
                  <br></br>
                  <label for="nombre">Nombre</label>
                  </div>
                  <div class="input-doble">
                  <input type="text" class="form-control" name='apellido' id="nombre"/><br></br>
                  <label for="apellido">Apellido</label>
                  </div>
                 </div>
                </div>
                <div class="form-group">
                <p class="group-title">Numero de telefono</p>
                  <div class="form-inputs">
                  <input type="tel" class="form-control" name='telefono' id="telefono" />
                   <br></br>
                  <label for="numero">introduce tu numero telefonico</label>
                  </div>
                </div>
                <div class="form-group">
                <p class="group-title">Correo</p>
                <div class="form-inputs">
                <input type="email" class="form-control" name='email' id="email" /><br></br>
                  <label for="email">ejemplo@ejemplo.com</label>
                  
                  </div>
                </div>
                <div class="form-group">
                <p class="group-title">Mensaje </p>
                <div class="form-input-text">
                  <label for="exampleTextarea">Dejanos un mensaje para que podamos ayudarle!</label>
                  <br></br>
                  <textarea class="form-control" name='mensaje' id="mensaje" rows="3"></textarea>
                </div>
                </div>
                <div class="btn-enviar">
                <button class="btn-primary" type="submit">Enviar</button>
                </div>
              </form>
   
        </div>

    </div>


  </div>








          
        <Footer/>
       </div>
      </body>
    </html>
  );
}

export default App;
