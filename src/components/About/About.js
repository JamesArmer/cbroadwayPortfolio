import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './AboutStyles';

const About = () =>  (
  <Section id="about">
    <SectionDivider divider />
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
      Industial designer based in London. <br/><br/>
      MA Industrial Design, Central Saint Martins - Current <br/>
      Design and Manufacture, University of Nottingham - First Class <br/>
      Download CV
    </SectionText>
    <SectionDivider colorAlt />
  </Section>
);

export default About;
