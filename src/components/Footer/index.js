import React from 'react';
import './styles.css';

import pattern from '../../assets/img/pattern.png';
import patternMobile from '../../assets/img/pattern-footer-mobile.png';

import { ReactComponent as SvgLogo } from '../../assets/svg/logo.svg';
import { ReactComponent as SvgFacebook } from '../../assets/svg/facebook.svg';
import { ReactComponent as SvgLinkedin } from '../../assets/svg/linkedin.svg';
import { ReactComponent as SvgInstagram } from '../../assets/svg/instagram.svg';
import { ReactComponent as SvgDivisor } from '../../assets/svg/divisor_1.svg';
import { ReactComponent as SvgDivisorMobile } from '../../assets/svg/line_1.svg';
import { ReactComponent as SvgPhone } from '../../assets/svg/phone.svg';
import { ReactComponent as SvgSmartphone } from '../../assets/svg/smartphone.svg';
import { ReactComponent as SvgMail } from '../../assets/svg/mail.svg';
import { ReactComponent as SvgLocalizacao } from '../../assets/svg/localizacao.svg';

function Footer() {
  return (
        <footer className="s-footer">
            <div className="container">
                <div className="f-top">
                    <div className="c1">
                        <SvgLogo className="logo"/>
                        <img src={patternMobile} alt="Pattern mobile" className="patternMobile" />

                        <p className="p-mobile">Locação de pisos pláticos<br /> para shows e eventos.</p>
                        <div className="socials">
                            <a href="#">
                                <SvgFacebook />
                            </a>
                            <a href="#">
                                <SvgLinkedin />
                            </a>
                            <a href="#">
                                <SvgInstagram />
                            </a>
                        </div>
                    </div>
                    <div className="m-contatos">
                            <nav>
                                <ul>
                                    <li>
                                        <SvgPhone className="m-svg" />
                                        <a href="#">+55 11 3777 7464</a>
                                    </li>
                                    <li>
                                        <SvgSmartphone className="m-svg" />
                                        <a href="#">+55 11 99951 6441</a>
                                    </li>
                                    <li>
                                        <SvgMail className="m-svg" />
                                        <a href="#">contato@criadeck.com</a>
                                    </li>
                                    <li className="l-mobile">
                                        <SvgLocalizacao className="m-svg" />
                                        <a href="#" className="p-a">Endereço</a>
                                        <br />
                                        <span>Rua Recanto Verde, 217 </span>
                                        <br />
                                        <span>Chácara Recanto Verde, Cotia/SP</span>
                                        <br />
                                        <span>CEP.06701-257</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    <div className="divisor">
                        <img src={pattern} alt="divisor" />
                        <SvgDivisorMobile />
                    </div>
                    <div className="menu-footer">
                        <div className="n-c1">
                            <nav>
                                <ul>
                                    <li className="first">Nossos pisos</li>
                                    <li><a href="#">Arena</a></li>
                                    <li><a href="#">Mega</a></li>
                                    <li><a href="#">Pixel</a></li>
                                    <li><a href="#">Ultra</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="n-c2">
                            <nav>
                                <ul>
                                    <li className="first">O que fazemo</li>
                                    <li><a href="#">Alugamos</a></li>
                                    <li><a href="#">Personalizamos</a></li>
                                    <li><a href="#">Vendemos</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="n-c3">
                            <nav>
                                <ul>
                                    <li className="first">Sobre nós</li>
                                    <li><a href="#">Links Grades</a></li>
                                    <li><a href="#">Cria. Clothing</a></li>
                                    <li><a href="#">Dúvidas Frequentes</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="n-c4">
                            <nav>
                                <ul>
                                    <li className="first">Fotos</li>
                                    <li><a href="#">Aplicações</a></li>
                                    <li><a href="#">Dicas Especiais</a></li>
                                    <li><a href="#">Contato</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="n-c5">
                            <nav>
                                <ul>
                                    <li className="first">Contatos</li>
                                    <li>
                                        <SvgPhone/>
                                        <a href="#">+55 11 3777 7464</a>
                                    </li>
                                    <li>
                                        <SvgSmartphone />
                                        <a href="#">+55 11 99951 6441</a>
                                    </li>
                                    <li>
                                        <SvgMail />
                                        <a href="#">contato@criadeck.com</a>
                                    </li>
                                    <li className="l-mobile">
                                        <SvgLocalizacao />
                                        <span>Rua Recanto Verde, 217 <br /> Chácara Recanto Verde, Cotia/SP<br />CEP.06701-257</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="m-socials">
                    <div>
                        <p  className="text-mobile">Conecte-se:</p>
                    </div>

                    <a href="#">
                        <SvgFacebook />
                    </a>
                    <a href="#">
                        <SvgLinkedin />
                    </a>
                    <a href="#">
                        <SvgInstagram />
                    </a>
                </div>
                <SvgDivisor className="divisor"/>
                <SvgDivisorMobile className="divisor2"/>
                <div className="f-bottom">
                    <p>Criadeck®Todos os direitos reservados</p>
                    <p className="second">Rua Recanto Verde, 217 Chácara Recanto Verde, Cotia/SP CEP.06701-257</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;