import React from "react";
import Foto01 from '../assets/assets/logo.png';

// import do arquivo css
import "../Topo/Topo.css";

//importar a pagina Nossos Sabores para o link
import { Link } from "react-router-dom";


const Topo = () => (
    <header className="Topo">
      <div className="secao-topo">
      <img src = {  Foto01 }></img>

      <nav>
      <Link className="link-topo" to="/" >Home</Link>
      <Link className="link-topo" to="/sabores" >Sabores</Link>
      <Link className="link-topo" to="/Paginasobre" >Sobre</Link>
      </nav>

      </div>
    </header>
  );
  
  export default Topo;