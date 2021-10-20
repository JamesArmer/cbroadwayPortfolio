import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"#000000" }}>
          <DiCssdeck size="3rem" /> <span>Charles Broadway</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/#work">
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
      <Div3>
        <SocialIcons href="https://www.linkedin.com/in/charles-broadway-ba212a115/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/cbroadway_/" target="_blank">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
