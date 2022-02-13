import Link from 'next/link';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';

import Layout from '../../components/Layout';

export default function Thanks() {
  return (
    <Layout>
      <Flex direction="column" align="center" bg="blackAlpha.200" py="2rem">
        <Heading as="h1" size="lg" textAlign="center" my={2}>
          Subscribtion confirmed
        </Heading>
        <Text fontSize="lg" my="1rem" w={[350, 550, 700, 800]} px="1rem">
          Thanks for subscribing! We love helping people with get connected with
          ice hockey in Wellington and will let you know whenver there are new
          opportunities to play!
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
