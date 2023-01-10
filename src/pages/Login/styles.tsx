import styled from 'styled-components';
import Button from '../../components/Button';
import { colors } from '../../styles/theme';

export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10vh;
    margin: 0 auto;
    margin-bottom: 5vh;
    width: 50vw;
`
export const Inputs =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5vh;
`
export const SubmitButton = styled (Button)`
    background-color: ${colors.black}
`