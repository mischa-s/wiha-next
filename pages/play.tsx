import Head from 'next/head';
import { GetStaticProps } from 'next';
import InternalLink from 'next/link';
import {
  Button,
  Box,
  Link as ExternalLink,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

import PlayTable from '../components/PlayTable';
import Layout from '../components/Layout';
import { fetchEntry } from '../utils/contentfulPages';
import { PlayTableRowInterface } from '../types';

type PlayProps = {
  playTable: PlayTableRowInterface[];
  fields: {
    title: string;
    description: string;
  };
};

export default function Play({ playTable, fields }: PlayProps) {
  const { title, description } = fields;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta
          property="og:description"
          content="Find all the information you need to start playing ice hockey in Wellington!"
          key="ogdesc"
        />
      </Head>
      <Flex direction="column" align="center" bg="blackAlpha.200" py="2rem">
        <Heading as="h1" size="lg" textAlign="center" my={2}>
          {title}
        </Heading>
        <Text fontSize="lg" my="1rem" w={[350, 550, 700, 800]} px="1rem">
          {description}
          <br />
          <br />
          New to ice hockey? Check out our&nbsp;
          <InternalLink href="/beginners">beginners page</InternalLink>
          &nbsp;for all the info to get you on the ice
        </Text>
      </Flex>
      <Flex my="2rem" justify="center">
        <Box w={[350, 550, 700, 800]}>
          <PlayTable playTable={playTable} />
        </Box>
      </Flex>
      <Flex justify="center" mt="3rem" bg="blackAlpha.200">
        <Flex wrap="wrap" mt="3rem" justify="center" w={[350, 550, 700, 800]}>
          <InternalLink href="/equipment">
            <Button
              mb="2rem"
              size="lg"
              variant="outline"
              colorScheme="blackAlpha"
            >
              Equpiment
            </Button>
          </InternalLink>
          <ExternalLink
            href="https://docs.google.com/forms/u/1/d/1Jni35B2Fw-tmMq6E4vUP-nNulPpkJk3AI1iU3fntJcM/"
            isExternal
          >
            <Button
              mb="2rem"
              mx="5"
              size="lg"
              variant="outline"
              colorScheme="blackAlpha"
            >
              Register now
            </Button>
          </ExternalLink>
          <InternalLink href="/contact">
            <Button
              mb="3rem"
              size="lg"
              variant="outline"
              colorScheme="blackAlpha"
            >
              Location
            </Button>
          </InternalLink>
        </Flex>
      </Flex>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const playTable = await fetchEntry('2OomGmziRfIZwJmUyKwPA3');
  const { fields } = await fetchEntry('1eMJSvZ2uK077JRQABMB6u');

  return {
    props: {
      fields,
      playTable: playTable.fields.playTable,
    },
  };
};
