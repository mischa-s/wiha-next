import { Center, Heading, Text, Wrap } from '@chakra-ui/react';
import FoursGameRenderer from './FoursGameRenderer';
import BearsGameRenderer from './BearsGameRenderer';

const GameRenderers = {
  fours: FoursGameRenderer,
  bears: BearsGameRenderer,
};

function formatDate(date: string) {
  const splitDate = date.split('-');
  return { day: splitDate[0], month: splitDate[1], year: splitDate[2] };
}

interface ScheduleProps {
  scheduleData: Array<Array<string>>;
  gameTimes: Array<string>;
  gameRenderer: string;
}

export default function Schedule({
  scheduleData,
  gameTimes,
  gameRenderer,
}: ScheduleProps) {
  const GameRenderer = GameRenderers[gameRenderer];
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
              gameDate,
              gamePlayed,
              ,
              // roster version
              team1,
              team2,
              team3,
              team4,
              ,
              ,
              // game1result
              // game2result
              team1score,
              team2score,
              team3score,
              team4score,
            ] = row;

            const played = gamePlayed === 'TRUE';
            const { day, month } = formatDate(gameDate);

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
                    bg={played ? 'blackScale.700' : 'blackScale.600'}
                    color="whiteAlpha.900"
                    p="1rem"
                  >
                    <b>
                      Game&nbsp;
                      {idx + 1}
                      :&nbsp;
                      {month}
                      &nbsp;
                      {day}
                    </b>
                  </Center>
                  <Text
                    minW={['350px', '400px']}
                    width={['100%', '100%']}
                    bg="blackScale.50"
                    p="1rem 1.5rem"
                  >
                    <b>
                      {gameTimes[0]}
                      &nbsp;
                    </b>
                    <GameRenderer
                      idx={idx}
                      team1={team1}
                      score1={team1score}
                      played={played}
                      team2={team2}
                      score2={team2score}
                    />
                  </Text>
                  {team3 && (
                    <Text
                      minW={['350px', '400px']}
                      width={['100%', '100%']}
                      bg="blackScale.50"
                      p="1rem 1.5rem"
                    >
                      <b>
                        {gameTimes[1]}
                        &nbsp;
                      </b>
                      <GameRenderer
                        idx={idx}
                        team1={team3}
                        score1={team3score}
                        played={played}
                        team2={team4}
                        score2={team4score}
                      />
                    </Text>
                  )}
                </Wrap>
              </div>
            );
          })}
      </>
    </>
  );
}
