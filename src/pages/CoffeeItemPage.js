
import { useParams } from 'react-router-dom';

import './CoffeeItemPage.css'

import blackLogo from './../images/footerLogo.svg'
import coffeeBig from './../images/CoffeeBig.jpg'

import { coffees, bestCoffees} from '../helpers/coffeeList'


const CoffeeItemPage = () => {
    const {id} = useParams()
    const coffee = coffees[id];
    const best = bestCoffees[id];
    return (
        <>
        <header className="coffee-item__header">
            <div className="coffee-item__container">
                <div className="coffee-item__title">
                    <h1>Our Coffee</h1>
                </div>
            </div>
        </header>

        <main className='coffee-item'>
            <div className="coffee-item__wrapper">
                <div className="coffee-item__img">
                    <img  src={coffeeBig} alt="" />
                </div>
                <div className="coffee-item__block">
                    <div className="coffee-item__subtitle">
                        <h2>About it</h2>
                    </div>
                    <div className="coffee-item__logo">
                        <img src={blackLogo} alt="" />
                    </div>
                    <div className="coffee-item__country">
                    <strong>Country:</strong> {coffee.country || best.country}
                    </div>
                    <div className="coffee-item__descr">
                    <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="coffee-item__price">
                        <strong>Price:  <span>{coffee.price || best.price}</span></strong>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}
 
export default CoffeeItemPage;