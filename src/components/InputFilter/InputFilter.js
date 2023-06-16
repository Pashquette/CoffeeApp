import { useState } from 'react';


import './style.css'

const InputFilter = ({onUpdateSearch}) => {
    const [term, setTerm] = useState('')

    const onUpdateTerm = (e) => {
        const term = e.target.value;
        setTerm(term);
        onUpdateSearch(term)
    }
    
    return (
        <div className='input-filter'>
            <div className="input-filer__text">Looking for</div>
            <div className="input-filter__input">
                <input type="text" className='input' placeholder='start typing here...' value={term} onChange={onUpdateTerm}/>
            </div>
        </div>
    );
}
 
export default InputFilter;