import React from 'react';

export default function Header() {
  return (
    <nav className="header navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/" title="Amelia Salon">
          <img
            src="/images/LOGOSmall.png"
            alt="Amelia Salon Logo"
            className="header__logo"  
          />
          <span className="visually-hidden">Amelia Salon</span>
        </a>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          
          <img
            src="/images/icons/menu.png"
            alt="Menu"
            className="header__menu-icon"
          />
        </button>


        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link header__link" href="#about">關於我們</a>
            </li>
            <li className="nav-item">
              <a className="nav-link header__link" href="#services">服務介紹</a>
            </li>
            <li className="nav-item">
              <a className="nav-link header__link" href="#portfolio">美髮作品</a>
            </li>
            <li className="nav-item">
              <a className="nav-link header__link" href="#contact">聯絡我們</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
