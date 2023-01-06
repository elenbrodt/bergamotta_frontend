import styled from 'styled-components';
import {colors} from "../../styles/theme";


export const SearchBox = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  width:315px;
  border-radius: 30px;
  border: solid 1px ${colors.secondary};
  color: ${colors.secondary};
  padding: 8px;
  gap: 10px;
`
