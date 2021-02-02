import Head from 'next/head';
import { GetStaticProps } from 'next';
import InternalLink from 'next/link';
import {
  Button,
  Link as ExternalLink,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

import PlayTable from '../components/PlayTable';
import Layout from '../components/Layout';
import { fetchEntry } from '../utils/contentfulPages';

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
      link: string;
      title: string;
      description: string;
      day: string;
      time: string;
    }
  ];
};

type PlayProps = {
  playTable: PlayTableType;
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
      </Head>
      <Flex direction="column" align="center" bg="blackAlpha.200" py="2rem">
        <Heading as="h1" size="lg" textAlign="center" my={2}>
          {title}
        </Heading>
        <Text fontSize="lg" my="1rem" w={[350, 550, 700, 800]} px="1rem">
          {description}
        </Text>
      </Flex>
      <MainSection>
        <PlayTable playTable={playTable} />
        <Flex justify="center" wrap="wrap" mt="3rem">
          <InternalLink href="/equipment">
            <Button
              mb="2rem"
              mr="5"
              size="lg"
              variant="wiha"
              colorScheme="wiha"
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
              mr="5"
              size="lg"
              variant="wiha"
              colorScheme="wiha"
            >
              Register now
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
