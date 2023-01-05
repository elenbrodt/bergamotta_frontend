import styled from 'styled-components';
import {colors} from "../../styles/theme";

export const SearchBox = styled.div`
  display: flex;
  align-items:center;
  padding-left: 5px;
  width:80%;
  border-radius: 30px;
  border: solid 1px ${colors.secondary};
  color: ${colors.secondary};
  padding: 14px 10px;
`