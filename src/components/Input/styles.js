import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  width: 100%;
  height: 5.6rem;
  padding: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT };
  border-radius: 1rem;

  cursor: text;

  input {
    flex: 1;
    height: 100%;
    background: none;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.COLORS.INPUT_COLOR };
  }

  input::placeholder {
    color: ${({ theme }) => theme.COLORS.INPUT_PLACEHOLDER };
  }
`;