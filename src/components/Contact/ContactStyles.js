import styled from "styled-components";

export const LinkItem = styled.a`
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 0px;
  padding-top: 50px;
  transition: 0.3s ease;
  position: relative;
  left: 0;
  text-align: center;

  &:hover {
    color: #cdcbcb;
    left: 4px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
    display: flex;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
`;

export const SectionContact = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};
  margin: auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  padding-top: 165px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};
    padding-top: 40px;

    width: calc(40vw);
    flex-direction: column;
  }
`;
