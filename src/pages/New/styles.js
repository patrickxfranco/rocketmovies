import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 11.6rem 1fr;
  grid-template-areas: "header" "content";

  a {
    width: max-content;
    align-items: left;
    margin: 4rem 0 2.4rem;
  }
  
  h1 {
    margin-bottom: 4rem;
  }

  .title-note {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  h2 {
    margin: 4rem 0 2.4rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.SUBTITLE_COLOR };
  }
  
  main {
    width: 113.7rem;
    margin: 0 auto;
    grid-area: content;
  }

  textarea {
    height: 27.4rem;
    resize: none;
  }

  #editable-markers {
    height: max-content;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_EDITABLE_MARKERS };
    border-radius: 0.8rem;
    display: flex;
    flex-direction: row;
    padding: 1.6rem;
    gap: 2.4rem;
    align-items: center;
  }

  #button-delete {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_EDITABLE_MARKERS };
    color: ${({ theme }) => theme.COLORS.CONTRAST };
  }

  #buttons-end {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    margin-top: 4rem;
  }
`;