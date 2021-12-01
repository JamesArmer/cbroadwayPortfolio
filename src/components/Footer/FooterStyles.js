import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;

  min-height: 50px;
  padding-top: 50px;
  padding-bottom: 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: calc(100vw - 32px);
  }
`;

export const FooterText = styled.p`
  font-size: 12px;
`;
