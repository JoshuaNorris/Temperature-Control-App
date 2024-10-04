import { useState } from 'react'
import './App.scss'

function App() {
    const[temp, setTemp] = useState(72);

    return (
        <div className='background'>
            <div className="temperature-container">
                <div className="temperature-reading"></div>
                <div className="button-container">
                    <button className="minus-button"></button>
                    <button className="plus-button"></button>
                </div>
            </div>
        </div>
    )
}

export default App
