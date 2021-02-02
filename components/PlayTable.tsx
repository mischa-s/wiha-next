import Link from 'next/link';

import { Button, Table, Tbody, Tr, Td, Text } from '@chakra-ui/react';
import { PlayTableRowInterface } from '../types';

interface PlayTableProps {
  playTable: PlayTableRowInterface[];
}

export default function PlayTable({ playTable }: PlayTableProps) {
  return (
    <Table colorScheme="blackAlpha" size="sm">
      <Tbody>
        {playTable.map((row) => {
          return (
            <Tr key={row.title}>
              <Td>
                <Link href={row.link}>
                  <Button width="130px" mb="1" size="md" variant="secondary">
                    {row.title}
                  </Button>
                </Link>
              </Td>
              <Td>
                <Text fontSize="lg" lineHeight="base">
                  {row.description}
                </Text>
              </Td>
              <Td>
                <Text
                  fontSize="lg"
                  my="1rem"
                  lineHeight="tall"
                  fontWeight="bold"
                >
                  {row.day}
                  <br />
                  {row.time}
                </Text>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
