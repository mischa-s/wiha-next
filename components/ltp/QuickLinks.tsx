import InternalLink from 'next/link';
import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LTPLink = styled.button`
  border-bottom: 1px solid black;
  padding: 0.5rem 1rem 1rem;
  font-size: 18px;
  :hover {
    background-color: #e5e5e5;
    color: #000000;
  }
`;

const LTPActiveLink = styled.div`
  border-bottom: 1px solid black;
  padding: 0.5rem 1rem 1rem;
  font-weight: bold;
  color: white;
  background-color: black;
  font-size: 18px;
`;

interface LTPQuickLinksProps {
  activeLink: string;
}

export default function LTPQuickLinks({ activeLink }: LTPQuickLinksProps) {
  const linksData = [
    {
      label: 'Gear Hire',
      href: '/learn_to_play/gear',
    },
    {
      label: 'Calendar and Costs',
      href: '/learn_to_play/calendar_and_costs',
    },
    {
      label: 'Free Trial',
      href: '/ltp',
    },
  ];

  return (
    <Flex justify="center" mb="1rem">
      <Flex wrap="wrap" justify="center" w={[350, 550, 700, 800]}>
        {linksData.map((link) => {
          return link.href === activeLink ? (
            <LTPActiveLink key={link.href}>{link.label}</LTPActiveLink>
          ) : (
            <InternalLink key={link.href} href={`${link.href}/#`}>
              <LTPLink>{link.label}</LTPLink>
            </InternalLink>
          );
        })}
      </Flex>
    </Flex>
  );
}
