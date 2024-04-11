import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Main", url: "/" },
  { label: "Search", url: "/search" },
  { label: "Feed", url: "/feed" },
  { label: "Following", url: "/following" },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterDescription>
          <Logo
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/50b4a1227f4c0fcc1e84e9b9a61c9fe0954f65ea2122fd2f6fb605753ffadc1d?apiKey=a9a9d68966df47cab33790d709ea20f1&"
            alt="Auda Logo"
          />
          <DescriptionText>
            사용자가 자신의 블로그에 글을 작성하면, Auda 서비스
            <br />를 통해 해당 글을 음성으로 들을 수 있습니다. 글 뿐만 아
            <br /> 니라, 사진과 동영상도 음성으로 설명해줍니다.
            <br />
          </DescriptionText>
        </FooterDescription>
        <FooterLinks>
          <FooterLinksTitle>Quick Link</FooterLinksTitle>
          {footerLinks.map((link) => (
            <FooterLink to={link.url}>{link.label}</FooterLink>
          ))}
        </FooterLinks>
        <FooterContact>
          <FooterContactTitle>Information</FooterContactTitle>
          <FooterContactItem>
            <ContactIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c5b8461d2e64a9206a01483d290d1eb8123b1055a0da5c495b2dbe1647bf503?apiKey=a9a9d68966df47cab33790d709ea20f1&"
              alt="Phone Icon"
            />
            <ContactText>02-1234-1234</ContactText>
          </FooterContactItem>
          <FooterContactItem>
            <ContactIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/92b8881bfc19871b474955c54eae889f65274d77386918d90957f89c34466e3b?apiKey=a9a9d68966df47cab33790d709ea20f1&"
              alt="Email Icon"
            />
            <ContactText>official.auda@gmail.com</ContactText>
          </FooterContactItem>
          <SocialIcons
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b02c81b282eb4f659dd63a213afa3170e0a423d344e2b6b563e300e1ce9afd87?apiKey=a9a9d68966df47cab33790d709ea20f1&"
            alt="Social Media Icons"
          />
        </FooterContact>
      </FooterContent>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 18px;
  color: #666;
  font-weight: 500;
  margin-bottom: 120px;
`;

const FooterContent = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(19, 124, 255, 0.2) 71.66%
  );
  display: flex;
  width: 100%;
  align-items: start;
  gap: 20px;
  justify-content: space-between;
  padding: 80px 75px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const FooterDescription = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 32px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Logo = styled.img`
  width: 102px;
  max-width: 100%;
`;

const DescriptionText = styled.p`
  font-family: Roboto, sans-serif;
  margin-top: 59px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FooterLinks = styled.nav`
  display: flex;
  margin-top: 9px;
  flex-direction: column;
`;

const FooterLinksTitle = styled.h3`
  color: #333;
  font: 700 28px Roboto, sans-serif;
`;

const FooterLink = styled(Link)`
  font-family: Roboto, sans-serif;
  margin-top: 18px;

  &:first-of-type {
    margin-top: 64px;
  }

  @media (max-width: 991px) {
    &:first-of-type {
      margin-top: 40px;
    }
  }
`;

const FooterContact = styled.div`
  display: flex;
  margin-top: 9px;
  flex-direction: column;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const FooterContactTitle = styled.h3`
  color: #333;
  font: 700 28px Roboto, sans-serif;
`;

const FooterContactItem = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 36px;

  &:first-of-type {
    margin-top: 61px;
  }

  @media (max-width: 991px) {
    white-space: initial;

    &:first-of-type {
      margin-top: 40px;
    }
  }
`;

const ContactIcon = styled.img`
  width: 23px;
`;

const ContactText = styled.span`
  font-family: Roboto, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const SocialIcons = styled.img`
  width: 231px;
  margin-top: 36px;
  max-width: 100%;
`;

export default Footer;
