import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 0 12.3rem;
  gap: 6.4rem;

  align-items: center;
  justify-content: center;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_INPUT };

  & > span {
    color: ${({ theme }) => theme.COLORS.CONTRAST };
    font-size: 2.4rem;
    font-weight: 700;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  strong {
    width: max-content;
    grid-area: name;
  }

  span {
    text-align: right;
    grid-area: exit;
  }

  img {
    border-radius: 50%;
    grid-area: avatar;
    width: 6.4rem;
    height: 6.4rem;
  }
`;