import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Charles Broadway
        </SectionTitle>
        <SectionText>
          Je suis design
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;