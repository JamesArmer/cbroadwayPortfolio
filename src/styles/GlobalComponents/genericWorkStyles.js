import styled from "styled-components";

export const CentreDiv = styled.div`
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
`;

export const SectionTitle = styled.h2`
  font-weight: lighter;
  font-size: 50px;
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
  font-size: 20px;
  line-height: 25px;
  font-weight: 300;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #000000;
  text-align: justify;

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
  font-size: ${(props) => (props.large ? "30px" : "20px")};
  font-style: ${(props) => (props.italic ? "italic" : "")};
  line-height: 50px;
  font-weight: lighter;
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

export const ListItem = styled.li`
  max-width: 100%;
  font-size: 12px;
  line-height: 30px;
  text-align: center;
  color: #000000;

  padding-top: ${(props) => (props.first ? "20px" : "")};
  padding-bottom: ${(props) => (props.last ? "20px" : "")};
`;

export const LandscapeImg = styled.img`
  width: 100%;
  display: block;
  padding-top: 12px;
  padding-bottom: 12px;
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
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const TripleImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  grid-template-rows: ${(props) =>
    props.landscape ? "auto" : props.portrait ? "650px" : "400px"};
  grid-gap: 10px;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const GridImgWide = styled.div`
  grid-column: span 4 / auto;
`;

export const GridImgThin = styled.div`
  grid-column: span 2 / auto;
`;

export const GridImgRegular = styled.div`
  grid-column: span 3 / auto;
`;

export const GridImgTriple = styled.div`
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
