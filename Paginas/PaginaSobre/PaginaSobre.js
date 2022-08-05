import React from 'react';
 
//importar o arquivo de css sabore.css para estilização 
import '../PaginaSobre/PaginaSobre.css';

//import do arquivo topo 
import Topo from '../../Topo/Topo';
import Rodape from "../../Rodape/Rodape";

 // importe das imagens utilizadas no site
 import foto04 from '../../assets/assets/sobre-image.jpg';
 import foto05 from '../../assets/assets/sorveteria.jpg';

const PaginaSobre = () => (
 <div className="container-PaginaSobre ">
    <Topo/>
      <div className='PaginaSobre'>

 <h1> A Gelateria </h1> 

 </div>

<div className='Pagina-SobreNos'>

<h2>Sobre Nós</h2>

<p>Nós Simplesmente amamos sorvete!</p>

<p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido.
     Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios.
     Estamos operando desde 2009 com os melhores matérias-primas para a produção final do sorvete.
     Vendemos tanto para o varejo como para o atacado. </p>

     <p>Nossos Clientes podem comprar os nossos sorvetes e degustar na nossa loja
         ou levar para sua residêndia e aproveitar junto com sua familia 
         Também vendemos para estabelecimentos e criamos eventos como festa de aniversario
         formaturas e eventos empresariais. Para contratar os nossos serviços
         basta entrar em contato conosco. Iremos proporcionar o melhor 
         atendimento e os melhores produtos para voce fazer a sua festa mais saborosa com 
         o melhor sorvete da cidade.</p>

</div>
<div className='container-Pagin-Sobre'>
<div className ='imgagem-Sobre'>  <img src={  foto04  }></img> </div>
<div className ='imgagem-Sobre' > <img src={  foto05  }></img></div>
</div>
<Rodape/>
</div> 
);

export default PaginaSobre;