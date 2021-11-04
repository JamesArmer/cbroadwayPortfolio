import Link from "next/link";
import React from "react";

import {
  Container,
  Div1,
  Div2,
  LogoSpan,
  NavLink,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "#000000" }}>
          <LogoSpan>Charles Broadway</LogoSpan>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/work">
          <NavLink>Work</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
  </Container>
);

export default Header;
