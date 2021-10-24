import { Layout } from "../../layout/Layout";
import {
  CentreDiv,
  SquareImg,
  GridImgLandscape,
  GridImgPortrait,
  GridImgRegular,
  GridImgThin,
  GridImgWide,
  LandscapeImg,
  LandscapeVideo,
  SectionQuote,
  SectionText,
  SectionTitle,
  SplitImgGrid,
  GridVideoPortrait,
  GridVideoLandscape,
} from "../../styles/GlobalComponents/genericWorkStyles";

const FiveGXLiFi = () => {
  return (
    <Layout>
      <CentreDiv>
        <LandscapeImg src="/images/5G X LiFi/Images/Hero 2 Friday.jpg" />
        <SectionTitle>5G X LiFi</SectionTitle>
        <SectionQuote italic>
          “Design the router of the future, made possible by 5G” - Three UK
        </SectionQuote>
        <SectionText>
          This design stems from the observation that as our internet
          connections become stronger, our meaningful connections become weaker.
        </SectionText>
        <SectionText>
          Throughout our evolution, light has been a key factor in bringing
          people together. We could effectively and beneficially incorporate
          light into a 5G router through the use of LiFi technology.
        </SectionText>
        <SectionText>
          It was therefore thought that this router could encourage the notion
          of bringing people together both physically and digitally. Becoming a
          hub for the home, both online and offline.
        </SectionText>
        <SectionText>
          This theme is reflected in the form through the metaphor of resting
          birds.
        </SectionText>
        <LandscapeImg src="/images/5G X LiFi/Images/Bird Sketches.png" />
        <SplitImgGrid portrait>
          <GridImgThin>
            <GridImgPortrait src="/images/5G X LiFi/Images/Lamp Close up-1.jpg" />
          </GridImgThin>
          <GridImgWide>
            <GridImgPortrait src="/images/5G X LiFi/Images/Birds on wire.png" />
          </GridImgWide>
        </SplitImgGrid>
        <SectionText>
          An initial model was made to highlight areas for development in the
          design and to help better understand the interactions users would have
          with their router. This was done by considering the use in a number of
          different scenarios. Performance was beneficial in highlighting
          exactly what features were needed. For example, this resulted in the
          integration of a remote sound function for when a lamp is misplaced
          within the home.
        </SectionText>
        <SplitImgGrid landscape>
          <GridImgRegular>
            <GridImgLandscape src="/images/5G X LiFi/Images/DSC_0688.jpg" />
          </GridImgRegular>
          <GridImgRegular>
            <GridImgLandscape src="/images/5G X LiFi/Images/DSC_0705.jpg" />
          </GridImgRegular>
        </SplitImgGrid>
        <SectionText>
          The form and features were refined and developed. The individual lamps
          or ‘birds’ can be used both on the tree or removed for use elsewhere
          in the home with a secure LiFi connection. They can be positioned in
          any number of arrangements on the ‘tree’ thanks to magnetic charging
          connections. The shades can rotate allowing the user to light their
          environment as they wish and direct their LiFi connection.
        </SectionText>
        <LandscapeVideo
          poster="/images/5G X LiFi/Video/Interim Video Thumbnail.png"
          controls
        >
          <source
            src="/images/5G X LiFi/Video/5G X LiFi interim video.mp4"
            type="video/mp4"
          />
        </LandscapeVideo>
        <SectionText>
          A film in the early stage of the design process, remotely presenting
          the concept direction to the client during a COVID-19 lockdown.
        </SectionText>
        <LandscapeImg src="/images/5G X LiFi/Images/Bird evolution.png" />
        <SectionText>
          The lamps house components for LiFi in a durable Polycarbonate ABS
          blend, this includes LED’s, antenna, a speaker, magnets and a charging
          connection. The components have been strategically positioned for
          weight distribution and access to the battery so that it can easily be
          replaced.
        </SectionText>
        <LandscapeImg src="/images/5G X LiFi/Images/Lamp in Hand.jpg" />
        <SplitImgGrid landscape>
          <GridImgRegular>
            <GridImgLandscape src="/images/5G X LiFi/Images/adjust1.png" />
          </GridImgRegular>
          <GridImgRegular>
            <GridImgLandscape src="/images/5G X LiFi/Images/adjust2.png" />
          </GridImgRegular>
        </SplitImgGrid>
        <SquareImg src="/images/5G X LiFi/Video/Square LiFi 5G.gif" />
        <SplitImgGrid>
          <GridImgThin>
            <GridVideoLandscape controls>
              <source
                src="/images/5G X LiFi/Video/Square Removing Lamp.mp4"
                type="video/mp4"
              />
            </GridVideoLandscape>
          </GridImgThin>
          <GridImgRegular>
            <GridVideoLandscape controls>
              <source
                src="/images/5G X LiFi/Video/Switching Lamp on.mp4"
                type="video/mp4"
              />
            </GridVideoLandscape>
          </GridImgRegular>
        </SplitImgGrid>
        <SplitImgGrid>
          <GridImgRegular>
            <GridImgLandscape src="/images/5G X LiFi/Images/Holding Lamp 2.jpg" />
          </GridImgRegular>
          <GridImgThin>
            <GridImgLandscape src="/images/5G X LiFi/Images/removed lifi conected.png" />
          </GridImgThin>
        </SplitImgGrid>
        <SectionText>
          LiFi is a wireless communication technology that uses the infrared and
          visible light spectrum for high-speed-data communication.
        </SectionText>
        <SectionQuote noPadding>Why is LiFi useful?</SectionQuote>
        <SectionText>
          There are key security advantages. Access to the internet is only
          granted where the light can reach, meaning that people outside of the
          room are not able to eavesdrop on the user which can help relieve
          anxieties when performing tasks such as online banking.
        </SectionText>
        <SectionText>
          The wireless industry and lighting industry will soon merge as these
          technologies together can address the need for enhanced indoor
          coverage by realising a dual-purpose system providing both
          illumination and communication.
        </SectionText>
      </CentreDiv>
    </Layout>
  );
};

export default FiveGXLiFi;
