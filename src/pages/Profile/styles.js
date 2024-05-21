import styled from "styled-components";

export const Container = styled.div`
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  #avatar {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  #avatar label {
    position: absolute;
    right: 0;
    height: 4.8rem;
    width: 4.8rem;
    background: ${({ theme }) => theme.COLORS.CONTRAST };
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  #avatar svg {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR };
  }

  #avatar input {
    display: none;
  }
  
  img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
    margin: -115px auto;
  }
  
  header {
    padding: 6.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER_PROFILE };
  }

  header a {
    width: max-content;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 33.6rem;
    margin: 15rem auto;
  }
`;