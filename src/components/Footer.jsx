export default function Footer() {
    return (
        <footer className=" sticky-button">
            <div className="footer container d-flex justify-content-center">
                <div className="d-flex flex-column justify-content-between gap-2 gap-md-0">
                    <div>
                        <a className="navbar-brand d-flex align-items-center" href="/" title="Amelia Salon">
                            <img
                                src={process.env.PUBLIC_URL +'/images/LOGOBig.png'}
                                alt="Amelia Salon Logo"
                                className="footer__logo"
                            />
                            <span className="visually-hidden">Amelia Salon</span>
                        </a>
                    </div>
                    <div className="footer__text d-flex justify-content-center flex-column flex-md-row gap-0 gap-md-1">
                        <span className="typo-label">服務條款及隱私保護政策</span>
                        <span className="typo-label">Copyright © 2024 ;Amelia Salon 版權所有</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
