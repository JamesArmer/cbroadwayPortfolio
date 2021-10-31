import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  position: absolute;
  top: 48%;
  -ms-transform: translateY(-48%);
  transform: translateY(-48%);

  width: 80%;
  margin-left: 12%;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const HeadersDiv = styled.div`
  grid-column: span 4 / auto;
  display: flex;
  justify-content: space-around;
  padding-top: 0.75rem;

  line-height: 80px;

  list-style: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;

export const TitleDiv = styled.div`
  grid-column: span 3 / auto;
  display: flex;
  flex-direction: row;
  align-content: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const HeaderDiv = styled.div`
  grid-column: span 1 / auto;
`;

export const HeroTitle = styled.h2`
  font-weight: 500;
  font-size: 48px;
  line-height: 88px;
  width: max-content;
  max-width: 100%;
  white-space: nowrap;
  background: #000000;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  padding: ${(props) => (props.main ? "58px 0 16px" : "0")};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "56px" : "48px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "28px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;

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
