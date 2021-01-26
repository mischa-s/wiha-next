import Head from "next/head";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Button, Heading, Flex, Spacer } from "@chakra-ui/react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { fetchEntry, fetchEntries } from "../utils/contentfulPages";

import Header from "../components/Header";
// import Footer from "../components/Footer";
// import BlogRoll from "../components/BlogRoll";
// import Post from "../components/Post";

const Hero = styled.div`
  display: flex;
  height: 22em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.image});
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

const IndexPageMain = ({
  title,
  heroImage,
  playTable,
  section1Title,
  section1Content,
  section2Title,
  section2Content,
}) => {
  return (
    <>
      <Hero image={heroImage?.fields?.file?.url}>
        <Heading
          as="h2"
          mb="8"
          size="lg"
          bg="blackAlpha.800"
          color="brightYellow"
          p={2}
          w="fit-content"
        >
          {title}
        </Heading>
        <Flex>
          <Button mr="5" size="lg" variant="wiha" colorScheme="wiha">
            Join a team
          </Button>
          <Button size="lg" variant="wiha" colorScheme="wiha">
            Learn to play
          </Button>
        </Flex>
      </Hero>
      {/* <table>
        {playTable.tableData.map((row, index) => {
          return (
            <tr>
              {row.map((cell) => {
                return <td>{cell}</td>;
              })}
            </tr>
          );
        })}
      </table> */}
      <IntroBlurb>
        <Heading as="h4" size="lg" fontWeight={500} textAlign={"center"} my={5}>
          {section1Title}
        </Heading>
        {documentToReactComponents(section1Content)}
      </IntroBlurb>
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
          <Link href="/blog">
            <Button size="lg" variant="outline">
              Read More
            </Button>
          </Link>
        </Flex>
      </IntroBlurb>
    </>
  );
};

IndexPageMain.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
};


export default function Home({ fields }) {
  const {
    title,
    heroImage,
    play,
    section1Title,
    section1Content,
    section2Title,
    section2Content,
  } = fields;

  return (
    <div className="container">
      <Head>
        <title>WIHA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <IndexPageMain
          title={title}
          heroImage={heroImage}
          playTable={play}
          section1Title={section1Title}
          section1Content={section1Content}
          section2Title={section2Title}
          section2Content={section2Content}
        />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export async function getStaticProps() {
  const { fields } = await fetchEntry("4q3v8VuOVVY5gQ6P58aSgD");

  return {
    props: {
      fields,
    },
  };
}
