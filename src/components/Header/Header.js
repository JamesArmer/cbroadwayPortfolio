import Link from "next/link";
import React from "react";

import {
  Container,
  LinksDiv,
  LogoSpan,
  NavLink,
  NavListItem,
  TitleDiv,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <TitleDiv>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "#000000" }}>
          <LogoSpan>Charles Broadway</LogoSpan>
        </a>
      </Link>
    </TitleDiv>
    <LinksDiv>
      <NavListItem>
        <Link href="/work">
          <NavLink>Work</NavLink>
        </Link>
      </NavListItem>
      <NavListItem>
        <Link href="/about">
          <NavLink>About</NavLink>
        </Link>
      </NavListItem>
      <NavListItem>
        <Link href="/contact">
          <NavLink>Contact</NavLink>
        </Link>
      </NavListItem>
    </LinksDiv>
  </Container>
);

export default Header;
