import Link from "next/link";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/react";

export default function Footer () {
  const FooterWrapper = styled.footer`
    display: flex;
    height: fit-content;
    align-items: center;
    flex-direction: column;
    background: black;
  `;

  const SocialLinks = styled.div`
    display: flex;
    justify-content: space-between;
    background-size: cover;
    width: 20em;
    margin: 0.5rem auto;
  `;

  const SocialIcon = styled.img`
    background: #fef001;
    padding: .5em;
    width: 2.5em;
    height: 2.5em;
  `;

  const FooterLogo = styled.img`
    width: 25em;
    margin: 1rem auto;
  `;

  const FooterPageLinks = styled.div`
    display: flex;
    justify-content: space-between;
    width: 20em;
    margin: 0.5rem auto;
    align-items: center;
  `;

  const LinksWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    margin-top: .75em;
    margin-bottom: .5em;
    width: 50%;
    min-width: 23em;
    border: 2px solid #fef001;
    justify-content: space-between;
  `;

  return (
    <FooterWrapper>
      <FooterLogo src="/wiha-logos/logo-horizontal.png" alt="WIHA" />
      <LinksWrapper>
        <FooterPageLinks>
          <Link href="/">
            <Button variantColor="yellow" variant="link">Home</Button>
          </Link>
          <Link href="/play">
            <Button variantColor="yellow" variant="link">Play</Button>
          </Link>
          <Link href="/about">
            <Button variantColor="yellow" variant="link">About</Button>
          </Link>
          <Link href="/blog">
            <Button variantColor="yellow" variant="link">Blog</Button>
          </Link>
          <Link href="/contact">
            <Button variantColor="yellow" variant="link">Contact</Button>
          </Link>
        </FooterPageLinks>

        <SocialLinks>
          <a title="facebook" href="https://www.facebook.com/wellingtonicehockeyassociation/">
            <SocialIcon src="/social-icons/facebook.svg" alt="Facebook" />
          </a>
          <a title="twitter" href="https://twitter.com">
            <SocialIcon className="fas fa-lg" src="/social-icons/twitter.svg" alt="Twitter" />
          </a>
          <a title="instagram" href="https://www.instagram.com/wellingtonicehockey/">
            <SocialIcon src="/social-icons/instagram.svg" alt="Instagram" />
          </a>
          <a title="youtube" href="https://www.youtube.com/channel/UCzk1ai4cv3z95OmquetMujg">
            <SocialIcon src="/social-icons/youtube.svg" alt="Youtube" />
          </a>
          <a
            title="github"
            href="https://github.com/mischa-s/wiha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src="/social-icons/github.svg" alt="Github" />
          </a>
        </SocialLinks>
      </LinksWrapper>
    </FooterWrapper>
  );
};