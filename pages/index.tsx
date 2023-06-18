import Head from 'next/head';
import { GetStaticProps } from 'next';
import InternalLink from 'next/link';
import { Box, Button, Heading, Flex, Text } from '@chakra-ui/react';

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
          <InternalLink href="/adults">
            <Button
              w={[325, 450, '40%']}
              mx={[0, 0, '2rem']}
              my={['1rem', '1rem', '2rem']}
              h={[75, 100]}
              fontSize={{ base: '20px', sm: '24px' }}
              variant="cta"
            >
              Adult League
            </Button>
          </InternalLink>
          <InternalLink href="/women">
            <Button
              w={[325, 450, '40%']}
              mx={[0, 0, '2rem']}
              my={['1rem', '1rem', '2rem']}
              h={[75, 100]}
              fontSize={{ base: '20px', sm: '24px' }}
              variant="cta"
            >
              Womens
            </Button>
          </InternalLink>
          <InternalLink href="/ltp">
            <Button
              w={[325, 450, '40%']}
              mx={[0, 0, '2rem']}
              my={['1rem', '1rem', '2rem']}
              h={[75, 100]}
              fontSize={{ base: '20px', sm: '24px' }}
              variant="cta"
            >
              Learn to Play (U12)
            </Button>
          </InternalLink>
          <InternalLink href="/super_league">
            <Button
              w={[325, 450, '40%']}
              mx={[0, 0, '2rem']}
              my={['1rem', '1rem', '2rem']}
              h={[75, 100]}
              fontSize={{ base: '20px', sm: '24px' }}
              variant="cta"
            >
              Super League (U12)
            </Button>
          </InternalLink>
        </Flex>
      </Hero>
      <Flex direction="column" align="center" bg="whiteAlpha.700">
        <Box my="3rem" px="1.5rem" w={[350, 550, 700, 800]}>
          <Heading as="h2" size="lg" textAlign="center" mb="3rem">
            Upcoming hockey calendar
          </Heading>
          <iframe
            title="WIHA calendar"
            src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Pacific%2FAuckland&showTz=1&showTitle=0&showPrint=0&showCalendars=0&mode=AGENDA&src=Y183YTgxMzA2NTAwNmM0ZjIzZGYzMWIyMWYxN2RlNDA4MWY1ZjdlNTIzZWFkMWZhNzQ4NjhmYmQ5ZmVlMDU3NzE1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23616161"
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
          />
        </Box>
      </Flex>

      <Flex direction="column" align="center">
        <Box mt="3rem" px="1.5rem" w={[350, 550, 700, 800]}>
          <Heading as="h1" size="lg" textAlign="center">
            Wellington ice hockey news
          </Heading>
          <br />
          <Text fontSize="xl" textAlign="center">
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
