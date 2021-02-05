import Link from 'next/link';
import styled from '@emotion/styled';
import { Button, Link as ExternalLink } from '@chakra-ui/react';

export default function Footer() {
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
    padding: 0.5em;
    width: 2.5em;
    height: 2.5em;
  `;

  const FooterLogo = styled.img`
    width: 25em;
    margin: auto;
    padding: 1rem;
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
    margin-top: 0.75em;
    margin-bottom: 0.5em;
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
            <Button colorScheme="wiha" variant="link">
              Home
            </Button>
          </Link>
          <Link href="/play">
            <Button colorScheme="wiha" variant="link">
              Play
            </Button>
          </Link>
          <Link href="/about">
            <Button colorScheme="wiha" variant="link">
              About
            </Button>
          </Link>
          <Link href="/news">
            <Button colorScheme="wiha" variant="link">
              News
            </Button>
          </Link>
          <Link href="/contact">
            <Button colorScheme="wiha" variant="link">
              Contact
            </Button>
          </Link>
        </FooterPageLinks>

        <SocialLinks>
          <ExternalLink
            title="facebook"
            href="https://www.facebook.com/wellingtonicehockeyassociation/"
          >
            <SocialIcon src="/social-icons/facebook.svg" alt="Facebook" />
          </ExternalLink>
          <ExternalLink
            title="instagram"
            href="https://www.instagram.com/wellingtonicehockey/"
          >
            <SocialIcon src="/social-icons/instagram.svg" alt="Instagram" />
          </ExternalLink>
          <ExternalLink
            title="youtube"
            href="https://www.youtube.com/channel/UCzk1ai4cv3z95OmquetMujg"
          >
            <SocialIcon src="/social-icons/youtube.svg" alt="Youtube" />
          </ExternalLink>
          <ExternalLink
            title="github"
            href="https://github.com/mischa-s/wiha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src="/social-icons/github.svg" alt="Github" />
          </ExternalLink>
        </SocialLinks>
      </LinksWrapper>
    </FooterWrapper>
  );
}
