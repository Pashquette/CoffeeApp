import { useState } from 'react';

import OurBeans from '../components/OurBeans/OurBeans';
import './OurCoffee.css'
import InputFilter from '../components/InputFilter/InputFilter'
import CoffeeFilter from '../components/CoffeeFilter/CoffeeFilter';
import CardItem from '../components/CardItem/CardItem';

import {data} from './../helpers/mainSection'
import { coffees } from '../helpers/coffeeList';

const OurCoffee = () => {
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('')

    const searchCoffee = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.title.indexOf(term) > -1
        })
    }

    const onUpdateSearch = (term) => {
        setTerm(term)
    }

    const filterCoffee = (items, filter) => {
        switch (filter) {
            case 'Brazil': 
                return items.filter(item => item.country === 'Brazil');
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya');
            case 'Columbia':
                return items.filter(item => item.country === 'Columbia');
            default:
                return items
        }
    }

    const onFilterSelect = (filter) => {
        setFilter(filter)
    }

    const visibleData = filterCoffee(searchCoffee(coffees, term), filter)

    return (
        <>
        <header className="our-coffee__header">
            <div className="our-beans__container">
                <div className="our-coffee__title">
                    <h1>Our Coffee</h1>
                </div>
            </div>
        </header>
            <OurBeans img={data[0].img} title={data[0].title} descr={data[0].descr} />
            <div className="filters__container">
                <InputFilter onUpdateSearch={onUpdateSearch}/>
                <CoffeeFilter filter={filter} onFilterSelect={onFilterSelect}/>
            </div>

            <main className='our-coffee__card-list'>
                {visibleData.map((item, index) => {
                    return <CardItem key={item.id} index={index} 
                                     img={item.img} 
                                     title={item.title} 
                                     country={item.country} 
                                     price={item.price}/>
                })}
            </main>
        </>
    );
}
 
export default OurCoffee;