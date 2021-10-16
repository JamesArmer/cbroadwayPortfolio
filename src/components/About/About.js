import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents/indexStyles';

const About = () =>  (
  <Section id="about">
    <SectionDivider divider />
    <SectionTitle>About</SectionTitle>
    <SectionText>
      Industial designer based in London. <br/><br/>
      MA Industrial Design, Central Saint Martins - Current <br/>
      Design and Manufacture, University of Nottingham - First Class <br/><br/>
      Download CV
    </SectionText>
    <SectionDivider colorAlt />
  </Section>
);

export default About;
