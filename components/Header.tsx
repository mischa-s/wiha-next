import Link from 'next/link';
import Image from 'next/image';

import {
  IconButton,
  Box,
  Button,
  Stack,
  Link as ChakraLink,
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

interface MobileNavItemInterface {
  link: string;
  label: string;
}

interface MobileAccordionItemsInterface {
  play?: MobileNavItemInterface[];
  about?: MobileNavItemInterface[];
  'Learn to Play'?: MobileNavItemInterface[];
}

type MenuItemType = MobileNavItemInterface | MobileAccordionItemsInterface;

const menuItems: MenuItemType[] = [
  {
    link: '/contact',
    label: 'Contact',
  },
  {
    link: '/news',
    label: 'News',
  },
  {
    'Learn to Play': [
      {
        link: '/ltp',
        label: 'Free Trial',
      },
      {
        link: '/learn_to_play/calendar_and_costs',
        label: 'Calendar and Costs',
      },
      {
        link: '/learn_to_play/gear',
        label: 'Gear Hire',
      },
    ],
  },
  {
    about: [
      {
        link: '/about',
        label: 'WIHA',
      },
      {
        link: '/seals',
        label: 'Seals',
      },
      {
        link: '/equipment',
        label: 'Equpiment',
      },
      {
        link: '/code_of_conduct',
        label: 'Code of conduct',
      },
      {
        link: '/rules_and_regulations',
        label: 'Rules and regulations',
      },
      {
        link: '/subscribe',
        label: 'Subscribe',
      },
    ],
  },
  {
    play: [
      {
        link: '/play',
        label: 'Overview',
      },
      {
        link: '/beginners',
        label: 'Beginners',
      },
      {
        link: '/women',
        label: 'Women',
      },
      {
        link: '/youth',
        label: 'Youth',
      },
      {
        link: '/adults',
        label: 'Adult League',
      },
      {
        link: '/super_league',
        label: 'Super League',
      },
      {
        link: '/scrimmage',
        label: 'Scrimmage',
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
  @media (min-width: 52em) {
    display: none;
  }
`;

const DesktopNavWrapper = styled.div`
  display: none;
  @media (min-width: 52em) {
    display: initial;
  }
`;

interface MobileNavItemProps {
  item: MobileNavItemInterface;
}

interface MobileAccordionItemsInterfaceProps {
  items: MobileAccordionItemsInterface;
}

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

function MobileAccordionItem({ items }: MobileAccordionItemsInterfaceProps) {
  const category = Object.keys(items)[0];
  const accordionItem = items[category];
  return (
    <AccordionItem>
      <AccordionButton>
        <Box my="5" flex="1" textAlign="left">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        {accordionItem.map((item: MobileNavItemInterface) => {
          return <MobileNavItem key={item.label} item={item} />;
        })}
      </AccordionPanel>
    </AccordionItem>
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
        borderRadius="0"
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />

          <DrawerBody>
            <Stack>
              <Accordion allowMultiple>
                {menuItems.map((item: MenuItemType) => {
                  if ('link' in item) {
                    return <MobileNavItem key={item.label} item={item} />;
                  }
                  return (
                    <MobileAccordionItem
                      key={Object.keys(item)[0]}
                      items={item}
                    />
                  );
                })}
              </Accordion>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </MobileNavWrapper>
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
            <Link href="/play">
              <MenuItem>Overview</MenuItem>
            </Link>
            <Link href="/beginners">
              <MenuItem>Beginners</MenuItem>
            </Link>
            <Link href="/women">
              <MenuItem>Women</MenuItem>
            </Link>
            <Link href="/youth">
              <MenuItem>Youth</MenuItem>
            </Link>
            <Link href="/adults">
              <MenuItem>Adult League</MenuItem>
            </Link>
            <Link href="/super_league">
              <MenuItem>Super League</MenuItem>
            </Link>
            <Link href="/scrimmage">
              <MenuItem>Scrimmage</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton size="lg" as={Button} variant="navButton">
            About
            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <Link href="/about">
              <MenuItem>WIHA</MenuItem>
            </Link>
            <Link href="/seals">
              <MenuItem>Seals</MenuItem>
            </Link>
            <Link href="/equipment">
              <MenuItem>Equipment</MenuItem>
            </Link>
            <Link href="/code_of_conduct">
              <MenuItem>Code of conduct</MenuItem>
            </Link>
            <Link href="/rules_and_regulations">
              <MenuItem>Rules and regulations</MenuItem>
            </Link>
            <Link href="/subscribe">
              <MenuItem>Subscribe</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton size="lg" as={Button} variant="navButton">
            Learn to Play
            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <Link href="/ltp">
              <MenuItem>Free Trial</MenuItem>
            </Link>
            <Link href="/learn_to_play/calendar_and_costs">
              <MenuItem>Calendar and Cost</MenuItem>
            </Link>
            <Link href="/learn_to_play/gear">
              <MenuItem>Gear Hire</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Link href="/news">
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

export default function Header() {
  return (
    <nav role="navigation" aria-label="main-navigation">
      <NavbarWrapper>
        <NavBarContent>
          <NavLogo>
            <Link passHref href="/">
              <ChakraLink>
                <Image
                  src="/wiha-logos/logo.png"
                  width="125"
                  height="125"
                  alt="WIHA logo"
                />
              </ChakraLink>
            </Link>
          </NavLogo>
          <DesktopNav />
          <MobileNav />
        </NavBarContent>
      </NavbarWrapper>
    </nav>
  );
}
