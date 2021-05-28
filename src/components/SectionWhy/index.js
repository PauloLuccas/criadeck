import React from 'react';
import './styles.css';

import imgWhy from '../../assets/img/img_why.png';
import imgWhyMobile from '../../assets/img/img-why-mobile.png';

function SectionWhy() {
  return (
      <section className="s-why">
        <div className="container">
          <div className="text">
            <img src={imgWhyMobile} alt="Imagem why mobile" className="whyMobile"/>
            <h1>Por que<br /> a Criadeck®?</h1>
            <p>Somos especialistas e especializados em pisos portáteis <br /> para aplicações temporárias em eventos.</p>
            <br className="q-linha" />
            <p>
                Estamos desde 2010 criando, desenvolvendo e aprimorando nossas <br /> próprias tecnologias em design e higienização. A inovação está <br />
                em nosso DNA, somos os únicos a personalizar pisos plásticos (definição<br /> de 1600 pixels por m2), com rampas seguindo as normal de acessibilidade <br />
                para cadeirante (ABNT NBR9050) e com módulos de passsa cabos.
            </p>
            <br className="q-linha" />
            <p>Os detalhes são muito importantes para nós, por isso queremos levar<br /> o melhor acabamento para o seu evento.</p>
          
            <input type="submit" value="Sobre nós" />
          </div>
          <div className="img-why">
            <img src={imgWhy} alt="Imagem why" />
        </div>
        </div>
      </section>
  );
}

export default SectionWhy;