import React from 'react';
import './styles.css';

import bgPixel from '../../assets/img/bg-pixel.png';
import iconPixel from '../../assets/img/icon-pixel.png';
import logoPixel from '../../assets/img/logo_pixel.png';
import bgMega from '../../assets/img/bg-mega.png';
import iconMega from '../../assets/img/icon-mega.png';
import logoMega from '../../assets/img/logo_mega.png';
import bgArena from '../../assets/img/bg-arena.png';
import iconArena from '../../assets/img/icon-arena.png';
import logoArena from '../../assets/img/logo_arena.png';
import bgUltra from '../../assets/img/bg-ultra.png';
import iconUltra from '../../assets/img/icon-ultra.png';
import logoUltra from '../../assets/img/logo_ultra.png';

import { ReactComponent as SvgPincel } from '../../assets/svg/pixel_caneta.svg';
import { ReactComponent as SvgAcess } from '../../assets/svg/pixel_acessibilidade.svg';
import { ReactComponent as SvgPlusCirculo } from '../../assets/svg/mais_circulo.svg';
import { ReactComponent as SvgBgPixel } from '../../assets/svg/bg-pixel-right.svg';
import { ReactComponent as SvgMegaFios } from '../../assets/svg/mega_fios.svg';
import { ReactComponent as SvgMegaMontagem } from '../../assets/svg/mega_montagem.svg';
import { ReactComponent as SvgFrame } from '../../assets/svg/Frame.svg';
import { ReactComponent as SvgArena } from '../../assets/svg/arena_bases_de_apoio.svg';
import { ReactComponent as SvgMaisCirculoVerde } from '../../assets/svg/mais_circulo_verde.svg';
import { ReactComponent as SvgPointerVerde } from '../../assets/svg/pointer_verde.svg';
import { ReactComponent as SvgCaminhao } from '../../assets/svg/ultra_caminhao.svg';
import { ReactComponent as SvgPeso } from '../../assets/svg/ultra_peso.svg';
import { ReactComponent as SvgMaisCirculoLaranja } from '../../assets/svg/mais_circulo_laranja.svg';
import { ReactComponent as SvgPointerLaranja } from '../../assets/svg/pointer_laranja.svg';


function SectionOurFloors() {
  return (
      <section className="s-ourFloors">
          <div className="container">
            <div className="text">
                <h1>Nossos Pisos</h1>
                <p>Contamos com 4 modelos de piso<br className="br1"/> diferenciais exclusivos <br className="br2"/> para atender <br className="br1"/> diversas situações e exigências.</p>
            </div>

            <div className="floorType">
                <div className="pixel">
                    <div className="pixelTop">
                        <img src={bgPixel} alt="Background Pixel" className="bgPixel" />
                        <img src={iconPixel} alt="Icon pixel" className="iconPixel" />
                    </div>

                    <div className="pixelBody">
                        <img src={logoPixel} alt="Logo pixel"/>
                        <h6>Crie <span>ambientes tão exclusivos</span><br /> quanto o seu evento.</h6>

                        <div className="txt1">
                            <SvgPincel />
                            <p>Personalização com logotipos</p>
                        </div>

                        <div className="txt2">
                            <SvgAcess />
                            <p>Rampas de acessibilidade</p>
                        </div>

                        <div className="btn">
                            <input type="submit" value="Saiba mais" />
                            <SvgPlusCirculo />
                        </div>
                        <SvgBgPixel className="exemplo"/>
                    </div>
                </div>

                <div className="mega">
                    <div className="megaTop">
                        <img src={bgMega} alt="Bakcground Mega" className="bgMega"/>
                        <img src={iconMega} alt="Icon mega" className="iconMega"/>
                    </div>

                    <div className="megaBody">
                        <img src={logoMega} alt="Logo Mega" />
                        <h6>Completo para todas <br/> as <span>situações e tamanhos.</span></h6>
                    
                        <div className="txt1">
                            <SvgMegaFios />
                            <p>Exclusivo módulo passa cabo</p>
                        </div>

                        <div className="txt2">
                            <SvgMegaMontagem />
                            <p>Rápida montagem</p>
                        </div>

                        <div className="btn">
                            <input type="submit" value="Saiba mais" />
                            <SvgPlusCirculo />
                        </div>
                        <SvgBgPixel className="exemplo"/>
                    </div>
                </div>

                <div className="arena">
                    <div className="arenaTop">
                        <img src={bgArena} alt="Background Arena" className="bgArena"/>
                        <img src={iconArena} alt="Icon arena" className="iconArena"/>
                    </div>

                    <div className="arenaBody">
                        <img src={logoArena} alt="Logo Arena" />
                        <h6>Design exclusivo para<br /> <span> gramados naturais</span> exigentes.</h6>
                    
                        <div className="txt1">
                            <SvgFrame />
                            <p>Exclusivas bases de apoio</p>
                        </div>

                        <div className="txt2">
                            <SvgArena />
                            <p>Ideal para eventos em estádios</p>
                        </div>

                        <div className="btn">
                            <input type="submit" value="Saiba mais" />
                            <SvgMaisCirculoVerde />
                        </div>
                        <SvgPointerVerde className="exemplo"/>
                    </div>
                </div>

                <div className="ultra">
                    <div className="ultraTop">
                        <img src={bgUltra} alt="Background Ultra" className="bgUltra" />
                        <img src={iconUltra} alt="" className="iconUltra"/>
                    </div>

                    <div className="ultraBody">
                        <img src={logoUltra} alt="Logo ultra" />
                        <h6>O <span>maior e mais resistente</span><br /> piso plástico modular<br /> da América Latina.</h6>

                        <div className="txt1">
                            <SvgCaminhao />
                            <p>Exclusivas bases de apoio</p>
                        </div>

                        <div className="txt2">
                            <SvgPeso />
                            <p>SvgPeso para eventos em estádios</p>
                        </div>

                        <div className="btn">
                            <input type="submit" value="Saiba mais" />
                            <SvgMaisCirculoLaranja />
                        </div>
                        <SvgPointerLaranja className="exemplo"/>
                    </div>
                </div>
            </div>
          </div>
      </section>
  );
}

export default SectionOurFloors;