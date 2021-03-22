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
          scheduleData.map((row, idx) => {
            const [
              gameNumber,
              gateDate,
              ,
              ,
              // gamePlayed
              // roster version
              team1,
              team2,
              team3,
              team4,
              game1result,
              ,
              team1score,
              team2score,
              team3score,
              team4score,
            ] = row;

            const { day, month, year } = formatDate(gateDate);

            return (
              <div key={`${day}-${month}`}>
                <Wrap
                  w={[350, 550, 700, 800]}
                  align="center"
                  key={gameNumber}
                  m={3}
                >
                  <Center
                    width="100%"
                    bg={game1result ? 'blackScale.600' : 'blackScale.700'}
                    color="whiteAlpha.900"
                    p="1rem"
                  >
                    <b>
                      {idx === 0 ? '(Pre-Season): ' : `Game ${idx}: `}
                      &nbsp;
                      {month}
                      &nbsp;
                      {day}
                      &nbsp;
                    </b>
                  </Center>
                  <Text
                    minW={['350px', '400px']}
                    width={['100%', '100%', 1 / 2]}
                    bg="blackScale.50"
                    p="1rem 1.5rem"
                  >
                    <b>
                      {gameTimes[0]}
                      &nbsp;
                    </b>
                    {team1score ? `${team1} (${team1score})` : team1}
                    &nbsp;vs.&nbsp;
                    {team2score ? `${team2} (${team2score})` : team2}
                  </Text>
                  <Text
                    minW={['350px', '400px']}
                    width={['100%', '100%', 1 / 2]}
                    bg="blackScale.50"
                    p="1rem 1.5rem"
                  >
                    <b>
                      {gameTimes[1]}
                      &nbsp;
                    </b>
                    {team3score ? `${team3} (${team3score})` : team3}
                    &nbsp;vs.&nbsp;
                    {team4score ? `${team4} (${team4score})` : team4}
                  </Text>
                </Wrap>
              </div>
            );
          })}
      </>
    </>
  );
}
