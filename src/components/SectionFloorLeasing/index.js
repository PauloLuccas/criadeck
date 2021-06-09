import React from 'react';
import './styles.css';

import imgFloor from '../../assets/img/locacao-de-pisos-plasticos-para-shows-e-eventos.png';
import imgFloorMobile from '../../assets/svg/locacao-de-pisos-plasticos-para-shows-e-eventos-mobile.svg';
import pointBlue from '../../assets/img/point-blue-floor.png';

function SectionFloorLeasing() {
  return (
    <section className="s-floor">
        <div className="container">
            <div className="text">
                <h1>Locação de <br className="br1"/> pisos<br className="m-br1"/>  plásticos <br className="br2"/> para shows <br className="br3"/> e eventos</h1>
                <p>A ideia não é apenas fazer diferente,<br className="m-br1"/> é evoluir <br className="br1"/> o tempo topo, aprimorando nossos <br className="m-br1"/> pisos <br className="br2"/> e impactando o mercado de eventos com <br className="br3"/> inovação e agilidade para supreender.</p>
                <input type="submit" value="Saiba mais"/>
            </div>

            <img src={imgFloor} alt="Images" />
            <img src={imgFloorMobile} alt="Image Mobile" className="img-floor-mobile"/>
            <img src={pointBlue} alt="Point image" className="point-blue-mobile" />
        </div>
    </section>  
  );
}

export default SectionFloorLeasing;