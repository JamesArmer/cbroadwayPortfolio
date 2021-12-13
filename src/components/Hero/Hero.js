import Link from "next/link";
import React from "react";


import {
  HeroTitle,
  TitleDiv,
  NavLink,
  HeadersDiv,
  Container,
} from "./HeroStyles";

const Hero = () => (
  <Container>
    <TitleDiv>
      <HeroTitle>Charles Broadway</HeroTitle>
    </TitleDiv>
    <HeadersDiv>
      <headertitle>
        <Link href="/work">
          <NavLink>Work</NavLink>
        </Link>
      </headertitle>
      <headertitle>
        <Link href="/about">
          <NavLink>About</NavLink>
        </Link>
      </headertitle>
      <headertitle>
        <Link href="/contact">
          <NavLink>Contact</NavLink>
        </Link>
      </headertitle>
    </HeadersDiv>
  </Container>
);

export default Hero;
