import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Button,
  Flex,
  Input,
  Stack,
  Textarea,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function FreeTrialForm() {
  const [formFields, updateFormFields] = useState({});
  const router = useRouter();

  function handleChange(e) {
    updateFormFields({ ...formFields, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formFields,
      }),
    })
      .then(() => router.push(form.getAttribute('action')))
      .catch((error) => console.error(error));
  }

  return (
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
          <FormLabel htmlFor="contact_name">Name</FormLabel>
          <Input
            variant="wiha"
            type="input"
            id="contact_name"
            name="contact_name"
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
  );
}
