// import { Heading } from '@chakra-ui/react';
import GenericPage from '../components/GenericPage';
import Schedule from '../components/Schedule';
// import { TeamsTable } from '../components/StatsTable';
import { GenericContentfulPageInterface } from '../types';
import { fetchEntry } from '../utils/contentfulPages';
import scheduleData from '../sheetsData/bearSchedule';
// import statsData from '../sheetsData/bearTeamStats';

function BearsChildren() {
  return (
    <>
      {/* <Heading as="h2" size="md" textAlign="center" m="2rem 1rem">
        Standings
      </Heading>
      <TeamsTable data={statsData} /> */}
      <Schedule scheduleData={scheduleData} gameTimes={['7:00', '8:15']} />
    </>
  );
}

export default function BearPage({ fields }: GenericContentfulPageInterface) {
  return (
    <GenericPage fields={fields}>
      <BearsChildren />
    </GenericPage>
  );
}

export async function getStaticProps() {
  const { fields } = await fetchEntry('51JlQodms0sVItGZWI5PMO');

  return {
    props: {
      fields,
    },
  };
}
