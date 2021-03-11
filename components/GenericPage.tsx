import Head from 'next/head';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import Layout from '../components/Layout';
import { GenericContentfulPageInterface } from '../types';

export default function StatsPage({
  fields,
  children,
}: GenericContentfulPageInterface) {
  const {
    title,
    description,
    subtitle1,
    contentBlock1,
    subtitle2,
    contentBlock2,
    images,
    ogDescript,
  } = fields;

  const genericImages = images?.map((image) => image.fields);

  return (
    <Layout>
      <Head>
        <meta property="og:title" content={title} key="ogtitle" />
        {ogDescript && (
          <meta property="og:description" content={ogDescript} key="ogdesc" />
        )}
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
        {children}

        <Heading as="h2" size="md" textAlign="center" m="2rem 1rem 0">
          {subtitle1}
        </Heading>

        <Box my="1rem" w={[350, 550, 700, 800]} px="1rem">
          {documentToReactComponents(contentBlock1)}
        </Box>

        {genericImages?.map((image) => {
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

        <Heading as="h2" size="md" textAlign="center" m="2rem 1rem 0">
          {documentToReactComponents(subtitle2)}
        </Heading>

        <Box my="1rem" w={[350, 550, 700, 800]} px="1rem">
          {documentToReactComponents(contentBlock2)}
        </Box>
      </Flex>
    </Layout>
  );
}
