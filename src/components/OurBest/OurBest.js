import { NavLink } from 'react-router-dom'

import './style.css'

import { bestCoffees } from '../../helpers/coffeeList'

const bests = bestCoffees.map(({img, title, price}, index) => {
    return (
        <NavLink to={`/coffee/${index}`}>
            <div className="our-best__item">
                <div className="our-best__item__img">
                    <img src={img} alt={title}/>
                </div>
                <div className="our-best__item__descr">
                    {title}
                </div>
                <div className="our-best__item__price">{price}</div>
            </div>
        </NavLink>
    )
})

const OurBest = () => {
    return (
        <div className="our-best">
            <div className="our-best__container">
                <div className="our-best__title">Our best</div>
                <div className="our-best__list">
                    {bests}
                </div>
            </div>
        </div>
    );
}
 
export default OurBest;