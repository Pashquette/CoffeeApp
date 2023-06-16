import { NavLink } from 'react-router-dom';

import './style.css'

const CardItem = ({img, title, country, price, index}) => {
    return (
        <NavLink to={`/coffee/${index}`}>
        <div className="card-item__item">
            <div className="card-item__item__img">
                <img src={img} alt={title} />
            </div>
            <div className="card-item__item__descr">
                {title}
            </div>
            <div className="card-item__item__country">{country}</div>
            <div className="card-item__item__price">{price}</div>
        </div>
        </NavLink>
    );
}
 
export default CardItem;