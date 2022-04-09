// import { Heading } from '@chakra-ui/react';
import GenericPage from '../components/GenericPage';
import { GenericContentfulPageInterface } from '../types';
import { fetchEntry } from '../utils/contentfulPages';

import Schedule from '../components/Schedule';
// import {
//   TeamsTable,
//   PlayersTable,
//   GoaliesTable,
// } from '../components/StatsTable';

import scheduleData from '../sheetsData/grade2Schedule';
// import teamsData from '../sheetsData/foursTeamStats';
// import playersData from '../sheetsData/foursPlayerStats';
// import goaliesData from '../sheetsData/foursGoalieStats';

function Grade3Children() {
  return (
    <>
      {/* <Heading
        id="team-standings"
        as="h2"
        size="md"
        textAlign="center"
        m="2rem 1rem"
      >
        Team Standings
      </Heading> */}
      {/* <TeamsTable data={teamsData} /> */}
      <Schedule
        gameRenderer="fours"
        scheduleData={scheduleData}
        gameTimes={['7:30', '8:40']}
      />
      {/* <Heading
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
      <GoaliesTable data={goaliesData} /> */}
    </>
  );
}

export default function Grade3Page({ fields }: GenericContentfulPageInterface) {
  return (
    <GenericPage fields={fields}>
      <Grade3Children />
    </GenericPage>
  );
}

export async function getStaticProps() {
  const { fields } = await fetchEntry('18ROyvOr2JgbjUhHrXgvJQ');

  return {
    props: {
      fields,
    },
  };
}
