import styled from '@emotion/styled';
import { Heading, Flex, Text } from '@chakra-ui/react';
import ContactForm from '../../components/ContactForm';
import Layout from '../../components/Layout';
// import { GoogleMap } from "../../components/Map";

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50em;
  padding: 1rem;
  align-items: left;
  max-width: 100%;
  margin: 2em auto;

  p {
    padding: 0.75em 0;
  }
`;

export default function Index() {
  return (
    <Layout>
      <Flex direction="column" align="center" bg="blackAlpha.200" py="2rem">
        <Heading as="h1" size="lg" textAlign="center" my={2}>
          Contact
        </Heading>
        <Text fontSize="lg" my="1rem" w={[350, 550, 700, 800]} px="1rem">
          The rink is located at Unit 13a Brewtown, 25 Blenheim St, Upper Hutt.
          <br />
          <br />
          We are always keen to help people start playing or return to the great
          game of ice hockey! We&apos;re happy to answer any and all questions
          about ice hockey in Wellington, get in touch and let&apos;s get you on
          the ice!
        </Text>
      </Flex>
      <ContentWrapper>
        <ContactForm />
      </ContentWrapper>
    </Layout>
  );
}
