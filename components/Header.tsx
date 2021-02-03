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
    play: [
      {
        link: '/play',
        label: 'Start Playing',
      },
      {
        link: '/frozen',
        label: 'Frozen Fours',
      },
      {
        link: '/bear',
        label: 'Bear League',
      },
      {
        link: '/youth',
        label: 'Youth',
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
              <MenuItem>Start Playing</MenuItem>
            </Link>
            <Link href="/frozen">
              <MenuItem>Frozen Fours</MenuItem>
            </Link>
            <Link href="/bear">
              <MenuItem>Bear League</MenuItem>
            </Link>
            <Link href="/youth">
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
            <Link href="/about">
              <MenuItem>WIHA</MenuItem>
            </Link>
            <Link href="/seals">
              <MenuItem>Seals</MenuItem>
            </Link>
            <Link href="/equipment">
              <MenuItem>Equipment</MenuItem>
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
                  alt="WIHA"
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
