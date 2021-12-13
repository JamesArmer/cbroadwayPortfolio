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
    <LinkItem href="https://www.linkedin.com/in/charles-broadway-ba212a115/" target="_blank">
      LinkedIn
    </LinkItem>
  </SectionContact>
);

export default Contact;
