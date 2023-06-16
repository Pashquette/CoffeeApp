import { NavLink } from 'react-router-dom';

import navLogoBlack from './../../images/navLogoBlack.svg'
import footerLogo from './../../images/footerLogo.svg'

import './style.css'

const Footer = () => {
    return (
        <footer className="footer">
                <div className="footer__nav">
                    <ul className="footer__nav-list">   
                        <img className='footer__icon' src={navLogoBlack} alt="logo"/>   
                        <li className="footer__nav-list__item">
                        <NavLink to="/">
                            Coffee House
                        </NavLink>
                            </li>
                        <li className="footer__nav-list__item">
                        <NavLink to="/coffee">
                            Our coffee
                        </NavLink>
                        </li>
                        <li className="footer__nav-list__item">
                        <NavLink to="/pleasure">
                            For your pleasure
                        </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="footer__container">
                <div className="footer__logo">
                        <img src={footerLogo} alt="footer" />
                   </div>
                </div>

        </footer>
    );
}
 
export default Footer;