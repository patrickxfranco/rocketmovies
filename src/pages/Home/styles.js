import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 11.6rem 1fr;
  grid-template-areas: "header" "content";

  /* * {
    border: 1px solid red;
  } */

  main {
    width: 113.7rem;
    margin: 0 auto;
    grid-area: content;
  }

  main header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 0;
  }

  main header h1 {
    font-weight: 400;
  }

  main header button {
    width: max-content;
    padding: 0 1.6rem;
    font-weight: 400;
  }

  #content {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-bottom: 10rem;
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_CARD };
  padding: 3.2rem;
  border-radius: 1.6rem;
  cursor: pointer;

  h2 {
    font-weight: 700;
    font-size: 2.4rem;
  }

  p {
    text-overflow: clip;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .tags {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
    flex-wrap: wrap;
    margin-top: 1.5rem;
  }

  .tags > * {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_TAGS };
    padding: 0.5rem 1.6rem;
    border-radius: 0.8rem;
  }
`;