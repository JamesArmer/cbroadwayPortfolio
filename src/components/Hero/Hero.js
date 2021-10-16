import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents/indexStyles';
import { LeftSection, ShortDescriptionText } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Charles Broadway
        </SectionTitle>
        <ShortDescriptionText>
          Je suis design
        </ShortDescriptionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;