import React from 'react';
import './styles.css';

import arrowLeft from '../../assets/img/arrow-left.png';
import arrowRight from '../../assets/img/arrow-right.png';
import card from '../../assets/img/card.png';
import card1 from '../../assets/img/card_1.png';
import card2 from '../../assets/img/card_2.png';
import card3 from '../../assets/img/card_3.png';
import card4 from '../../assets/img/card_4.png';
import card5 from '../../assets/img/card_5.png';
import card6 from '../../assets/img/card_6.png';
import mCard1 from '../../assets/img/protecao-de-gramados.png';
import mCard2 from '../../assets/img/exposicao-de-carros.png';
import mCard3 from '../../assets/img/tendas-e-galpoes.png';
import mCard4 from '../../assets/img/eventos.png';
import mCard5 from '../../assets/img/protecao-de-carpetes.png';
import mCard6 from '../../assets/img/praca-de-alimentacao.png';
import mCard7 from '../../assets/img/stands-e-feiras.png';

import { ReactComponent as SvgDivisor } from '../../assets/svg/divisor.svg';

function SectionApplications() {
  return (
        <section className="s-applications">
            <div className="container">
                <SvgDivisor />
                <div className="text">
                    <h1>Aplicações</h1>
                    <p>4 modelos de piso com diferenciais exclusivos para<br /> atender diversas situações e exigências.</p>
                </div>

                <div className="controllers">
                    <img src={arrowRight} alt="arrowRight" />
                    <img src={arrowLeft} alt="arrowRight" />
                </div>

                <div className="Carousel">
                    <div className="card1">
                        <img src={card} alt="Img" className="dCard1"/>
                        <img src={mCard1} alt="Proteção de Gramados" className="mCard1" />
                    </div>
                    <div className="card2">
                        <img src={card1} alt="Img" className="dCard2"/>
                        <img src={mCard2} alt="Exposição de carros"  className="mCard2"/>
                    </div>
                    <div className="card3">
                        <img src={card2} alt="Img" className="dCard3"/>
                        <img src={mCard3} alt="Tendas e galpões" className="mCard3" />
                    </div>
                    <div className="card4">
                        <img src={card3} alt="Img" className="dCard4"/>
                        <img src={mCard4} alt="eventos" className="mCard4" />
                    </div>
                    <div className="card5">
                        <img src={card4} alt="Img"className="dCard5" />
                        <img src={mCard5} alt="Proteção de carpetes" className="mCard5" />
                    </div>
                    <div className="card6">
                        <img src={card5} alt="Img" className="dCard6"/>
                        <img src={mCard6} alt="Praça de alimentação" className="mCard6" />
                    </div>
                    <div className="card7">
                        <img src={card6} alt="Img" className="dCard7"/>
                        <img src={mCard7} alt="Stands e feiras" className="mCard7" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionApplications;