import React from 'react';
import './styles.css';

import logoAmbev from '../../assets/svg/logo_ambev.svg';
import logoHyundai from '../../assets/svg/logo_hyundai.svg';
import logoSebrae from '../../assets/svg/logo_sebrae.svg';
import logoBrahma from '../../assets/svg/logo_brahma.svg';
import logoCasaBh from '../../assets/svg/logo_casas_bahia.svg';
import logoPorsche from '../../assets/svg/logo_porsche.svg';
import logoT4f from '../../assets/svg/logo_t4f.svg';
import logoBradesco from '../../assets/svg/logo_bradesco.svg';
import logoNubank from '../../assets/svg/logo_nubank.svg';
import logoGlobo from '../../assets/svg/logo_globo.svg';
import logoFeeling from '../../assets/svg/logo_feeling.svg';
import logoStockCar from '../../assets/svg/logo_stock_car.svg';
import logoSesc from '../../assets/svg/logo_sesc.svg';
import logoBFerraz from '../../assets/svg/logo_bferraz.svg';

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