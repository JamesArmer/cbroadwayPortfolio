import React from 'react';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { CompanyContainer, FooterWrapper, Slogan, SocialContainer, SocialIconsContainer, SocialIcons } from './FooterStyles';
import { SectionDivider } from '../../styles/GlobalComponents/indexStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionDivider />
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://www.linkedin.com/in/charles-broadway-ba212a115/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/cbroadway_/" target="_blank">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
