import React from "react";
import { SectionText } from "../../styles/GlobalComponents/indexStyles";
import { CVLink, SectionAbout } from "./AboutStyles";

const About = () => (
  <SectionAbout id="about">
    <SectionText noPadding>
      Industial designer based in London. <br />
      <br />
      MA Industrial Design, Central Saint Martins - Current <br />
      BEng(Hons) Product Design & Manufacture, University of Nottingham - First Class <br />
    </SectionText>
    <SectionText small noPadding>
      <CVLink href="/documents/C Broadway CV.pdf" download>
        Download CV
      </CVLink>
    </SectionText>
  </SectionAbout>
);

export default About;
