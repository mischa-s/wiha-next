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
      name="ltp"
      method="post"
      action="/ltp/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="ltp" />
      <div hidden>
        <label htmlFor="bot-field">
          Don’t fill this out:
          <input name="bot-field" onChange={handleChange} />
        </label>
      </div>
      <Stack spacing={3}>
        <FormControl>
          <FormLabel htmlFor="parent_name">Parent‘s Name</FormLabel>
          <Input
            variant="wiha"
            type="input"
            id="parent_name"
            name="parent_name"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            variant="wiha"
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="source">Where did you hear about us?</FormLabel>
          <Input
            variant="wiha"
            type="source"
            id="source"
            name="source"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="skating-experience">
            Do you have any ice skating / ice hockey experience? (Note: no
            experience is needed)
          </FormLabel>
          <Input
            variant="wiha"
            type="skating-experience"
            id="skating-experience"
            name="skating-experience"
            required
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="message">Your Message</FormLabel>
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
            Submit
          </Button>
        </Flex>
      </Stack>
    </form>
  );
}
