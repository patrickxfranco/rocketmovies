import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.INPUT_COLOR};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.BACKGROUND_INPUT}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.CONTRAST};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.CONTRAST};
  }

  > input {
    height: 55px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.INPUT_COLOR};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.INPUT_PLACEHOLDER};
    }
  }

`;