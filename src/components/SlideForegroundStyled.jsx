import styled from 'styled-components'

const SlideForegroundStyled = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme === 'light' ? 'rgba(255, 255, 255, .65)' : 'rgba(0, 0, 0, .65)'};
    display: grid;
    grid-template-columns: 1.6rem 1fr 1fr 1.6rem;
    
    @media screen and (min-width: 641px){
        padding-top: 1rem;
        grid-template-columns: 3.2rem 1fr 1fr 1fr 3.2rem;
        grid-column-gap: 1rem;
    }

    @media screen and (min-width: 1008px){
        grid-template-columns: repeat(7, 1fr);
    }
`

export default SlideForegroundStyled
