import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  HeroTitle,
  HeroDiv,
  TitleDiv,
  ShortDescriptionText,
  NavLink,
  HeaderDiv,
  HeadersDiv,
  Container,
} from "./HeroStyles";

const Hero = () => (
  <Container>
    <TitleDiv>
      <HeroTitle>Charles Broadway</HeroTitle>
    </TitleDiv>
    <HeadersDiv>
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
    </HeadersDiv>
  </Container>
);

export default Hero;
