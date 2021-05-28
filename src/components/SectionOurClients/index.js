import React from 'react';
import './styles.css';

import logoAmbev from '../../assets/img/ambev.png';
import logoHyundai from '../../assets/img/hyundai.png';
import logoSebrae from '../../assets/img/sebrae.png';
import logoBrahma from '../../assets/img/brahma.png';
import logoCasaBh from '../../assets/img/casas_bahia.png';
import logoPorsche from '../../assets/img/porsche.png';
import logoT4f from '../../assets/img/t4f.png';
import logoBradesco from '../../assets/img/bradesco.png';
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
                        <div className="c7">
                            <img src={logoBradesco} alt="Logos clientes" />
                        </div>
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


                    <div className="c-mobile">
                        <div className="l1">
                            <div className="c1">
                                <img src={logoAmbev} alt="logoAmbev" />
                            </div>
                            <div className="c2">
                                <img src={logoStockCar} alt="logoStockCar" />
                            </div>
                        </div>
                        <div className="l2">
                            <div className="c1">
                                <img src={logoBrahma} alt="logoBrahma" />
                            </div>
                            <div className="c2">
                                <img src={logoGlobo} alt="logoGlobo" />
                            </div>
                            <div className="c3">
                                <img src={logoBFerraz} alt="logoBFerraz" />
                            </div>
                        </div>
                        <div className="l3">
                            <div className="c1">
                                <img src={logoCasaBh} alt="logoCasaBh" />
                            </div>
                            <div className="c2">
                                <img src={logoFeeling} alt="logoFeeling" />
                            </div>
                        </div>
                        <div className="l4">
                            <div className="c1">
                                <img src={logoPorsche} alt="logoPorsche" />
                            </div>
                        </div>
                        <div className="l5">
                            <div className="c1">
                                <img src={logoHyundai} alt="logoHyundai" />
                            </div>
                            <div className="c2">
                                <img src={logoBradesco} alt="logoBradesco" />
                            </div>
                            <div className="c3">
                                <img src={logoSesc} alt="logoSesc" />
                            </div>
                        </div>
                        <div className="l6">
                            <div className="c1">
                                <img src={logoSebrae} alt="logoSebrae" />
                            </div>
                            <div className="c2">
                                <img src={logoNubank} alt="logoNubank" />
                            </div>
                            <div className="c3">
                                <img src={logoT4f} alt="logoT4f" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionOurClients;