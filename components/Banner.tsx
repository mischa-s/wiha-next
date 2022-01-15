import { Box, Center } from '@chakra-ui/react';

export default function Banner() {
  return (
    <Box bg="wiha.400" fontWeight="bold" w="100%" p={5}>
      <Center fontSize="xl" textAlign="center">
        Registration for 2022 opens soon!
      </Center>
    </Box>
  );
}
