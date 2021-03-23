import Head from 'next/head';
import { GetStaticProps } from 'next';
import InternalLink from 'next/link';
import {
  Link as ExternalLink,
  Box,
  Button,
  Heading,
  Flex,
  Text,
} from '@chakra-ui/react';

import styled from '@emotion/styled';

import { fetchEntry, getAllPosts } from '../utils/contentfulPages';
import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';
import { PostInterface, ContentfulImageInterface } from '../types';

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

interface Props {
  fields: {
    heroImage: ContentfulImageInterface;
  };
  posts: [PostInterface];
}

export default function Home({ fields, posts }: Props) {
  const { heroImage } = fields;

  const imageURL = heroImage?.fields?.file?.url;

  return (
    <Layout>
      <Head>
        <title>WIHA</title>
      </Head>

      <Hero imageURL={imageURL}>
        <Flex justify="center" direction="row" wrap="wrap" w={[325, 450, 800]}>
          <InternalLink href="/play">
            <Button
              w={[325, 450, '40%']}
              mx={[0, 0, '2rem']}
              my={['1rem', '1rem', '2rem']}
              h={[75, 100]}
              fontSize={{ base: '20px', sm: '24px' }}
              variant="cta"
            >
              Play Hockey
            </Button>
          </InternalLink>
          <ExternalLink
            href="https://wellington-seals.printmighty.co.nz/"
            isExternal
            mx={[0, 0, '2rem']}
            my={['1rem', '1rem', '2rem']}
            w={[325, 450, '40%']}
          >
            <Button
              w={['100%']}
              h={[75, 100]}
              fontSize={{ base: '20px', sm: '24px' }}
              variant="cta"
            >
              Buy Merch
            </Button>
          </ExternalLink>
          <InternalLink href="/frozen">
            <Button
              w={[325, 450, '40%']}
              mx={[0, 0, '2rem']}
              my={['1rem', '1rem', '2rem']}
              h={[75, 100]}
              fontSize={{ base: '20px', sm: '24px' }}
              variant="cta"
            >
              Frozen Fours
            </Button>
          </InternalLink>
          <InternalLink href="/bear">
            <Button
              w={[325, 450, '40%']}
              mx={[0, 0, '2rem']}
              my={['1rem', '1rem', '2rem']}
              h={[75, 100]}
              fontSize={{ base: '20px', sm: '24px' }}
              variant="cta"
            >
              Bear League
            </Button>
          </InternalLink>
        </Flex>
      </Hero>
      <Flex direction="column" align="center">
        <Box mt="3rem" px="1.5rem" w={[350, 550, 700, 800]}>
          <Heading as="h1" size="lg" textAlign="center">
            Wellington ice hockey news
          </Heading>
          <br />
          <Text textAlign="center">
            Find the latest info about playing ice hockey in Wellington
          </Text>
          <br />
          <BlogRoll posts={posts} />
        </Box>
        <InternalLink href="/news">
          <Button
            my="1rem"
            size="lg"
            variant="outline"
            colorScheme="blackAlpha"
          >
            Read More
          </Button>
        </InternalLink>
      </Flex>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { fields } = await fetchEntry('4q3v8VuOVVY5gQ6P58aSgD');
  const blogPosts = await getAllPosts();
  const posts = blogPosts.map((post) => post.fields);

  return {
    props: {
      fields,
      posts,
    },
  };
};
