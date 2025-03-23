import {UniversalButton} from './UniversalButton.tsx';
import styled from 'styled-components';

type CounterPropsType = {
    counter: number
    disabler: boolean
    incrementOnclick: () => void
    resetOnclick: () => void
    maxCount:number
}


export const Counter = (props: CounterPropsType) => {
    const isMaxCount=props.maxCount===props.counter

    return (
            <WrapStyled>
                <WindowStyled isMaxCount={isMaxCount}  >{props.counter}</WindowStyled>
                <BtnWrapper>
                    <UniversalButton  disabler={props.disabler} title={'inc'} onClick={props.incrementOnclick}/>
                    <UniversalButton disabler={!props.counter} title={'reset'} onClick={props.resetOnclick}/>
                </BtnWrapper>
            </WrapStyled>

    );
};
const WrapStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 220px;
    height: 170px;
    border: 2px solid deepskyblue;
    border-radius: 15px;
    padding: 15px;
*{
    border-radius: 15px;
}
`

const WindowStyled = styled.div<{isMaxCount:boolean}>`
    display: flex;
    border: 2px solid deepskyblue;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: deepskyblue;
    color: ${props=>props.isMaxCount ? 'red': '#1d1d1e'};;
    
`

const BtnWrapper = styled.div`
    display: flex;
    border: 2px solid deepskyblue;
    justify-content: space-around;
    padding: 10px;
    margin-top: 15px;

`
