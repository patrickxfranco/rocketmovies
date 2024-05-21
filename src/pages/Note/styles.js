import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 11.6rem 1fr;
  grid-template-areas: "header" "content";

  main {
    width: 113.7rem;
    margin: 0 auto;
    grid-area: content;
    margin-bottom: 15rem;
  }

  a {
    margin: 4rem 0 2.4rem;
    width: max-content;
    justify-content: left;
  }

  #title-star {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 2rem;
    margin-bottom: 2.4rem;
  }

  #movie-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
  }

  #movie-info img {
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 50%;
  }

  #movie-info svg {
    color: ${({ theme }) => theme.COLORS.CONTRAST };
  }

  #tags ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
    margin-top: 4rem;
  }

  #tags ul li {
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CARD };
    padding: 0.8rem 1.6rem;
  }

  p {
    margin-top: 4rem;
  }
`;