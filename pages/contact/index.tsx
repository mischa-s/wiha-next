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
  Textarea,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

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
          Contact
        </Heading>
        <Text fontSize="lg" my="1rem" w={[350, 550, 700, 800]} px="1rem">
          We are always keen to help people start playing or return to the great
          game of ice hockey! We&apos;re happy to answer any and all questions
          about ice hockey in Wellington, get in touch and let&apos;s get you on
          the ice!
        </Text>
      </Flex>
      <ContentWrapper>
        <form
          name="contact"
          method="post"
          action="/contact/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label htmlFor="bot-field">
              Don’t fill this out:
              <input name="bot-field" onChange={handleChange} />
            </label>
          </div>
          <Stack spacing={3}>
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                variant="wiha"
                type="input"
                id="name"
                name="name"
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
            <FormControl>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                variant="wiha"
                className="textarea"
                name="message"
                onChange={handleChange}
                id="message"
                required
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
