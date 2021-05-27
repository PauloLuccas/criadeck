import React from 'react';
import './styles.css';

import btnMenu from '../../assets/img/menu_hamburger.png';

function Header() {
  return (
    <header>
        <div className="container">
          <a href="#" className="logo"></a>

          <nav>
            <ul>
              <li><a href="#">Pixel</a></li>
              <li><a href="#">Mega</a></li>
              <li><a href="#">Arena</a></li>
              <li><a href="#">Ultra</a></li>
            </ul>
          </nav>

          <div className="menu-mobile">
            <nav>
              <ul>
                <li><a href="#">Pixel</a></li>
                <li><a href="#">Mega</a></li>
                <li><a href="#">Arena</a></li>
                <li><a href="#">Ultra</a></li>
              </ul>
            </nav>
          </div>

          <input type="submit" value="Orçamento" />

          <a id="js-open-menu" className="btn-menu">
            <img src={btnMenu} alt="Btn Menu" />
          </a>

        </div>
    </header>
  );
}

export default Header;