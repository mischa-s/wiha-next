import Head from 'next/head';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import Layout from '../components/Layout';
import { fetchEntry } from '../utils/contentfulPages';

interface Props {
  fields: {
    title: string;
    description: string;
    subtitle1: string;
    contentBlock1: string;
    subtitle2: string;
    contentBlock2: string;
    images: [
      {
        fields: {
          title: string;
          file: {
            url: string;
          };
        };
      }
    ];
  };
}

export default function Play({ fields }: Props) {
  const { title, description, subtitle1, contentBlock1 } = fields;

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
      <Flex direction="column" align="center" py="2rem">
        <Heading as="h2" size="md" textAlign="center" m="2rem 1rem 0">
          {subtitle1}
        </Heading>
        <Box my="1rem" w={[350, 550, 700, 800]} px="1rem">
          {documentToReactComponents(contentBlock1)}
        </Box>
      </Flex>
    </Layout>
  );
}

export async function getStaticProps() {
  const { fields } = await fetchEntry('5eV48Jtz2fHGZNLMG4iEBc');

  return {
    props: {
      fields,
    },
  };
}
