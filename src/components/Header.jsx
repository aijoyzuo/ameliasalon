import { useRef } from "react";

export default function Header() {
    const navbarToggleRef = useRef(null);

  const closeNavbar = () => {
    if (navbarToggleRef.current) {
      navbarToggleRef.current.click();  
    }
  };
  return (
    <nav className="header navbar navbar-expand-md navbar-dark">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/" title="Amelia Salon">
          <img
            src={process.env.PUBLIC_URL +'/images/LOGOSmall.png'}
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
           ref={navbarToggleRef}
        >
          
          <img
            src={process.env.PUBLIC_URL +'/images/icons/menu.png'}
            alt="Menu"
            className="header__menu-icon"
          />
        </button>


        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link header__link" href="#about"onClick={closeNavbar}>關於我們</a>
            </li>
            <li className="nav-item">
              <a className="nav-link header__link" href="#services"onClick={closeNavbar}>服務介紹</a>
            </li>
            <li className="nav-item">
              <a className="nav-link header__link" href="#portfolio"onClick={closeNavbar}>美髮作品</a>
            </li>
            <li className="nav-item">
              <a className="nav-link header__link" href="#contact"onClick={closeNavbar}>聯絡我們</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
