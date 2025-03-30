import { ChangeEventHandler } from 'react';
import { UniversalButton } from './UniversalButton.tsx';
import { BtnWrapper, WrapStyled } from './Counter.tsx';
import styled from 'styled-components';

type SetValuesPropsType = {
    setCounter: (counter: number) => void;
    setMaxValue: (maxValue: number) => void;
    maxValue: number;
    counter: number;
    setMinValue: (minValue: number) => void;
    minValue: number;
    setFlag: (flag: boolean) => void;
    flag: boolean;
};

export const SetValues = (props: SetValuesPropsType) => {
    const validateValues = (min: number, max: number) => {
        const isValid = min >= 0 && max > min;
        props.setFlag(isValid);
        return isValid;
    };

    const maxValueHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        const newMaxValue = Number(e.target.value);
        props.setMaxValue(newMaxValue);
        validateValues(props.minValue, newMaxValue);
    };

    const minValueHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        const newMinValue = Number(e.target.value);
        props.setMinValue(newMinValue);
        validateValues(newMinValue, props.maxValue);
    };

    const onClickHandler = () => {
        if (props.flag) {
            localStorage.setItem('minValue', JSON.stringify(props.minValue));
            localStorage.setItem('maxValue', JSON.stringify(props.maxValue));
            props.setCounter(props.minValue);
        }
    };

    return (
        <WrapStyled>
            <WindowSetValuesStyled>
                <FormWrapper flag={props.flag}>
                    <h3>max value</h3>
                    <input
                        type="number"
                        value={props.maxValue}
                        onChange={maxValueHandler}
                    />
                </FormWrapper>
                <FormWrapper flag={props.flag}>
                    <h3>start value</h3>
                    <input
                        type="number"
                        value={props.minValue}
                        onChange={minValueHandler}
                    />
                </FormWrapper>
            </WindowSetValuesStyled>
            <BtnWrapper>
                <UniversalButton
                    disabler={!props.flag}
                    title="set"
                    onClick={onClickHandler}
                />
            </BtnWrapper>
        </WrapStyled>
    );
};

const WindowSetValuesStyled = styled.div`
    display: flex;
    border: 2px solid deepskyblue;
    flex-wrap: wrap;
`;

const FormWrapper = styled.div<{ flag: boolean }>`
    display: flex;
    justify-content: space-around;
    align-items: center;

    h3 {
        color: deepskyblue;
        font-size: 14px;
    }

    input {
        background-color: ${(props) => (!props.flag ? '#E45B62FF' : 'white')} ;
        border: solid 2px ${(props) => (!props.flag ? 'red' : 'deepskyblue')};
        border-radius: 5px;
        max-width: 40%;
        max-height: 40%;
    }
`;