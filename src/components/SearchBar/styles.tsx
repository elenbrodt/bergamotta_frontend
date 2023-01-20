import styled from "styled-components";

export const SearchBarStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75vw;
  height: 70px;
  padding: 1vh 1vw 1vh 4vw;
  position: sticky;
  top: 0px;
  background-color: white;
  z-index: 3;
  @media (max-width: 870px) {
    width: 100%;
    height: 7vh;
  }
`;
