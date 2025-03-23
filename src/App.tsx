import './App.css'
import {Counter} from './components/Counter.tsx';
import {useState} from 'react';

function App() {
    const [counter, setCounter] = useState<number>(0);
    const maxCount = 5

    const incrementOnclick = () => {
        if (counter < maxCount) {
            setCounter(counter + 1)
        }
    }
    const resetOnclick = () => {
        setCounter(0)
    }

    return (
        <div>
            <Counter maxCount={maxCount}  counter={counter} disabler={counter===maxCount} incrementOnclick={incrementOnclick} resetOnclick={resetOnclick}/>
        </div>

    )
}

export default App
