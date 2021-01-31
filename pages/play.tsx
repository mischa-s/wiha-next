import Head from 'next/head';
import { GetStaticProps } from 'next';
import InternalLink from 'next/link';
import {
  Button,
  Link as ExternalLink,
  Flex,
  Heading,
  Text,
  Box,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

import PlayTable from '../components/PlayTable';
import Layout from '../components/Layout';
import { fetchEntry } from '../utils/contentfulPages';

const Hero = styled.section`
  display: flex;
  max-width: 700px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  margin: auto;

}`;

const MainSection = styled.section`
display: flex;
max-width: 900px;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 2rem;
margin: auto;

}`;

type PlayTableType = {
  playTable: [
    {
      link: string,
      title: string,
      description: string,
      day: string,
      time: string
    }
  ];
};

type PlayProps = {
  playTable: PlayTableType
}

export default function Play({ playTable }: PlayProps) {
  return (
    <Layout>
      <Head>
        <title>WIHA - Play Hockey</title>
      </Head>
      <Box bg="blackAlpha.200">
        <Hero>
          <Heading as="h1" size="lg" textAlign="center" my={2}>
            Start playing hockey
          </Heading>
          <Text fontSize="lg" my="1rem">
            Our aim is to provide a fun & safe environment for players of all
            ages, abilities and genders to enjoy the great sport of Ice Hockey.
          </Text>
          <Text fontSize="lg" mb="2rem">
            New player? Retuning player? Casual player? We have hockey for
            everyone! Pick what sounds most like you and get in touch
          </Text>
        </Hero>
      </Box>
      <MainSection>
        <PlayTable playTable={playTable} />
        <Flex justify="center" wrap="wrap" mt="3rem">
          <InternalLink href="/contact">
            <Button mb="2rem" mr="5" size="lg" variant="wiha" colorScheme="wiha">
              Equpiment
            </Button>
          </InternalLink>
          <ExternalLink
            href="https://docs.google.com/forms/u/1/d/1Jni35B2Fw-tmMq6E4vUP-nNulPpkJk3AI1iU3fntJcM/"
            isExternal
          >
            <Button mb="2rem" mr="5" size="lg" variant="wiha" colorScheme="wiha">
              Become a member
            </Button>
          </ExternalLink>
          <InternalLink href="/contact">
            <Button mb="2rem" size="lg" variant="wiha" colorScheme="wiha">
              Location
            </Button>
          </InternalLink>
        </Flex>
      </MainSection>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const playTable = await fetchEntry('2OomGmziRfIZwJmUyKwPA3');

  return {
    props: {
      playTable: playTable.fields.playTable,
    },
  };
};
