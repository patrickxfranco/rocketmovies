import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 5.6rem;
  padding: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT };
  border-radius: 1rem;

  color: ${({ theme }) => theme.COLORS.INPUT_COLOR };

  cursor: text;

  border: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.INPUT_PLACEHOLDER };
  }
`;