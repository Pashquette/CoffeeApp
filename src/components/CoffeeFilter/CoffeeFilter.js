import './style.css'



const CoffeeFilter = ({filter, onFilterSelect}) => {
    const btnsData = [
        {name: 'Brazil', label: 'Brazil'},
        {name: 'Kenya', label: 'Kenya'},
        {name: 'Columbia', label: 'Columbia'},
    ]

    const buttons = btnsData.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? 'coffee-filter__btn coffee-filter__btn--active' : 'coffee-filter__btn'
        return (
            <button type="button" 
                    key={name} 
                    className={clazz}
                    onClick={() => !filter ? onFilterSelect(name) : onFilterSelect('')}>
                    {label}
            </button>
        )
    })

    return (
        <div className="coffee-filter__container">
            <div className="coffee-filter__text">
                Or filter
            </div>
            <div className="coffee-filter__btns">
                {buttons}
            </div>
        </div>
    );
}
 
export default CoffeeFilter;