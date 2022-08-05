import React from "react";
// importar o arquivo css para estilização
import '../Rodape/Rodape.css';
// importar a foto de assets
import foto02 from '../assets/assets/logo.png';


const Rodape = () => (
    <footer className="Rodape">
 <div className="Secao-Rodape">
  <div className="Secao-dupla-Rodape">
   <div id="img01">
    <img src= {foto02}></img>
    </div>


  
<div className="caixa">
  <h3>ENDEREÇO</h3>
  <p>AV Bernardino de Campos, 98 <br/>
    SãoPaulo, SP 12345-789 
  </p>
</div>

<div className="caixa">
  <h3>CONTATO</h3>
  <p> 
    Info@meusite.Campos<br/>
    Tel:(11)3456-7890
     
  </p>
</div>

<div className="caixa">
  <h3>HORARIO</h3>
  <p>ABERTO TODOS OS DIAS<br/>
    10:00 às 20:00 
  </p>
</div>
</div>
 
<p>Sorveteria. Orgulhosamentte desenvolvdo por Rodrigo Machado</p>
</div>
     
  
    </footer>
);
  
  export default Rodape;