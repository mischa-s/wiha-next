import Head from "next/head";
import InternalLink from "next/link";
import { Link as ExternalLink } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Button, Heading, Flex, Spacer } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { fetchEntry, fetchEntries } from "../utils/contentfulPages";

import PlayTable from "../components/PlayTable";
import Layout from "../components/Layout";
// import BlogRoll from "../components/BlogRoll";
// import Post from "../components/Post";

const Hero = styled.div`
  display: flex;
  height: 22em;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:after {
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center center;
    content: "";
    opacity: 0.7;
    height: 30em;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

const IntroBlurb = styled.section`
  display: flex;
  flex-direction: column;
  width: 50em;
  align-items: left;
  max-width: 100%;
  margin: 2em auto 3em auto;
`;

const SecondaryHeroInner = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 50em;
  min-width: 10em;
  align-items: left;
  margin: 2em auto;
  color: white;
  padding: 5em;
  border: 2px solid yellow;
`;

const SecondaryHero = styled.div`
  padding: 2em;
  background: rgba(0, 0, 0, 0.85);
`;

export default function Home({ fields, playTable }) {
  const {
    title,
    heroImage,
    section1Title,
    section1Content,
    section2Title,
    section2Content,
  } = fields;

  return (
    <Layout>
      <Head>
        <title>WIHA</title>
      </Head>

      <Hero image={heroImage?.fields?.file?.url}>
        <Heading
          as="h1"
          bg="blackAlpha.800"
          color="brightYellow"
          mb="8"
          p={2}
          size="lg"
          textAlign={"center"}
          w="fit-content"
        >
          {title}
        </Heading>
        <Flex>
          <InternalLink
            href="/play"
          >
            <Button mr="5" size="lg" variant="wiha" colorScheme="wiha">
              Play hockey
            </Button>
          </InternalLink>
         <ExternalLink
            href="https://wellington-seals.printmighty.co.nz/"
            isExternal
          >
            <Button size="lg" variant="wiha" colorScheme="wiha">
              Buy merch
            </Button>
          </ExternalLink>
        </Flex>
      </Hero>
      <Flex
        direction="column"
        width="50em"
        alignItems="center"
        maxWidth="100%"
        margin="2em auto 3em auto"
      >
        <Heading as="h2" size="lg" fontWeight={500} textAlign={"center"} my={5}>
          {section1Title}
        </Heading>
        <PlayTable playTable={playTable} />
      </Flex>
      <SecondaryHero>
        <SecondaryHeroInner>
          <Heading
            as="h4"
            size="lg"
            fontWeight={500}
            textAlign={"center"}
            my={5}
          >
            {section2Title}
          </Heading>
          {documentToReactComponents(section2Content)}
        </SecondaryHeroInner>
      </SecondaryHero>
      <IntroBlurb>
        <Heading as="h4" size="lg" fontWeight={500} textAlign={"center"} my={5}>
          Latest updates
        </Heading>
        {/* <BlogRoll /> */}
        <Flex justify={"center"}>
          <InternalLink href="/blog">
            <Button size="lg" variant="outline">
              Read More
            </Button>
          </InternalLink>
        </Flex>
      </IntroBlurb>
    </Layout>
  );
}

export async function getStaticProps() {
  const { fields } = await fetchEntry("4q3v8VuOVVY5gQ6P58aSgD");
  const playTable = await fetchEntry("2OomGmziRfIZwJmUyKwPA3");
  return {
    props: {
      fields,
      playTable: playTable.fields.playTable,
    },
  };
}
