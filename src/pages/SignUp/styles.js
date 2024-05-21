import styled from "styled-components";

import backgroundUrl from '../../assets/background.png'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100%;

  #left {
    max-width: 34rem;
    place-content: center;
    margin: 0 auto;
  }

  button {
    margin-top: 2.4rem;
  }

  a {
    display: flex;
    justify-content: center;
    margin-top: 4.8rem;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.CONTRAST };
    font-size: 4.8rem;
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.COLORS.PARAGRAPH };
    font-size: 1.4rem;
    font-weight: 400;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.TITLE };
    font-size: 2.4rem;
    font-weight: 500;
    margin: 4.8rem 0;
  }

  #right {
    background: url("../../assets/background.png");
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundUrl}) no-repeat center center;
  background-size: cover;
  opacity: 0.2;
`;