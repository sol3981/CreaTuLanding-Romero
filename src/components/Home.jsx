import { Link } from "react-router-dom";
import { ItemListConteiner } from "./ItemListConteiner";
import { useState, useEffect } from "react";

export function Home() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Array de imágenes del carrusel
  const carouselImages = [
    {
      src: "https://i.pinimg.com/736x/a8/e0/02/a8e002e02f77d722d6874c9d0d0c015b.jpg",
      alt: "Accesorios Isla Clara - Imagen 1"
    },
    {
      src: "https://i.pinimg.com/736x/94/e1/eb/94e1ebda81301977220e52e487e6868d.jpg",
      alt: "Accesorios Isla Clara - Imagen 2"
    },
    {
      src: "https://i.pinimg.com/736x/8f/71/73/8f71735120af21ff5b0817058793dfa5.jpg",
      alt: "Accesorios Isla Clara - Imagen 3"
    }
  ];

  // Precargar imágenes para mejor performance
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = carouselImages.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = image.src;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error cargando imágenes:', error);
        setImagesLoaded(true); // Mostrar de todos modos
      }
    };

    preloadImages();
  }, []);

  return (
    <div className="carousel">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        {/* Indicadores */}
        <div className="carousel-indicators">
          {carouselImages.map((_, index) => (
            <button 
              key={index}
              type="button" 
              data-bs-target="#carouselExampleIndicators" 
              data-bs-slide-to={index} 
              className={index === 0 ? "active" : ""} 
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slides del carrusel */}
        <div className="carousel-inner carousel-home">
          {carouselImages.map((image, index) => (
            <div 
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img 
                src={image.src}
                className="d-block w-100 carousel-home" 
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                onError={(e) => {
                  console.error('Error cargando imagen:', image.src);
                  // Imagen de respaldo opcional
                  e.target.src = 'https://via.placeholder.com/800x400/cccccc/666666?text=Imagen+no+disponible';
                }}
              />
              {!imagesLoaded && (
                <div className="carousel-loading">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Controles de navegación */}
        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#carouselExampleIndicators" 
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#carouselExampleIndicators" 
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Contenido adicional */}
      <div>
        <ItemListConteiner />
      </div>
    </div>
  );
}
