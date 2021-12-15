import styled from "styled-components";

export const CentreDiv = styled.div`
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  padding-top: 10px;
`;

export const ListDiv = styled.div`
  width: ${(props) => (props.wide ? "40%" : "30%")};
  margin: auto;
`;

export const SectionTitle = styled.h2`
  font-weight: lighter;
  font-size: 40px;
  line-height: ${(props) => (props.main ? "72px" : "56px")};
  background: #000000;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;

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

export const SectionText = styled.p`
  font-size: 16px;
  line-height: 25px;
  font-weight: 300;
  padding-top: ${(props) => (props.extraTopPadding ? "36px" : "24px")};
  padding-bottom: ${(props) => (props.extraBottomPadding ? "36px" : "24px")};
  color: #000000;
  text-align: ${(props) => (props.leftAlign ? "left" : "justify")};

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const SectionQuote = styled.p`
  max-width: 100%;
  font-size: ${(props) => (props.large ? "20px" : "18px")};
  font-style: ${(props) => (props.italic ? "italic" : "")};
  line-height: 30px;
  font-weight: lighter;
  padding-top: ${(props) => (props.extraPadding ? "30px" : "")};
  padding-bottom: ${(props) => (props.noPadding ? "" : "2.4rem")};
  color: #000000;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const OrderedList = styled.ol`
  display: ordered-list
  list-style-type: decimal;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;

  font-size: ${(props) => (props.small ? "12px" : "14px")};
  text-align: ${(props) => (props.leftAlign ? "left" : "center")};
`;

export const UnorderedList = styled.ol`
  list-style-type: disc;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;

  font-size: ${(props) => (props.small ? "12px" : "14px")};
  text-align: ${(props) => (props.leftAlign ? "left" : "center")};

  list-style: ${(props) => (props.noStyle ? "none" : "")};
`;

export const ListItem = styled.li`
  display: list-item;
  max-width: 100%;
  line-height: 30px;

  padding: ${(props) => (props.extraPadding ? "8px" : "")};
`;

export const LandscapeImg = styled.img`
  width: 100%;
  display: block;
  padding-top: 18px;
  padding-bottom: 18px;
`;

export const SmallLandscapeImg = styled.img`
  width: 30%;
  display: block;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: auto;
`;

export const PortraitImg = styled.img`
  height: 100%;
  max-height: 800px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const SquareImg = styled.img`
  height: 100%;
  max-height: 600px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const LandscapeVideo = styled.video`
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const LandscapeVideoDiv = styled.div`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const SplitImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-template-rows: ${(props) =>
    props.landscape ? "auto" : props.portrait ? "650px" : "400px"};
  grid-gap: 10px;
  padding-top: 18px;
  padding-bottom: 18px;
`;

export const Uneven5gImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 131.5px);
  grid-template-rows: 410px;
  grid-gap: 10px;
  padding-top: 18px;
  padding-bottom: 18px;
`;

export const UnevenSightImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 119px);
  grid-template-rows: 443px;
  grid-gap: 10px;
  padding-top: 18px;
  padding-bottom: 18px;
`;

export const MultipleImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  grid-template-rows: ${(props) =>
    props.landscape ? "auto" : props.portrait ? "650px" : "400px"};
  grid-gap: ${(props) => (props.noGridGap ? "0px" : "10px;")};
  padding-top: 18px;
  padding-bottom: 18px;
`;

export const PortraitImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 115px);
  grid-auto-rows: 603px;
  grid-gap: ${(props) => (props.noGridGap ? "0px" : "10px;")};
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const GridImgFullWidth = styled.div`
  grid-column: span 12 / auto;
`;

export const GridImgExtraWide = styled.div`
  display: ${(props) => (props.noFlex ? "block" : "flex")};
  grid-column: span 6 / auto;
`;

export const GridImgWide = styled.div`
  display: ${(props) => (props.noFlex ? "block" : "flex")};
  grid-column: span 4 / auto;
`;

export const GridImgRegular = styled.div`
  display: ${(props) => (props.noFlex ? "block" : "flex")};
  grid-column: span 3 / auto;
`;

export const GridImgThin = styled.div`
  display: ${(props) => (props.noFlex ? "block" : "flex")};
  grid-column: span 2 / auto;
`;

export const GridImgTriple = styled.div`
  display: ${(props) => (props.noFlex ? "block" : "flex")};
  grid-column: span 1 / auto;
`;

export const GridImgPortrait = styled.img`
  height: 100%;
`;

export const GridImgLandscape = styled.img`
  width: 100%;
`;

export const GridVideoPortrait = styled.video`
  height: 100%;
`;

export const GridVideoLandscape = styled.video`
  width: 100%;
`;
