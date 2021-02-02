import Link from 'next/link';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';

import Layout from '../../components/Layout';

export default function Thanks() {
  return (
    <Layout>
      <Flex direction="column" align="center" bg="blackAlpha.200" py="2rem">
        <Heading as="h1" size="lg" textAlign="center" my={2}>
          Message sent
        </Heading>
        <Text fontSize="lg" my="1rem" w={[350, 550, 700, 800]} px="1rem">
          Thanks for getting in touch! We love helping people with questions
          about hockey and will try get to back to you within the next few days
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
