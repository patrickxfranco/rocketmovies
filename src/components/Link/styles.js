import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;

  color: ${({ theme }) => theme.COLORS.CONTRAST };
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    filter: brightness(0.8);
  }
`;