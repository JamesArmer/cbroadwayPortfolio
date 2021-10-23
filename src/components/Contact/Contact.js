import React from "react";

import {
  LinkItem,
} from "./ContactStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents/indexStyles";

const Contact = () => (
  <Section id="contact" extraPadding>
    <SectionDivider divider/>
    <SectionTitle>Contact</SectionTitle>
    <LinkItem href="mailto:cbroadwayid@gmail.com">
      cbroadwayid@gmail.com
    </LinkItem>
    <LinkItem href="https://www.instagram.com/cbroadway_/" target="_blank">
      @cbroadway_
    </LinkItem>
  </Section>
);

export default Contact;
