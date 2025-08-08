import {Link} from "react-router-dom";
import { ItemListConteiner } from "./ItemListConteiner";


export function Home (producto){
   

  return (
    <div className="carousel">
      <div id="carouselExampleIndicators" className="carousel slide ">
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
         </div>
        <div className="carousel-inner carousel-home">
          <div className="carousel-item active">
            <img src="/src/assets/img/carrusel1.jpg" className="d-block w-100 carousel-home" alt="Imagen Carrusel 1" />
          </div>
          <div className="carousel-item ">
            <img src="/src/assets/img/carrusel2.jpg" className="d-block w-100 carousel-home" alt="Imagen Carrusel 2" />
          </div>
          <div className="carousel-item ">
            <img src="/src/assets/img/carrusel3.jpg" className="d-block w-100 carousel-home" alt="Imagen Carrusel 2" />
          </div>
         </div>
         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
         </button>
         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
         </button>
      </div>

       

        <div>
          <ItemListConteiner></ItemListConteiner>
        </div>

        
    </div>

    )
}
