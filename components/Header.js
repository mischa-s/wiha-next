import React from "react";
import PropTypes from "prop-types";

import Link from "next/link";
import Image from "next/image";

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
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";

const menuItems = [
  {
    link: "/play",
    label: "Play",
  },
  {
    link: "/seals",
    label: "Seals",
  },
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/blog",
    label: "Blog",
  },
  {
    link: "/contact",
    label: "Contact",
  },
  {
    Leagues: [
      {
        link: "/frozen",
        label: "Frozen Fours",
      },
      {
        link: "/bear",
        label: "Bear League",
      },
      {
        link: "/youth",
        label: "Youth",
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
  max-width: 1000px;
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

const HeroImage = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image src="/../public/logo.png" width="125" height="125" alt="WIHA" />
    </a>
  );
});

export default function Header() {
  return (
    <nav role="navigation" aria-label="main-navigation">
      <NavbarWrapper>
        <NavBarContent>
          <NavLogo>
            <Link passHref href="/" title="Logo">
              <HeroImage />
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
  const btnRef = React.useRef();

  return (
    <MobileNavWrapper>
      <IconButton
        icon={<HamburgerIcon />}
        ref={btnRef}
        fontSize="30px"
        onClick={onOpen}
        aria-label="Search database"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />

          <DrawerBody>
            <Stack>
              {menuItems.map((item, key) => {
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

function MobileNavItem({ item }) {
  const { link, label } = item;
  return (
    <>
      <Link href={link}>
        <Box
          p="5"
          w="100%"
          transition="all 0.2s"
          _focus={{ boxShadow: "outline" }}
          _hover={{ bg: "blackAlpha.50" }}
        >
          {label}
        </Box>
      </Link>
    </>
  );
}

function MobileAccordionItem({ items }) {
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
            Leagues
            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <Link href={"/frozen"}>
              <MenuItem>Frozen Fours</MenuItem>
            </Link>
            <Link href={"/bear"}>
              <MenuItem>Bear League</MenuItem>
            </Link>
            <Link href={"/youth"}>
              <MenuItem>Youth</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <NavButton link={"/play"} text={"Play"} />
        <NavButton link={"/about"} text={"About"} />
        <NavButton link={"/seals"} text={"Seals"} />
        <NavButton link={"/blog"} text={"Blog"} />
        <NavButton link={"/contact"} text={"Contact"} />
      </NavItems>
    </DesktopNavWrapper>
  );
}

function NavButton({ link, text }) {
  return (
    <Link href={link}>
      <Button size="lg" variant="navButton">
        {text}
      </Button>
    </Link>
  );
}
