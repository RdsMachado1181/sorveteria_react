import React from "react";

//importar o arquivo de css sabore.css para estilização 
import '../Nossos_Sabores/NossoSabores.css';

//importa o arquivo topo e rodape para a pagina 
import Topo from '../../Topo/Topo';
import Rodape from "../../Rodape/Rodape";

// import da foto para a pagina 
import fotoOreo from "../../assets/assets/sabor-oreo.jpg";
import fotoPistache from "../../assets/assets/sabor-pistache.png";
import fotoCookies from "../../assets/assets/sabor-cookies-avela.png";
import fotoKiwi from "../../assets/assets/sorvete-kiwi.png";
import fotoMorango from "../../assets/assets/sorvete-morango.png";
import fotoLimao from "../../assets/assets/sorvete-limao.png";


const NossoSabores = () => (
  <div className="Nossos-Sabores">
  <Topo/>
    <div className=" Sabores-sorvete">


<h1>NOSSOS SABORES</h1>
    </div>
    

    <div className=" Sabores-Sorvete">

<div className="container-caixa">

    <div className=" caixa-sabores">
<div id="img"> <img src={fotoOreo} ></img  ></div>
<div id="descrição">
<h3>Sorvete de Oreo</h3>

<p>Delicioso sorvete sabor Oreo. </p>
<p>Uma explosão de sabor </p>
</div>
    </div>

    <div className=" caixa-sabores">
    <div id="img"> <img src={fotoPistache} ></img  ></div>
    <div id="descrição"></div>
<h3>Sorvete Pistache</h3>

<p>Cremoso sorvete sabor pistache com pedacinhos de semente </p>
 
    </div>
  
    <div className=" caixa-sabores">
    <div id="img"> <img src={fotoCookies} ></img  ></div>

    <div id="descrição"> 

<h3>Sorvete Cookies e Avela</h3>

<p> O nosso melhor sorvete. Voce vai adorar o sabor</p>
</div>
    </div>

    <div className=" caixa-sabores">
    
    <div id="img">  <img src={fotoKiwi} ></img  ></div>

    <div id="descrição"> 
<h3>Sorvete de Kiwi</h3>

<p>  Delicioso e refrescante sorvete sabor kiwi rico em vitamina C</p>
</div>
    </div>

    <div className=" caixa-sabores">
    
    <div id="img"> <img src={fotoMorango} ></img >  </div>

    <div id="descrição"> 
<h3>Sorvete de Morango</h3>

<p>  Sorvete de morango gourmet Tradicional e saboroso</p>
</div>
    </div>

    <div className=" caixa-sabores">
    
    <div id="img"> <img src={   fotoLimao } ></img > </div>

    <div id="descrição">
<h3>Sorvete de Limao Siciliano</h3>

<p> O incrivel sorvete gourmet de limao siciliano vai te encantar</p>
</div>
    </div>
    </div>
    </div>


    <Rodape/>
</div> 



  );
  
  export default NossoSabores;