import './App.css'
import {Counter} from './components/Counter.tsx';
import {useState} from 'react';
import {SetValues} from './components/SetValues.tsx';
import {FlexWrapper} from './components/FlexWrapper.tsx';

function App() {
    const [counter, setCounter] = useState<number>(0);
    const [maxValue,setMaxvalue] = useState<number>(5);
    const [minValue,setMinvalue] = useState<number>(0);

    const incrementOnclick = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
    }
    const resetOnclick = () => {
        setCounter(minValue)
    }

    return (
        <FlexWrapper>
            <SetValues setCounter={setCounter} setMaxvalue={setMaxvalue} maxValue={maxValue} counter={counter} setMinvalue={setMinvalue} minValue={minValue}/>
            <Counter maxValue={maxValue} minValue={minValue}  counter={counter} incrementOnclick={incrementOnclick} resetOnclick={resetOnclick}/>
        </FlexWrapper>

    )
}

export default App
