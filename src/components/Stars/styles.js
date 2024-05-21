import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    color: ${({ theme }) => theme.COLORS.CONTRAST };
    margin: 0.8rem 0 1.5rem;
`;