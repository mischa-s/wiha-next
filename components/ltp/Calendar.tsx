import { Thead, Table, Tbody, Th, Tr, Td, Text } from '@chakra-ui/react';

export default function Calendar() {
  const calendar = [
    {
      term: 'Term 1',
      dates: '17th Februrary - 14th April',
      time: '6pm - 7pm',
    },
    {
      term: 'Term 2',
      dates: '5th May - 7th July',
      time: '6pm - 7pm',
    },
    {
      term: 'Term 3',
      dates: '28th July - 29th September',
      time: '6pm - 7pm',
    },
    {
      term: 'Term 4',
      dates: '20th October - 8th Decemeber',
      time: '6pm - 7pm',
    },
  ];
  return (
    <Table variant="striped" colorScheme="blackAlpha" size="sm" mt="1rem">
      <Thead>
        <Tr>
          <Th>
            <Text fontSize="lg" lineHeight="base">
              Term
            </Text>
          </Th>
          <Th>
            <Text fontSize="lg" lineHeight="base">
              Dates
            </Text>
          </Th>
          <Th>
            <Text fontSize="lg" lineHeight="base">
              Time
            </Text>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {calendar.map((row) => {
          return (
            <Tr key={row.term}>
              <Td>
                <Text fontSize="lg" lineHeight="base">
                  {row.term}
                </Text>
              </Td>
              <Td>
                <Text fontSize="lg" lineHeight="base">
                  {row.dates}
                </Text>
              </Td>
              <Td>
                <Text fontSize="lg" lineHeight="base">
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
