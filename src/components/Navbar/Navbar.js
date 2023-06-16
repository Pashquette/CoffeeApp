import { NavLink } from 'react-router-dom';

import navLogo from './../../images/navLogoWhite.svg'

import './style.css'

const Navbar = () => {

    const activeLink = "nav-list__item nav-list__item--active";
    const normal = "nav-list__item"

    return (
        <nav className="nav">
   
                <ul className="nav-list">
                   <img className="nav-list__logo" src={navLogo} alt="logo"/>
                    <li className="nav-list__item">
                    <NavLink to="/CoffeeApp" className={({isActive}) => isActive ? activeLink : normal}>
                        Coffee House
                        </NavLink>
                        </li>
                    <li className="nav-list__item">
                        <NavLink to="/coffee" className={({isActive}) => isActive ? activeLink : normal}>
                            Our coffee
                        </NavLink>

                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/pleasure" className={({isActive}) => isActive ? activeLink : normal}>
                            For your pleasure
                        </NavLink>
                        </li>
                </ul>
        </nav>
    );
}
 
export default Navbar;