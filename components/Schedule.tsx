import { Center, Heading, Text, Wrap } from '@chakra-ui/react';

function formatDate(date: string) {
  const splitDate = date.split('-');
  return { day: splitDate[0], month: splitDate[1], year: splitDate[2] };
}

interface ScheduleProps {
  scheduleData: Array<Array<string>>;
  gameTimes: Array<string>;
}

export default function Schedule({ scheduleData, gameTimes }: ScheduleProps) {
  return (
    <>
      <Heading as="h2" size="md" textAlign="center" m="2rem 1rem">
        Schedule
      </Heading>
      <>
        {scheduleData &&
          scheduleData.map((row) => {
            const { day, month, year } = formatDate(row[1]);
            return (
              <div key={`${day}-${month}`}>
                <Wrap align="center" key={row[0]} m={3}>
                  <Center
                    width="100%"
                    bg={row[10] ? 'blackAlpha.700' : 'blackAlpha.800'}
                    color="whiteAlpha.900"
                    p="1rem"
                  >
                    <b>
                      {month}
                      &nbsp;
                      {day}
                      ,&nbsp;
                      {year}
                    </b>
                  </Center>
                  <Text
                    minW={['400px']}
                    width={['100%', '100%', 1 / 2]}
                    bg="blackAlpha.200"
                    p="1rem 1.5rem"
                  >
                    <b>{gameTimes[0]} &nbsp;</b>
                    {row[4]}
                    {row[10] && ` (${row[10]})`}
                    &nbsp;vs.&nbsp;
                    {row[5]}
                    {row[11] && ` (${row[11]})`}
                  </Text>
                  <Text
                    minW={['400px']}
                    width={['100%', '100%', 1 / 2]}
                    bg="blackAlpha.200"
                    p="1rem 1.5rem"
                  >
                    <b>{gameTimes[1]} &nbsp;</b>
                    {row[6]}
                    {row[12] && ` (${row[12]})`}
                    &nbsp;vs.&nbsp;
                    {row[7]}
                    {row[13] && ` (${row[13]})`}
                  </Text>
                </Wrap>
              </div>
            );
          })}
      </>
    </>
  );
}
