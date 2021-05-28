import React from 'react';
import './styles.css';

import point1 from '../../assets/img/point1.png';
import point2 from '../../assets/img/point2.png';
import point3 from '../../assets/img/point3.png';
import point4 from '../../assets/img/point4.png';
import imgBanner from '../../assets/img/img-banner.png';
import pointMobile1 from '../../assets/img/point-mobile1.png';
import pointMobile2 from '../../assets/img/point-mobile2.png';
import pointMobile3 from '../../assets/img/point-mobile3.png';
import pointMobile4 from '../../assets/img/point-mobile4.png';


function SectionBanner() {
  return (
    <section className="s-banner">
      <div className="container">
        <img src={point1} alt="Icon Point" className="point1" />
        <img src={point2} alt="Icon Point" className="point2" />
        <img src={point3} alt="Icon Point" className="point3" />
        <img src={point4} alt="Icon Point" className="point4" />

        <div className="point-mobile">
            <img src={pointMobile1} alt="Icon Point" className="point-mobile1" />
            <img src={pointMobile2} alt="Icon Point" className="point-mobile2" />
            <img src={pointMobile3} alt="Icon Point" className="point-mobile3" />
            <img src={pointMobile4} alt="Icon Point" className="point-mobile4" />
        </div>
      
        <div className="text">
            <p className="p-text">Aluguel de pisos plásticos</p>
            <h1>Somos a <span>base<br className="br1"/></span><br className="br2" /><span> do entretenimento.</span></h1>
            <p className="p-text2">Desenvolvemos, fabricamos e alugamos<br className="br1"/> soluções <br className="br2" /> sustentáveis em pisos pláticos<br className="br1" /> modulares para eventos.</p>

            <input type="submit" value="Faça um orçamento"/>
        </div>

        <div className="img-banner">
            <img src={imgBanner} alt="Imagem do banner" />
        </div>
      </div>
    </section>
  );
}

export default SectionBanner;