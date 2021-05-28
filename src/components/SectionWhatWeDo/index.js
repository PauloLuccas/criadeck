import React from 'react';
import './styles.css';

import cardLoc from '../../assets/img/locamos.png';
import cardPers from '../../assets/img/personalizamos.png';
import cardVend from '../../assets/img/vendemos.png';

function SectionWhatWeDo() {
  return (
    <section className="s-WeDo">
        <div className="container">
            <div className="text">
                <h1>O que fazemos</h1>
                <p>Fabricamos soluções customizadas em pisos<br /> plásticos portáteis.</p>    
            </div>

            <div className="cards">
                <div className="card1">
                    <img src={cardLoc} alt="Locamos" />
                </div>
                <div className="card2">
                    <img src={cardPers} alt="Personalizamos" />
                </div>
                <div className="card3">
                    <img src={cardVend} alt="Vendemos" />
                </div>
            </div>
        </div>
    </section>
  );
}

export default SectionWhatWeDo;