import Head from 'next/head';
import { GetStaticProps } from 'next';
import InternalLink from 'next/link';
import { Link as ExternalLink, Button, Heading, Flex } from '@chakra-ui/react';

import styled from '@emotion/styled';

import { fetchEntry, fetchEntries } from '../utils/contentfulPages';

import Layout from '../components/Layout';
import BlogRoll from "../components/BlogRoll";
// import Post from "../components/Post";

type HeroProps = {
  imageURL: string;
};

const Hero = styled.section<HeroProps>`
  display: flex;
  height: 35em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 2rem;

  @media (min-width: 48em) {
    height: 45em;
  }

  &:after {
    background-image: url(${({ imageURL }) => imageURL});
    background-size: cover;
    background-position: center center;
    content: '';
    opacity: 0.9;
    height: 35em;
    top: 100px;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;

    @media (min-width: 48em) {
      height: 45em;
    }
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

interface Props {
  fields: {
    heroImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  },
  posts: [{
    heroImage: {
      fields: {
        file: {
          url: string;
        };
      };
    },
    title: string,
    description: string,
    publishDate: string,
    slug: string,
    body:string
  }];
}

export default function Home({ fields, posts }: Props) {
  const { heroImage } = fields;

  let imageURL = heroImage?.fields?.file?.url;

  return (
    <Layout>
      <Head>
        <title>WIHA</title>
      </Head>

      <Hero imageURL={imageURL}>
        <Flex justify="center" wrap="wrap" direction="column">
          <InternalLink href="/play">
            <Button
              w={[350, 400, 500]}
              mx="2rem"
              my="2rem"
              size="xl"
              variant="cta"
              colorScheme="gray"
            >
              Play Hockey
            </Button>
          </InternalLink>
          <ExternalLink
            href="https://wellington-seals.printmighty.co.nz/"
            isExternal
            mx="2rem"
            my="2rem"
          >
            <Button
              w={[350, 400, 500]}
              size="xl"
              variant="cta"
              colorScheme="gray"
            >
              Buy Merch
            </Button>
          </ExternalLink>
          <InternalLink href="/play">
            <Button
              w={[350, 400, 500]}
              mx="2rem"
              my="2rem"
              size="xl"
              variant="cta"
              colorScheme="gray"
            >
              Stats and Schedules
            </Button>
          </InternalLink>
        </Flex>
      </Hero>
      <IntroBlurb>
        <Heading as="h2" size="lg" textAlign="center" my={5}>
          Latest news
        </Heading>
        <BlogRoll posts={posts} />
        <Flex justify="center">
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

export const getStaticProps: GetStaticProps = async () => {
  const { fields } = await fetchEntry('4q3v8VuOVVY5gQ6P58aSgD');
  const blogPosts = await fetchEntries('blogPost');
  const posts = blogPosts.map((post) => post.fields);
  
  return {
    props: {
      fields,
      posts,
    },
  };
};
