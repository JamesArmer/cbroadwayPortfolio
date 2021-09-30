import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
  LinkItem,
} from "./ContactStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const Contact = () => (
  <Section id="contact">
    <SectionTitle>Contact</SectionTitle>
    <LinkItem href="mailto:cbroadwayid@gmail.com">
      cbroadwayid@gmail.com
    </LinkItem>
    <LinkItem href="https://www.instagram.com/cbroadway_/" target="_blank">
      @cbroadway_
    </LinkItem>
    <SectionDivider />
  </Section>
);

export default Contact;
