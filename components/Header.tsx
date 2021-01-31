import Link from 'next/link';
import Image from 'next/image';

import {
  IconButton,
  Box,
  Button,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';

const menuItems = [
  {
    link: '/play',
    label: 'Play',
  },
  {
    link: '/contact',
    label: 'Contact',
  },
  {
    About: [
      {
        link: '/seals',
        label: 'Seals',
      },
      {
        link: '/about',
        label: 'WIHA',
      },
    ],
  },
  {
    link: '/blog',
    label: 'News',
  },
  {
    Leagues: [
      {
        link: '/play/frozen',
        label: 'Frozen Fours',
      },
      {
        link: '/play/bear',
        label: 'Bear League',
      },
      {
        link: '/play/youth',
        label: 'Youth',
      },
    ],
  },
];

const NavbarWrapper = styled.div`
  background-color: black;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const NavBarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  max-height: 75px;
`;
const NavLogo = styled.div`
  margin-top: 25px;
`;

const NavItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const MobileNavWrapper = styled.div`
  @media (min-width: 48em) {
    display: none;
  }
`;

const DesktopNavWrapper = styled.div`
  display: none;
  @media (min-width: 48em) {
    display: initial;
  }
`;

export default function Header() {
  return (
    <nav role="navigation" aria-label="main-navigation">
      <NavbarWrapper>
        <NavBarContent>
          <NavLogo>
            <Link passHref href="/">
              <a>
                <Image
                  src="/wiha-logos/logo.png"
                  width="125"
                  height="125"
                  alt="WIHA"
                />
              </a>
            </Link>
          </NavLogo>
          <DesktopNav />
          <MobileNav />
        </NavBarContent>
      </NavbarWrapper>
    </nav>
  );
}

function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <MobileNavWrapper>
      <IconButton
        icon={<HamburgerIcon />}
        fontSize="30px"
        onClick={onOpen}
        aria-label="Search database"
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />

          <DrawerBody>
            <Stack>
              {menuItems.map((item) => {
                if (!item.link) {
                  return (
                    <MobileAccordionItem
                      key={Object.keys(item)[0]}
                      items={item}
                    />
                  );
                }
                return <MobileNavItem key={item.label} item={item} />;
              })}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </MobileNavWrapper>
  );
}

type MobileNavItem = {
  link: string;
  label: string;
};

type MobileNavItemProps = {
  item: MobileNavItem
};

function MobileNavItem({ item }: MobileNavItemProps) {
  const { link, label } = item;
  return (
    <>
      <Link href={link}>
        <Box
          p="5"
          w="100%"
          transition="all 0.2s"
          _focus={{ boxShadow: 'outline' }}
          _hover={{ bg: 'blackAlpha.50' }}
        >
          {label}
        </Box>
      </Link>
    </>
  );
}
type MobileAccordionItemProps = {
  items: [MobileNavItem];
};

function MobileAccordionItem({ items }: MobileAccordionItemProps) {
  const category = Object.keys(items)[0];

  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <AccordionButton>
          <Box my="5" flex="1" textAlign="left">
            {category}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          {items[category].map((item) => {
            return <MobileNavItem key={item.label} item={item} />;
          })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

function DesktopNav() {
  return (
    <DesktopNavWrapper>
      <NavItems>
        <Menu>
          <MenuButton size="lg" as={Button} variant="navButton">
            Play
            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <Link href={'/play'}>
              <MenuItem>Start Playing</MenuItem>
            </Link>
            <Link href={'/frozen'}>
              <MenuItem>Frozen Fours</MenuItem>
            </Link>
            <Link href={'/bear'}>
              <MenuItem>Bear League</MenuItem>
            </Link>
            <Link href={'/youth'}>
              <MenuItem>Youth</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton size="lg" as={Button} variant="navButton">
            About
            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <Link href={'/about'}>
              <MenuItem>WIHA</MenuItem>
            </Link>
            <Link href={'/seals'}>
              <MenuItem>Seals</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Link href="/blog">
          <Button size="lg" variant="navButton">
            News
          </Button>
        </Link>
        <Link href="/contact">
          <Button size="lg" variant="wiha" ml="2rem">
            Contact
          </Button>
        </Link>
      </NavItems>
    </DesktopNavWrapper>
  );
}
