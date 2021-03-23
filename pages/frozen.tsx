import { Heading } from '@chakra-ui/react';
import GenericPage from '../components/GenericPage';
import Schedule from '../components/Schedule';
import {
  TeamsTable,
  PlayersTable,
  GoaliesTable,
} from '../components/StatsTable';
import { GenericContentfulPageInterface } from '../types';
import { fetchEntry } from '../utils/contentfulPages';
import scheduleData from '../sheetsData/foursSchedule';
import teamsData from '../sheetsData/foursTeamStats';
import playersData from '../sheetsData/foursPlayerStats';
import goaliesData from '../sheetsData/foursGoalieStats';

function FoursChildren() {
  return (
    <>
      <Schedule scheduleData={scheduleData} gameTimes={['6:15', '7:30']} />
      <Heading
        id="team-standings"
        as="h2"
        size="md"
        textAlign="center"
        m="2rem 1rem"
      >
        Team Standings
      </Heading>
      <TeamsTable data={teamsData} />
      <Heading
        id="player-stats"
        as="h2"
        size="md"
        textAlign="center"
        m="2rem 1rem"
      >
        Player Stats
      </Heading>
      <PlayersTable data={playersData} />
      <Heading
        id="goalie-stats"
        as="h2"
        size="md"
        textAlign="center"
        m="2rem 1rem"
      >
        Goalie Stats
      </Heading>
      <GoaliesTable data={goaliesData} />
    </>
  );
}

export default function FrozenFoursPage({
  fields,
}: GenericContentfulPageInterface) {
  return (
    <GenericPage fields={fields}>
      <FoursChildren />
    </GenericPage>
  );
}

export async function getStaticProps() {
  const { fields } = await fetchEntry('5eV48Jtz2fHGZNLMG4iEBc');

  return {
    props: {
      fields,
    },
  };
}
