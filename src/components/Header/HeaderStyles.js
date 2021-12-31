import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;

  padding: 1rem;
  padding-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;

  position: sticky;
  top: 0;
  background: #FFFFFF;
  z-index: 1;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 40px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
export const TitleDiv = styled.div`
  grid-area: 1 / 2 / 3 / 5;
  display: flex;
  flex-direction: row;
  align-content: center;
  padding-top: 8px;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 6;
  }
`;
export const LinksDiv = styled.div`
  grid-area: 1 / 6 / 2 / 8;
  display: flex;
  justify-content: space-around;
  padding-top: 0.75rem;
  grid-gap: 140px;

  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: flex-start;
    grid-area: 2 / 1 / 3 / 7;
    grid-gap: 20vw;
    width: 100%;
  }
`;

export const NavListItem = styled.div`
  display: flex;
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: #000000;
  transition: 0.4s ease;
  &:hover {
    color: #cdcbcb;
    opacity: 1;
    cursor: pointer;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const LogoSpan = styled.span`
  width: 100%;
  font-size: 26px;
  font-weight: normal;
  letter-spacing: 1px;
`;
