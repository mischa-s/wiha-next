import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import {
  Button,
  Heading,
  Flex,
  Input,
  Stack,
  Text,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

import Layout from '../../components/Layout';

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

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function Index() {
  // const [isValidated, setIsValidated] = useState(true);
  const [fields, updateFields] = useState({});
  const router = useRouter();

  function handleChange(e) {
    updateFields({ ...fields, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...fields,
      }),
    })
      .then(() => router.push(form.getAttribute('action')))
      .catch((error) => console.error(error));
  }

  return (
    <Layout>
      <Flex direction="column" align="center" bg="blackAlpha.200" py="2rem">
        <Heading as="h1" size="lg" textAlign="center" my={2}>
          Subscribe
        </Heading>
        <Text fontSize="lg" my="1rem" w={[350, 550, 700, 800]} px="1rem">
          Fill in your details below to get updates about ice hockey in
          Wellington!
          <br />
          <br />
          By filling in your details, you agree to be emailed occasional updates
          about the most exciting sport in the capital! We will never share your
          information with anybody else without your explicit permission as we
          are here to play and grow hockey, and anybody else who has your email
          is probably trying to distract you from playing hockey
        </Text>
      </Flex>
      <ContentWrapper>
        <form
          name="subscribe"
          method="post"
          action="/subscribe/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="subscribe" />
          <div hidden>
            <label htmlFor="bot-field">
              Don’t fill this out:
              <input name="bot-field" onChange={handleChange} />
            </label>
          </div>
          <Stack spacing={3}>
            <FormControl>
              <FormLabel htmlFor="first name">First Name</FormLabel>
              <Input
                variant="wiha"
                type="input"
                id="first name"
                name="first name"
                required
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="last name">Last Name</FormLabel>
              <Input
                variant="wiha"
                type="input"
                id="last name"
                name="last name"
                required
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                variant="wiha"
                type="email"
                id="email"
                name="email"
                required
                onChange={handleChange}
              />
            </FormControl>
            <Flex mt="4" justify="center">
              <Button size="lg" variant="wiha" type="submit">
                Send
              </Button>
            </Flex>
          </Stack>
        </form>
        {/* <GoogleMap /> */}
      </ContentWrapper>
    </Layout>
  );
}
