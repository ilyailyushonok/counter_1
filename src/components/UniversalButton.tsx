import styled from 'styled-components';

type UniversalButtonPropsType = {
    title: string,
     onClick: () => void,
     disabler?: boolean,
 }

 export const UniversalButton = ({title, onClick,disabler}: UniversalButtonPropsType) => {

    return (
        <BtnStyled disabled={disabler}  onClick={onClick}>{title}</BtnStyled>
    )
 }


 const BtnStyled = styled.button`
     background-color: ${props => props.disabled ? 'gray' : 'deepskyblue'};
     cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
 `