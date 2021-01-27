import Link from "next/link";
import { Button, Flex, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";

import Layout from "../../components/Layout";

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

export default function Thanks() {
  return (
    <Layout>
      <ContentWrapper>
        <Heading
          as="h1"
          mb="5"
          size="xl"
          bg="blackAlpha.800"
          color="brightYellow"
          p={2}
        >
          <h1>Message sent</h1>
        </Heading>
        <div>
          <p>
            Thanks for getting in touch! We love helping people with questions
            about hockey and will try get to back to you within the next few
            days
          </p>

          <Flex mt="4" justify={"center"}>
            <Link href="/">
              <Button size="lg" variant="wiha">
                Return to home page
              </Button>
            </Link>
          </Flex>
        </div>
      </ContentWrapper>
    </Layout>
  );
}
