import { Thead, Table, Tbody, Th, Tr, Td, Text } from '@chakra-ui/react';

export default function Calendar() {
  const calendar = [
    {
      term: 'Term 1',
      dates: '9th March - 6th April',
      time: '6pm - 7pm',
    },
    {
      term: 'Term 2',
      dates: '27th April - 29th June',
      time: '6pm - 7pm',
    },
    {
      term: 'Term 3',
      dates: '20th July - 21st September',
      time: '6pm - 7pm',
    },
    {
      term: 'Term 4',
      dates: '12th October - 14th Decemeber',
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
