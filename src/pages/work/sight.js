import { Layout } from "../../layout/Layout";
import {
  CentreDiv,
  GridImgLandscape,
  GridImgPortrait,
  GridImgRegular,
  GridImgTriple,
  GridImgWide,
  LandscapeImg,
  ListItem,
  SectionQuote,
  SectionText,
  SectionTitle,
  SplitImgGrid,
  MultipleImgGrid,
  UnorderedList,
  OrderedList,
  ListDiv,
  UnevenSightImgGrid,
  LandscapeVideoDiv,
} from "../../styles/GlobalComponents/genericWorkStyles";
import LandscapePlayer from "../../styles/GlobalComponents/VideoPlayers/LandscapePlayer";

const Sight = () => {
  return (
    <Layout>
      <CentreDiv>
        <LandscapeImg src="https://cbroadwayportfolio.azureedge.net/sight/Context hero.webp" />
        <SectionTitle>SIGHT</SectionTitle>
        <SectionQuote>Increasing independence within the home.</SectionQuote>
        <SectionText>
          Data provided by the UK Home Office highlights that the group and
          situation when there is the greatest risk of fire within the home is
          when the elderly are cooking unassisted.
          <br/><br/>
          With any fire, early detection and suppression is essential for damage
          reduction. This means that it would be beneficial to use technology
          which is faster than both a smoke detector and a frangible bulb used
          in a sprinkler system.
          <br/><br/>
          Although effective, existing automated domestic systems are not widely
          adopted because they can be expensive, obtrusive and difficult to
          retrofit. This is where the brief was found.
        </SectionText>
        <LandscapeImg src="https://cbroadwayportfolio.azureedge.net/sight/Firemen.webp" />
        <SectionText extraBottomPadding extraTopPadding>
          Research into the fastest technology for fire detection and
          suppression resulted in the use of flame detector and a replaceable
          aerosol suppressant.
        </SectionText>
        <LandscapeVideoDiv>
          <LandscapePlayer url="https://www.youtube.com/watch?v=OL6ACq_g2yc" />
        </LandscapeVideoDiv>
        <LandscapeImg src="https://cbroadwayportfolio.azureedge.net/sight/Sketch work.webp" />
        <MultipleImgGrid landscape>
          <GridImgTriple>
            <GridImgLandscape src="https://cbroadwayportfolio.azureedge.net/sight/model 1.webp" />
          </GridImgTriple>
          <GridImgTriple>
            <GridImgLandscape src="https://cbroadwayportfolio.azureedge.net/sight/model scales.webp" />
          </GridImgTriple>
          <GridImgTriple>
            <GridImgLandscape src="https://cbroadwayportfolio.azureedge.net/sight/model in hand.webp" />
          </GridImgTriple>
        </MultipleImgGrid>
        <SectionText extraTopPadding extraBottomPadding>
          The design was reduced to only essential features to ensure it is as
          simple to interact with in high stress situations and is intuitive for
          the target audience.
        </SectionText>
        <LandscapeImg src="https://cbroadwayportfolio.azureedge.net/sight/Installation.webp" />
        <UnevenSightImgGrid>
          <GridImgRegular>
            <GridImgPortrait src="https://cbroadwayportfolio.azureedge.net/sight/Hand adjusting.webp" />
          </GridImgRegular>
          <GridImgWide>
            <GridImgPortrait src="https://cbroadwayportfolio.azureedge.net/sight/button depressed.webp" />
          </GridImgWide>
        </UnevenSightImgGrid>
        <SectionQuote noPadding large>
          Sequence
        </SectionQuote>
        <LandscapeImg src="https://cbroadwayportfolio.azureedge.net/sight/Story line of use.webp" />
        <SplitImgGrid landscape>
          <GridImgRegular>
            <GridImgLandscape src="https://cbroadwayportfolio.azureedge.net/sight/yellow light.webp" />
          </GridImgRegular>
          <GridImgRegular>
            <GridImgLandscape src="https://cbroadwayportfolio.azureedge.net/sight/red light.webp" />
          </GridImgRegular>
        </SplitImgGrid>
        <SectionText extraBottomPadding extraTopPadding>
          The refinement of features resulted in an interface consisting of:
          manual actuation button, cancel actuation button, ON/OFF button for
          the alignment spotlight and warning lights and alarm.
        </SectionText>
        <LandscapeImg src="https://cbroadwayportfolio.azureedge.net/sight/Buttons.webp" />
        <SectionQuote noPadding extraPadding large>
          Features
        </SectionQuote>
        <ListDiv>
          <UnorderedList noStyle leftAlign>
            <ListItem first>Dual IR flame detector</ListItem>
            <ListItem>Temperature sensor</ListItem>
            <ListItem>Alarms</ListItem>
            <ListItem>Warning lights</ListItem>
            <ListItem>Replaceable battery</ListItem>
            <ListItem>Electrically actuated</ListItem>
            <ListItem>450ml Potassium acetate canister</ListItem>
            <ListItem last>Vacuum insulated flask</ListItem>
          </UnorderedList>
        </ListDiv>
        <LandscapeImg src="https://cbroadwayportfolio.azureedge.net/sight/Opened canister.webp" />
        <LandscapeImg src="https://cbroadwayportfolio.azureedge.net/sight/Colourways.webp" />
        <LandscapeImg src="https://cbroadwayportfolio.azureedge.net/sight/exploded.webp" />
        <SectionQuote noPadding large>
          Components
        </SectionQuote>
        <ListDiv>
          <OrderedList leftAlign>
            <ListItem first>Frame</ListItem>
            <ListItem>Insulated Canister Flask</ListItem>
            <ListItem>450ml Potassium Acetate Canister</ListItem>
            <ListItem>Silicone O Ring</ListItem>
            <ListItem>Main Component Housing</ListItem>
            <ListItem>PC LED Covers</ListItem>
            <ListItem>Control Buttons</ListItem>
            <ListItem>Internal Components</ListItem>
            <ListItem last>Component Housing Lid</ListItem>
          </OrderedList>
        </ListDiv>
        <LandscapeImg src="https://cbroadwayportfolio.azureedge.net/sight/orthographics.webp" />
      </CentreDiv>
    </Layout>
  );
};

export default Sight;
