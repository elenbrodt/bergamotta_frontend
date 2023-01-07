import styled from 'styled-components';
import {colors} from "../../styles/theme";

export const SearchBox = styled.div`
  display: flex;
  align-items:center;
  gap: 10px;
  padding-left:10px;
  width: 315px;
  border-radius: 45px;
  border: 2px solid ${colors.secondary};
  color: ${colors.secondary};
`
