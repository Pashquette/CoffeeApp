import headerImg from '../../images/headerImg.svg'
import { NavLink } from 'react-router-dom';
import './style.css'

const Header = () => {
    return (
        <header className="header">
            <main className="section">
                <div className="header__title">
                    <h1>Everything You Love About Coffee</h1>
                </div>
                <div className="logo">
                    <img src={headerImg} alt="beens" />
                </div>
                <div className="subtitle-1">
                    <h2>We makes every day full of energy and taste</h2>
                </div>
                <div className="subtitle-2">Want to try our beans?</div>
                <NavLink to="/coffee"><button className='btn'>More</button></NavLink>

            </main>
        </header>
    );
}
 
export default Header;