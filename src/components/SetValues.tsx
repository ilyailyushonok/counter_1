import {UniversalButton} from './UniversalButton.tsx';
import {BtnWrapper, WrapStyled} from './Counter.tsx';
import styled from 'styled-components';
import {ChangeEventHandler, useRef} from 'react';

type SetValuesPropsType = {
    setCounter: (counter: number) => void;
    setMaxvalue: (maxValue: number) => void;
    maxValue:number;
    counter:number;
    setMinvalue:(minValue: number) => void;
    minValue:number;
}


export const SetValues = (props: SetValuesPropsType) => {
    let startValue = 3
    let newMaxValue = 12
    const startValueHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        startValue = Number(e.target.value)
        props.setMinvalue(startValue)
    }
    const maxValueHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        newMaxValue = Number(e.target.value)
        props.setMaxvalue(newMaxValue)

    }
    const myRef=useRef<HTMLInputElement>(null)
    const onClickHandler = () => {
       if(myRef.current) {props.setCounter(Number(myRef.current.value))}
    }
    return (
        <WrapStyled>
            <WindowSetValuesStyled>
                <FormWrapper>
                    <h3>max value</h3>
                    <input type={'number'} value={props.maxValue} onChange={maxValueHandler}/>
                </FormWrapper>
                <FormWrapper>
                    <h3>start value</h3>
                    <input type={'number'} value={props.minValue} onChange={startValueHandler} ref={myRef}/>
                </FormWrapper>
            </WindowSetValuesStyled>
            <BtnWrapper>
                <UniversalButton title={'set'} onClick={onClickHandler}/>
            </BtnWrapper>
        </WrapStyled>

    );
};

const WindowSetValuesStyled = styled.div`
    display: flex;
    border: 2px solid deepskyblue;
    flex-wrap: wrap;

`
const FormWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    h3 {
        color: deepskyblue;
        font-size: 14px;
    }

    input {
        background-color: white;
        border: solid 2px deepskyblue;
        border-radius: 5px;
        max-width: 40%;
        max-height: 40%;
    }
`