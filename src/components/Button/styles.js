import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: none;

  height: 5.6rem;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.CONTRAST };
  border-radius: 1rem;
  font-weight: 500;

  cursor: pointer;
  
  &:hover {
    filter: brightness(0.8);
  }
`;