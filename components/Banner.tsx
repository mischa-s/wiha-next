import { Box, Center } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Banner() {
  const router = useRouter();

  return router.asPath === '/news/2022-registration' ? null : (
    <Box bg="wiha.400" fontWeight="bold" w="100%" p={5}>
      <Center fontSize="xl" textAlign="center">
        Registration for 2022 now open!&nbsp;
        <a href="/news/2022-registration">Click here to read more </a>
      </Center>
    </Box>
  );
}
