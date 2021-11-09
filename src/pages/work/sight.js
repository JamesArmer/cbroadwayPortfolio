import { Layout } from "../../layout/Layout";
import {
  CentreDiv,
  GridImgLandscape,
  GridImgPortrait,
  GridImgRegular,
  GridImgThin,
  GridImgTriple,
  GridImgWide,
  LandscapeImg,
  LandscapeVideo,
  ListItem,
  SectionQuote,
  SectionText,
  SectionTitle,
  SplitImgGrid,
  MultipleImgGrid,
  UnorderedList,
  OrderedList,
  ListDiv,
} from "../../styles/GlobalComponents/genericWorkStyles";

const Sight = () => {
  return (
    <Layout>
      <CentreDiv>
        <LandscapeImg src="/images/Sight/Images/Context Hero.png" />
        <SectionTitle>SIGHT</SectionTitle>
        <SectionQuote>Increasing independence within the home.</SectionQuote>
        <SectionText>
          Data provided by the UK Home Office highlights that the group and
          situation when there is the greatest risk of fire within the home is
          when the elderly are cooking unasisted.
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
        <LandscapeImg src="/images/Sight/Images/Firemen.png" />
        <SectionText extraBottomPadding extraTopPadding>
          Research into the fastest technology for fire detection and
          suppression resulted in the use of flame detector and a replaceable
          aerosol suppressant.
        </SectionText>
        <LandscapeVideo controls>
          <source src="/images/Sight/Videos/Arduino Vid for website.mov" />
        </LandscapeVideo>
        <LandscapeImg src="/images/Sight/Images/Sketch work.png" />
        <MultipleImgGrid landscape>
          <GridImgTriple>
            <GridImgLandscape src="/images/Sight/Images/model 1.png" />
          </GridImgTriple>
          <GridImgTriple>
            <GridImgLandscape src="/images/Sight/Images/model scales.png" />
          </GridImgTriple>
          <GridImgTriple>
            <GridImgLandscape src="/images/Sight/Images/model in hand.png" />
          </GridImgTriple>
        </MultipleImgGrid>
        <SectionText extraTopPadding extraBottomPadding>
          The design was reduced to only essential features to ensure it is as
          simple to interact with in high stress situations and is intuitive for
          the target audience.
        </SectionText>
        <LandscapeImg src="/images/Sight/Images/Installation.png" />
        <SplitImgGrid>
          <GridImgThin>
            <GridImgPortrait src="/images/Sight/Images/Hand adjusting.png" />
          </GridImgThin>
          <GridImgWide>
            <GridImgPortrait src="/images/Sight/Images/button depressed.png" />
          </GridImgWide>
        </SplitImgGrid>
        <SectionQuote noPadding large>
          Sequence
        </SectionQuote>
        <LandscapeImg src="/images/Sight/Images/Story line of use.png" />
        <SplitImgGrid landscape>
          <GridImgRegular>
            <GridImgLandscape src="/images/Sight/Images/yellow light.png" />
          </GridImgRegular>
          <GridImgRegular>
            <GridImgLandscape src="/images/Sight/Images/red light.png" />
          </GridImgRegular>
        </SplitImgGrid>
        <SectionText extraBottomPadding extraTopPadding>
          The refinement of features resulted in an interface consisting of:
          manual actuation button, cancel actuation button, ON/OFF button for
          the alignment spotlight and warning lights and alarm.
        </SectionText>
        <LandscapeImg src="/images/Sight/Images/Buttons.png" />
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
        <LandscapeImg src="/images/Sight/Images/Opened canister.png" />
        <LandscapeImg src="/images/Sight/Images/Colourways.png" />
        <LandscapeImg src="/images/Sight/Images/Exploded.png" />
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
        <LandscapeImg src="/images/Sight/Images/orthographics.png" />
      </CentreDiv>
    </Layout>
  );
};

export default Sight;
