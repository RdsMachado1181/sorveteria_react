import React from "react";

//importando as outras partes do site 
import Rodape from "../../Rodape/Rodape";
import Topo from '../../Topo/Topo';
import Sabores from "../Sabores/Sabores";
import Banner from "../banner/Banner";
import Eventos from "../eventos/eventos";
import Sobre from "../Sobre/Sobre";
 

const Home = () => (
    <div>
      
      <Topo/>
      <Banner/>
      <Sabores/> 
      <Eventos/> 
      <Sobre/>    
       <Rodape/>
     
    </div>
  );
  
  export default Home;