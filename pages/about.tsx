import Head from 'next/head';

import Layout from '../components/Layout';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { fetchEntry, fetchEntries } from '../utils/contentfulPages';

interface Props {
  boardMembers: [
    {
      image: {
        fields: {
          file: {
            url: string;
          };
        };
      };
      title: string;
      name: string;
    }
  ];
  fields: {
    title: string;
    description: string;
    subtitle: string;
  };
}

export default function Play({ boardMembers, fields }: Props) {
  const { title, description, subtitle } = fields;

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
      <Flex direction="column" align="center">
        <Heading as="h2" size="lg" textAlign="center" my="3rem">
          {subtitle}
        </Heading>

        <Flex
          justify="space-between"
          wrap="wrap"
          mb="2rem"
          px="1rem"
          w={[350, 550, 700, 850]}
        >
          {boardMembers &&
            boardMembers.map((person) => {
              const { name, title, image } = person;
              console.log(image, 'image');
              let imageURL = image?.fields?.file?.url;

              return (
                <Box key={name} w={[150, 200, 250]} my="3rem">
                  <Image
                    mb="2rem"
                    w={[125, 150, 200]}
                    objectFit="cover"
                    src={imageURL ?? '/wiha-logos/logo.png'}
                    alt={`image thumbnail for post ${name}`}
                  />
                  <Text>{name}</Text>
                  <Text>{title}</Text>
                </Box>
              );
            })}
        </Flex>
      </Flex>
    </Layout>
  );
}

export async function getStaticProps() {
  const { fields } = await fetchEntry('4weSZlwvtor2o00cLF1Kz0');
  const allPersons = await fetchEntries('person', 'name');
  const boardMembers = allPersons.map((person) => person.fields);

  return {
    props: {
      fields,
      boardMembers,
    },
  };
}
