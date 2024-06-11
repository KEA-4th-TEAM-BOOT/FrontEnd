import * as React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import ScrollToTop from "../hooks/ScrollToTop";
import logoIcon from "../assets/img/icons/logo.svg";

const footerLinks = [
  { label: "Main", url: "/" },
  { label: "Search", url: "/search" },
  { label: "Feed", url: "/feed" },
  { label: "Following", url: "/follow" },
];

const Footer = () => {
  return (
    <>
      <ScrollToTop />{" "}
      {/* 페이지 이동 시 스크롤을 맨 위로 이동시키는 컴포넌트 */}
      <FooterWrapper>
        <FooterContent>
          <FooterDescription>
            <Logo src={logoIcon} alt="Voda Logo" />
            <DescriptionText>
              사용자가 자신의 블로그에 글을 작성하면, VODA 서비스를 통해 해당
              글을 음성으로 들으실 수 있습니다.
            </DescriptionText>
          </FooterDescription>
          <FooterLinks>
            <FooterLinksTitle>Quick Link</FooterLinksTitle>
            {footerLinks.map((link) => (
              <FooterLink to={link.url} key={link.label}>
                {link.label}
              </FooterLink>
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
              <ContactText>official.voda@gmail.com</ContactText>
            </FooterContactItem>
            <SocialIcons
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b02c81b282eb4f659dd63a213afa3170e0a423d344e2b6b563e300e1ce9afd87?apiKey=a9a9d68966df47cab33790d709ea20f1&"
              alt="Social Media Icons"
            />
          </FooterContact>
        </FooterContent>
      </FooterWrapper>
    </>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 18px;
  color: #666;
  font-weight: 500;
  margin-bottom: 80px;
`;

const FooterContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  padding: 80px 200px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const FooterDescription = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 32px;
  align-items: center;
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Logo = styled.img`
  width: 180px;
  max-width: 100%;
`;

const DescriptionText = styled.p`
  font-family: Roboto, sans-serif;
  text-align: center;
  padding: 0 43px;
  margin-top: 20px;
  font-size: 17px;
`;

const FooterLinks = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const FooterLinksTitle = styled.span`
  color: #333;
  margin: 16px 0;
  font: 700 30px Roboto, sans-serif;
  text-align: center;
`;

const FooterLink = styled(NavLink)`
  font-family: Roboto, sans-serif;
  margin-top: 10px;
  text-align: center;
  color: inherit;
  text-decoration: none;
  &:first-of-type {
    margin-top: 24px;
  }
  &:hover {
    color: inherit;
  }
  &:visited {
    color: inherit;
  }
`;

const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const FooterContactTitle = styled.span`
  color: #333;
  font: 700 30px Roboto, sans-serif;
  margin: 16px 0;
  text-align: center;
`;

const FooterContactItem = styled.div`
  display: flex;
  align-items: center;
  &:first-of-type {
    margin-top: 24px;
  }
  margin-top: 8px;
`;

const ContactIcon = styled.img`
  width: 20px;
  margin-right: 20px;
`;

const ContactText = styled.span`
  font-family: Roboto, sans-serif;
`;

const SocialIcons = styled.img`
  width: 231px;
  margin-top: 25px;
  max-width: 100%;
`;
