import styled from "styled-components";

export const SectionAbout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 32px 48px 0;
  margin: auto;
  max-width: 1040px;
  height: 75vh;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px 16px 0;
    width: calc(100vw - 32px);
    height: 50vh;
  }
`;

export const CVLink = styled.a`
  color: #000000;
  transition: 0.4s ease;
  &:hover {
    color: #cdcbcb;
    opacity: 1;
    cursor: pointer;
  }
`;
