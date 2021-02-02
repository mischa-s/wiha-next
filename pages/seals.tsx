import Head from 'next/head';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import Layout from '../components/Layout';
import { fetchEntry } from '../utils/contentfulPages';
import { GenericContentfulPageInterface } from '../types';

export default function SealsPage({ fields }: GenericContentfulPageInterface) {
  const { title, description, subtitle1, contentBlock1, images } = fields;

  const sealsImages = images.map((image) => image.fields);

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
        {sealsImages.map((image) => {
          const { title: imageTitle, file } = image;
          const imageURL = file?.url;

          return (
            <Box key={imageTitle} w={[350, 550, 700, 800]} my="1rem">
              <Image
                mb="2rem"
                w={[350, 550, 700, 800]}
                objectFit="cover"
                src={imageURL ?? '/wiha-logos/logo.png'}
                alt={title}
              />
            </Box>
          );
        })}
      </Flex>
    </Layout>
  );
}

export async function getStaticProps() {
  const { fields } = await fetchEntry('2XJYE9uarRyEYChL0qjI4W');

  return {
    props: {
      fields,
    },
  };
}
