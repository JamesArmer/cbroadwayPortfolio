import styled from "styled-components";
import Link from "next/link";

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

    margin-left: 5%;
  }
`;

export const HeadersDiv = styled.div`
  grid-column: span 4 / auto;
  display: flex;
  justify-content: space-around;
  padding-top: 9px;

  line-height: 80px;

  list-style: none;

  @media ${(props) => props.theme.breakpoints.lg} {
    justify-content: flex-start;
    grid-gap: 20vw;
    margin-left: 40px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 1 / 3 / 5;
    justify-content: flex-start;
    grid-gap: 15%;
    margin-left: 0px;
  }
`;

export const TitleDiv = styled.div`
  grid-column: span 3 / auto;
  display: flex;
  flex-direction: row;
  align-content: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-column: span 3 / auto;
  }
`;

export const HeroTitle = styled.h2`
  font-weight: 500;
  font-size: 30px;
  letter-spacing: 1.5px;
  line-height: 88px;
  width: max-content;
  max-width: 100%;
  white-space: nowrap;

  margin-left: 40px;

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
    margin-left: 0px;
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

export const headertitle = styled.li`
`;
