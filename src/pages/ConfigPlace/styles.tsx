import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 40vw;
  justify-content: center;
  img {
    border-radius: 10px;
    height: 28vh;
  }
  h2 {
    font-size: 38px;
  }
  @media (max-width: 475px) {
    img {
      width: 200px;
      margin-left: -10px;
    }
    h2 {
      margin-left: 50px;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  gap: 1vw;
  width: 100%;
  @media (max-width: 475px) {
    flex-wrap: wrap;
    width: 300px;
  }
`;

export const Wrapper = styled.div`
  margin: 3vh 6vw;
  #myForm {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 475px) {
    #myForm {
      flex-direction: column;
      align-items: center;
    }
  }
`;
