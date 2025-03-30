import {UniversalButton} from './UniversalButton.tsx';
import styled from 'styled-components';

type CounterPropsType = {
    counter: number
    incrementOnclick: () => void
    resetOnclick: () => void
    maxValue:number
    minValue:number
    flag:boolean
}


export const Counter = (props: CounterPropsType) => {
    const isMaxValue=props.maxValue===props.counter

    return (
            <WrapStyled>
                <WindowStyled flag={props.flag} isMaxValue={isMaxValue}>{props.flag?props.counter:'incorrect value'}</WindowStyled>
                <BtnWrapper>
                    <UniversalButton  disabler={props.counter===props.maxValue} title={'inc'} onClick={props.incrementOnclick}/>
                    <UniversalButton disabler={props.counter===props.minValue} title={'reset'} onClick={props.resetOnclick}/>
                </BtnWrapper>
            </WrapStyled>

    );
};
export const WrapStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 250px;
    width: 100%;
    border: 2px solid deepskyblue;
    border-radius: 15px;
    padding: 15px;
*{
    border-radius: 15px;
}
`

export const WindowStyled = styled.div<{isMaxValue?:boolean,flag:boolean}>`
    display: flex;
    border: 2px solid ${props=>!props.flag ? 'red': 'deepskyblue'};
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: deepskyblue;
    color: ${props=>props.isMaxValue||!props.flag ? 'red': '#1d1d1e'};;
    
`

export const BtnWrapper = styled.div`
    display: flex;
    border: 2px solid deepskyblue;
    justify-content: space-around;
    padding: 10px;
    margin-top: 15px;

`
