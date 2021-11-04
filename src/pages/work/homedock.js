import { Layout } from "../../layout/Layout";
import {
  CentreDiv,
  GridImgExtraWide,
  GridImgLandscape,
  GridImgPortrait,
  GridImgRegular,
  GridImgThin,
  GridImgTriple,
  GridImgWide,
  LandscapeImg,
  ListDiv,
  ListItem,
  MultipleImgGrid,
  OrderedList,
  PortraitImgGrid,
  SectionQuote,
  SectionText,
  SectionTitle,
  SplitImgGrid,
  UnorderedList,
} from "../../styles/GlobalComponents/genericWorkStyles";

const HomeDock = () => {
  return (
    <Layout>
      <CentreDiv>
        <LandscapeImg src="/images/Home Dock/Images/Context.png" />
        <SectionTitle>Home Dock</SectionTitle>
        <SectionQuote>
          “Design a home EV charger for the UK market”
        </SectionQuote>
        <SectionText>
          This project began by looking into cable management and what methods
          of storage would be easiest for the user to live with. Different
          methods of storage were tested and it was decided that if the cable
          wrapped around the charger it would have less chance to get tangled
          and would also require less overall material for the storage. Material
          selection was carefully considered, looking into the most sustainable
          options including glass and sustainably sourced timber.
        </SectionText>
        <PortraitImgGrid portrait>
          <GridImgRegular noFlex>
            <GridImgPortrait src="/images/Home Dock/Images/bucket 1.png" />
          </GridImgRegular>
          <GridImgThin noFlex>
            <GridImgPortrait src="/images/Home Dock/Images/bucket 2.png" />
          </GridImgThin>
          <GridImgThin noFlex>
            <GridImgPortrait src="/images/Home Dock/Images/bucket 3.png" />
          </GridImgThin>
          <GridImgRegular noFlex>
            <GridImgPortrait src="/images/Home Dock/Images/Hanging.png" />
          </GridImgRegular>
          <GridImgThin noFlex>
            <GridImgPortrait src="/images/Home Dock/Images/hanging 2.png" />
          </GridImgThin>
          <GridImgThin noFlex>
            <GridImgPortrait src="/images/Home Dock/Images/hanging 3.png" />
          </GridImgThin>
        </PortraitImgGrid>
        <LandscapeImg src="/images/Home Dock/Images/Concepts 1.png" />
        <LandscapeImg src="/images/Home Dock/Images/Concept 2.png" />
        <LandscapeImg src="/images/Home Dock/Images/Sketching 2.png" />
        <SectionQuote large extraPadding>
          Plug
        </SectionQuote>
        <SectionText>
          The plug is one of the few contact points the user has with the
          charger. I wanted it to be as simple and comfortable as possible. I
          tested different grip positions and learned that the plug with a
          handle at an angle resulted in a far more comfortable position when
          reaching the waist height and below positions of most sockets on EV’s.
        </SectionText>
        <SectionText>
          Polymer use across the design was refined to key areas to meet
          electrical standards. The plug is injection moulded in two halves,
          sandwiching components like the magnets which hold it onto the side of
          the charger.
        </SectionText>
        <MultipleImgGrid landscape>
          <GridImgWide>
            <GridImgLandscape src="/images/Home Dock/Images/plug model 1.png" />
          </GridImgWide>
          <GridImgWide>
            <GridImgLandscape src="/images/Home Dock/Images/plug model 2.png" />
          </GridImgWide>
          <GridImgWide>
            <GridImgLandscape src="/images/Home Dock/Images/plug model 3.png" />
          </GridImgWide>
          <GridImgWide>
            <GridImgLandscape src="/images/Home Dock/Images/plug model 4.png" />
          </GridImgWide>
          <GridImgWide>
            <GridImgLandscape src="/images/Home Dock/Images/plug model 5.png" />
          </GridImgWide>
          <GridImgWide>
            <GridImgLandscape src="/images/Home Dock/Images/plug model 6.png" />
          </GridImgWide>
        </MultipleImgGrid>
        <LandscapeImg src="/images/Home Dock/Images/plug renders.png" />
        <LandscapeImg src="/images/Home Dock/Images/sketch assembly.png" />
        <SectionQuote large extraPadding>
          Manufacture
        </SectionQuote>
        <SectionText>
          The elongated form of the EV charger is to optimise the use of
          available wall space and palletisation. The outer casings are water
          jet cut and then pressed from recycled aluminium. The backplate with
          the components mounted to it, screws to the wall and the front casing
          fits over, secured by screws top and bottom. This ensures assembly and
          installation is very easy and components are still accessible should
          they need replacing.
        </SectionText>
        <LandscapeImg src="/images/Home Dock/Images/Hero.png" />
        <LandscapeImg src="/images/Home Dock/Images/Exploded.png" />
        <SectionQuote large noPadding>
          Components
        </SectionQuote>
        <ListDiv wide>
          <OrderedList leftAlign>
            <ListItem>Plug Body</ListItem>
            <ListItem>Plug Cap</ListItem>
            <ListItem>Plug Magnet</ListItem>
            <ListItem>Accoya Timber Slats</ListItem>
            <ListItem>Aluminium Casing</ListItem>
            <ListItem>5m Tethered Cable</ListItem>
            <ListItem>LED & Bracket</ListItem>
            <ListItem>IP65 Rated Polycarbonate Door</ListItem>
            <ListItem>Internal Cables & IP65 Rated Glands</ListItem>
            <ListItem>IP65 Rated Polycarbonate Component Housing</ListItem>
            <ListItem>Magnet</ListItem>
            <ListItem>Aluminium Back Casing</ListItem>
          </OrderedList>
        </ListDiv>
        <SplitImgGrid>
          <GridImgWide>
            <GridImgLandscape src="/images/Home Dock/Images/Logo close up.png" />
          </GridImgWide>
          <GridImgThin>
            <GridImgLandscape src="/images/Home Dock/Images/RCB close up.png" />
          </GridImgThin>
        </SplitImgGrid>
        <SplitImgGrid>
          <GridImgRegular>
            <GridImgLandscape src="/images/Home Dock/Images/Light close up.png" />
          </GridImgRegular>
          <GridImgRegular>
            <GridImgLandscape src="/images/Home Dock/Images/Underside.png" />
          </GridImgRegular>
        </SplitImgGrid>
        <SectionQuote large extraPadding>
          Features
        </SectionQuote>
        <ListDiv>
          <UnorderedList noStyle leftAlign>
            <ListItem>Engraved logo</ListItem>
            <ListItem>Notification light</ListItem>
            <ListItem>Access to RCBO</ListItem>
            <ListItem>Venting</ListItem>
            <ListItem>Magnetic plug hold</ListItem>
            <ListItem>Mobile connectivity</ListItem>
            <ListItem>5m tethered cable</ListItem>
            <ListItem>600 x 150 x 110mm</ListItem>
          </UnorderedList>
        </ListDiv>
        <ListDiv wide>
          <SectionQuote large extraPadding>
            Sustainability
          </SectionQuote>
          <OrderedList leftAlign>
            Key Strategies used:
            <br />
            <br />
            <ListItem extraPadding>
              Reduce amount of material used and use sustainably sourced
              materials which can be recycled where possible
            </ListItem>
            <ListItem extraPadding>
              Design for palletisation and minimise wasted space during
              transportation
            </ListItem>
            <ListItem extraPadding>
              Design for disassembly and ensure that component finishing allows
              for end of life recycling
            </ListItem>
            <ListItem extraPadding>
              Design the charger to use as little energy as possible during its
              life
            </ListItem>
            <ListItem extraPadding>
              Manufacture all components in Europe to reduce the impact of
              transportation. Both the intended market and Accoya manufacturing
              is in Europe
            </ListItem>
          </OrderedList>
        </ListDiv>
        <LandscapeImg src="/images/Home Dock/Images/sustainability curve.png" />
      </CentreDiv>
    </Layout>
  );
};

export default HomeDock;
