import { Layout } from "../../layout/Layout";
import {
  CentreDiv,
  GridImgExtraWide,
  GridImgFullWidth,
  GridImgLandscape,
  LandscapeImg,
  ListItem,
  MultipleImgGrid,
  SectionQuote,
  SectionText,
  SmallLandscapeImg,
  UnorderedList,
} from "../../styles/GlobalComponents/genericWorkStyles";

const Cornetto = () => {
  return (
    <Layout>
      <CentreDiv>
        <LandscapeImg src="https://cbroadwayportfolio.azureedge.net/cornetto/Larger icon.webp" />
        <SmallLandscapeImg src="https://cbroadwayportfolio.azureedge.net/cornetto/designbridge and guardian logo.webp" />
        <SectionQuote>
          Deliver a brand-led, creative response to an article from the New
          Year’s Day edition of The Guardian. - Design Bridge
        </SectionQuote>
        <SectionQuote italic>
          “Wildlife threatened as Australia plans Antarctic mega-airport”
        </SectionQuote>
        <SectionText>
          When choosing a brand to design a response for, Cornetto presented a
          number of opportunities which could help relate a product to the
          chosen article and problem area. The form of ice cream cones
          referencing birds’ beaks, aircraft nose cones or even the tips of
          icebergs. The ice cream itself naturally could help to make a
          connection. I decided that there were sufficient connections between
          the brand and the problem area to develop this route.
        </SectionText>
        <SectionText leftAlign>
          Stand out point from the article included:
        </SectionText>
        <UnorderedList leftAlign>
          <ListItem>Increasing the human footprint by 40%</ListItem>
          <ListItem>Disturbing penguin colonies</ListItem>
          <ListItem>Blasting petrel rookeries</ListItem>
          <ListItem>
            Encasing the wilderness in 115,000 tonnes of concrete
          </ListItem>
          <ListItem>Requiring about 100 ice breaker voyages</ListItem>
        </UnorderedList>
        <LandscapeImg src="https://cbroadwayportfolio.azureedge.net/cornetto/Cornetto box.webp" />
        <SectionText>
          I wanted to design a product and pack that, together would highlight
          these points. The result of the limited-edition product is a lamington
          cake flavour Cornetto with greater chocolate covering on the outside
          of the cone and less ice cream inside. Lamington cake was chosen
          because it is the national cake of Australia. The increased covering
          of the chocolate on the cone refers to the increased footprint of
          humans on Antarctica, the encasing of the wilderness in concrete and
          it also means it will also be very difficult to eat without leaving a
          mess on the users’ hands – much like the problem we may have on our
          hands if these plans for the airport go ahead. The decreased ice cream
          content is referencing not only the reducing ice coverage of the
          content but also the potentially reduced amount of wildlife as a
          result of the airport construction.
          <br/><br/>
          The box containing the Cornetto’s has references to the Australian
          flag and displays the limited-edition ice creams as well as a melting
          Antarctica icon which states “more coverage, less ice cream”.
        </SectionText>
        <SectionQuote large extraPadding noPadding>
          Packaging
        </SectionQuote>
        <SectionText>
          The packaging of this limited-edition Cornetto could be used in
          several ways to communicate the issues presented by the article. I did
          not want the response to be purely visual, but also interactive, to
          allow the user to gain a greater understanding or interest to
          interrogate the issue communicated.
        </SectionText>
        <SectionText>
          To design for this, I bought some Cornetto’s and mapped out the use
          process. This revealed methods of opening the cone wrapper which would
          or would not work in practice. The result of this design process is a
          wrapper showing a visual representation of Antarctica which takes the
          form of the Cornetto heart, on this there is a colony of Adelie
          penguins and splitting down the middle of all of this is a
          representation of a runway.
        </SectionText>
        <SectionText>
          To open the wrapper the user pulls down the runway which tears the
          paper, revealing a chocolate coat (concrete) instead of ice cream.
          This tearing motion also creates a split in the heart and the
          separation of the penguin colony.
        </SectionText>
        <LandscapeImg src="https://cbroadwayportfolio.azureedge.net/cornetto/Paper wrapper test.webp" />
        <LandscapeImg src="https://cbroadwayportfolio.azureedge.net/cornetto/Wrapper design.webp" />
        <LandscapeImg src="https://cbroadwayportfolio.azureedge.net/cornetto/cornetto in hand.webp" />
        <MultipleImgGrid landscape noGridGap>
          <GridImgExtraWide>
            <GridImgLandscape src="https://cbroadwayportfolio.azureedge.net/cornetto/process 1.webp" />
          </GridImgExtraWide>
          <GridImgExtraWide>
            <GridImgLandscape src="https://cbroadwayportfolio.azureedge.net/cornetto/process 2.webp" />
          </GridImgExtraWide>
          <GridImgExtraWide>
            <GridImgLandscape src="https://cbroadwayportfolio.azureedge.net/cornetto/process 3.webp" />
          </GridImgExtraWide>
          <GridImgExtraWide>
            <GridImgLandscape src="https://cbroadwayportfolio.azureedge.net/cornetto/process 4.webp" />
          </GridImgExtraWide>
          <GridImgExtraWide>
            <GridImgLandscape src="https://cbroadwayportfolio.azureedge.net/cornetto/process 5.webp" />
          </GridImgExtraWide>
          <GridImgExtraWide>
            <GridImgLandscape src="https://cbroadwayportfolio.azureedge.net/cornetto/process 6.webp" />
          </GridImgExtraWide>
          <GridImgExtraWide>
            <GridImgLandscape src="https://cbroadwayportfolio.azureedge.net/cornetto/process 7.webp" />
          </GridImgExtraWide>
          <GridImgExtraWide>
            <GridImgLandscape src="https://cbroadwayportfolio.azureedge.net/cornetto/process 8.webp" />
          </GridImgExtraWide>
          <GridImgFullWidth>
            <GridImgLandscape src="https://cbroadwayportfolio.azureedge.net/cornetto/process 9.webp" />
          </GridImgFullWidth>
        </MultipleImgGrid>
        <SectionQuote large extraPadding>Advertising</SectionQuote>
        <LandscapeImg src="https://cbroadwayportfolio.azureedge.net/cornetto/Messy advert.webp" />
        <LandscapeImg src="https://cbroadwayportfolio.azureedge.net/cornetto/Just one advert.webp" />
      </CentreDiv>
    </Layout>
  );
};

export default Cornetto;
