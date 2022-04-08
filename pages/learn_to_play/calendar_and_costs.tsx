import Head from 'next/head';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { fetchEntry } from '../../utils/contentfulPages';
import QuickLinks from '../../components/ltp/QuickLinks';
import LTPCalendar from '../../components/ltp/Calendar';

import Layout from '../../components/Layout';
import { GenericContentfulPageInterface } from '../../types';

export async function getStaticProps() {
  const { fields } = await fetchEntry('5Pn1VljGIe5bHchIoOSs09');

  return {
    props: {
      fields,
    },
  };
}

export default function CalendarAndCostsPage({
  fields,
}: GenericContentfulPageInterface) {
  const { title, description, subtitle1, contentBlock1, ogDescript } = fields;

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
        <Heading as="h1" my={2}>
          {title}
        </Heading>
        <Text fontSize="lg" my="1rem" w={[350, 550, 700, 800]} px="1rem">
          {description}
        </Text>
      </Flex>

      <Flex direction="column" align="center" py="2rem">
        <QuickLinks activeLink="/learn_to_play/calendar_and_costs" />

        <Heading as="h2" fontSize="2xl" m="2rem 1rem 0">
          {subtitle1}
        </Heading>

        <Box my="1rem" w={[350, 550, 700, 800]} px="1rem">
          {documentToReactComponents(contentBlock1)}
          <LTPCalendar />
        </Box>
      </Flex>
    </Layout>
  );
}
