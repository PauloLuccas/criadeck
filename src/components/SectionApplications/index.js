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
                        <img src={card} alt="Img" />
                    </div>
                    <div className="card2">
                        <img src={card1} alt="Img" />
                    </div>
                    <div className="card3">
                        <img src={card2} alt="Img" />
                    </div>
                    <div className="card4">
                        <img src={card3} alt="Img" />
                    </div>
                    <div className="card5">
                        <img src={card4} alt="Img" />
                    </div>
                    <div className="card6">
                        <img src={card5} alt="Img" />
                    </div>
                    <div className="card7">
                        <img src={card6} alt="Img" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionApplications;