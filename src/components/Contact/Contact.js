import React from "react";

import { LinkItem, SectionContact } from "./ContactStyles";

const Contact = () => (
  <SectionContact id="contact">
    <LinkItem href="mailto:cbroadwayid@gmail.com">
      cbroadwayid@gmail.com
    </LinkItem>
    <LinkItem href="https://www.instagram.com/cbroadway_/" target="_blank">
      @cbroadway_
    </LinkItem>
  </SectionContact>
);

export default Contact;
