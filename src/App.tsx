import { useState } from 'react';
import './App.scss';
import Icon from './assets/degree_icon.svg';

function App() {
    const[temp, setTemp] = useState(72);

    const onMinusButtonPress = () => {
        setTemp(temp - 1);
    }

    const onPlusButtonPress = () => {
        setTemp(temp + 1);
    }

    return (
        <div className='background'>
            <div className="temperature-container">
                <div className="temperature-reading">
                    <label className='temperature'>
                        {temp}
                    </label>
                    <img src={Icon} className='icon' />
                </div>
                <div className="button-container">
                    <button className="minus-button" onClick={onMinusButtonPress}>
                        <label className='minus-label'>-</label>
                    </button>
                    <button className="plus-button">
                        <label className='plus-button' onClick={onPlusButtonPress}>+</label>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App
