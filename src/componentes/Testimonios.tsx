import React from "react";
import "../estilos/Testimonios.css"
function Testimonios(props){
  
  return(<div className="Contenedor-img">
        <img className="Imagen-testimonios" src={`../../public/${props.imagen}.png`} />
        <div className="contenedor-texto">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">{props.testimonio}</p>
        </div>
    </div>);
} 

export default Testimonios;