import React from 'react';
import './styles.css';

import logoAmbev from '../../assets/img/ambev.png';
import logoHyundai from '../../assets/img/hyundai.png';
import logoSebrae from '../../assets/img/sebrae.png';
import logoBrahma from '../../assets/img/brahma.png';
import logoCasaBh from '../../assets/img/casas_bahia.png';
import logoPorsche from '../../assets/img/porsche.png';
import logoT4f from '../../assets/img/t4f.png';
import logoNubank from '../../assets/img/nubank.png';
import logoGlobo from '../../assets/img/globo.png';
import logoFeeling from '../../assets/img/feeling.png';
import logoStockCar from '../../assets/img/stock_car.png';
import logoSesc from '../../assets/img/sesc.png';
import logoBFerraz from '../../assets/img/bferraz.png';

function SectionOurClients() {
  return (
        <section className="s-ourClients">
            <div className="container">
                <div className="text">
                    <h1>Nossos Clientes</h1>
                </div>

                <div className="clientes">
                    <div className="f1">
                        <div className="c1">
                            <img src={logoAmbev} alt="Logos clientes" />
                        </div>
                        <div className="c2">
                            <img src={logoHyundai} alt="Logos clientes" />
                        </div>
                        <div className="c3">
                            <img src={logoSebrae} alt="Logos clientes" />
                        </div>
                        <div className="c4">
                            <img src={logoBrahma} alt="Logos clientes" />
                        </div>
                        <div className="c5">
                            <img src={logoCasaBh} alt="Logos clientes" />
                        </div>
                        <div className="c6">
                            <img src={logoPorsche} alt="Logos clientes" />
                        </div>
                        <div className="c7">
                            <img src={logoT4f} alt="Logos clientes" />
                        </div>
                    </div>

                    <div className="f2">
                        <div className="c1">
                            <img src={logoNubank} alt="Logos clientes" />
                        </div>
                        <div className="c2">
                            <img src={logoGlobo} alt="Logos clientes" />
                        </div>
                        <div className="c3">
                            <img src={logoFeeling} alt="Logos clientes" />
                        </div>
                        <div className="c4">
                            <img src={logoStockCar} alt="Logos clientes" />
                        </div>
                        <div className="c5">
                            <img src={logoSesc} alt="Logos clientes" />
                        </div>
                        <div className="c6">
                            <img src={logoBFerraz} alt="Logos clientes" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionOurClients;