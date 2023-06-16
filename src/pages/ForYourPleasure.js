import OurBeans from '../components/OurBeans/OurBeans';
import './ForYourPleasure.css'
import CardItem from '../components/CardItem/CardItem';

import {data} from './../helpers/mainSection'
import { coffees } from '../helpers/coffeeList';


const ForYourPleasure = () => {
    return (
        <>
        <header className="for-your-pleasure__header">
            <div className="for-your-pleasure__container">
                <div className="for-your-pleasure__title">
                    <h1>For your pleasure</h1>
                </div>
            </div>
        </header>
            <OurBeans img={data[1].img} title={data[1].title} descr={data[1].descr} />
            <main className='for-your-pleasure__card-list'>
                {coffees.map((item, index) => {
                    return <CardItem key={item.id} index={index} img={item.img} title={item.title} country={item.country} price={item.price}/>
                })}
            </main>
        </>
    );
}
 
export default ForYourPleasure;