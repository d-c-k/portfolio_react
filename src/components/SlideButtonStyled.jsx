import styled from 'styled-components'

const SlideButtonStyled = styled.button`
    position: absolute;
    border: none;
    color: inherit;
    font-size: 2rem;
    background: none;
    cursor: pointer;
    text-align: center;
    ${props => props.side}: 2.5%;

    @media screen and (max-width: 640px){
        //display:none;
        top: 65%;
        width: 20%;
        height: 20%;
        ${props => props.side}: 0%;
    }

    @media screen and (min-width: 641){
        top: 50%;
        width: 2.5vw;
        height: 80%;
        transform: translateY(-50%);
    }
`

export default SlideButtonStyled
