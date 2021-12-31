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
`;

export const SectionContact = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 32px 48px 0;
  margin: auto;
  max-width: 1040px;
  height: 75vh;

  padding-bottom: 40px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};
    padding-top: 40px;

    width: calc(40vw);
    flex-direction: column;
    height: 50vh;
  }
`;
