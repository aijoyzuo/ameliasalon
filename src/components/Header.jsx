import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault(); 

    const target = document.querySelector(targetId);
    const header = document.querySelector(".header");
    const headerHeight = header ? header.offsetHeight : 0;

    if (target) {
      const top =
        target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
    
    setIsOpen(false);
  };

  return (
    <nav
      className={`header navbar navbar-expand-md navbar-dark ${
        isOpen ? "header--solid" : ""
      }`}
    >
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center"
          href="/"
          title="Amelia Salon"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/LOGOSmall.png"}
            alt="Amelia Salon Logo"
            className="header__logo"
          />
          <span className="visually-hidden">Amelia Salon</span>
        </a>

        {/* 漢堡按鈕*/}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="mainNavbar"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/icons/menu.png"}
            alt="Menu"
            className="header__menu-icon"
          />
        </button>

        
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="mainNavbar"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link header__link"
                href="#about"
                onClick={(e) => handleNavClick(e, "#about")}
              >
                關於我們
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link header__link"
                href="#services"
                onClick={(e) => handleNavClick(e, "#services")}
              >
                服務介紹
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link header__link"
                href="#portfolio"
                onClick={(e) => handleNavClick(e, "#portfolio")}
              >
                美髮作品
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link header__link"
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                聯絡我們
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
