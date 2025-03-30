import './App.css'
import {Counter} from './components/Counter.tsx';
import {useEffect, useState} from 'react';
import {SetValues} from './components/SetValues.tsx';
import {FlexWrapper} from './components/FlexWrapper.tsx';

function App() {
    const [counter, setCounter] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [minValue, setMinValue] = useState<number>(0);
    const [flag, setFlag] = useState<boolean>(true);

    useEffect(() => {
        const minFromStorage = localStorage.getItem('minValue');
        const maxFromStorage = localStorage.getItem('maxValue');

        if (minFromStorage !== null && maxFromStorage !== null) {
            const parsedMin = JSON.parse(minFromStorage);
            const parsedMax = JSON.parse(maxFromStorage);

            if (!isNaN(parsedMin) && !isNaN(parsedMax) ){
                setMinValue(parsedMin);
                setMaxValue(parsedMax);
                setCounter(parsedMin);
            }
        }
    }, []);


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
            <SetValues
                flag={flag}
                setFlag={setFlag}
                setCounter={setCounter}
                setMaxValue={setMaxValue}
                maxValue={maxValue}
                counter={counter}
                setMinValue={setMinValue}
                minValue={minValue}/>
            <Counter
                flag={flag}
                maxValue={maxValue}
                minValue={minValue}
                counter={counter}
                incrementOnclick={incrementOnclick}
                resetOnclick={resetOnclick}/>
        </FlexWrapper>

    )
}

export default App
