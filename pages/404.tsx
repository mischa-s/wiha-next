import Head from 'next/head';
import { Button, Flex, Heading, Link, Text } from '@chakra-ui/react';

import Layout from '../components/Layout';

export default function ErrorPage() {
  return (
    <Layout>
      <Head>
        <title>Out of bounds - 404</title>
      </Head>
      <Flex direction="column" align="center" bg="blackAlpha.200" py="2rem">
        <Heading as="h1" size="lg" textAlign="center" my={2}>
          Out of bounds
        </Heading>
        <Text fontSize="lg" my="1rem" w={[350, 550, 700, 800]} px="1rem">
          Sorry that shot went off the crossbar and up into the stands. Click
          the link below to go back to the homepage and hopefully we can help
          your next shot hit mark!
        </Text>
      </Flex>
      <Flex align="center" justify="center" minH="45vh">
        <Link href="/">
          <Button size="lg" variant="wiha">
            Return to home page
          </Button>
        </Link>
      </Flex>
    </Layout>
  );
}
