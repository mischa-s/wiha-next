import { Heading } from '@chakra-ui/react';
import GenericPage from '../components/GenericPage';
import Schedule from '../components/Schedule';
import StatsTable from '../components/StatsTable';
import { GenericContentfulPageInterface } from '../types';
import { fetchEntry } from '../utils/contentfulPages';
import scheduleData from '../sheetsData/foursSchedule';
import statsData from '../sheetsData/foursTeamStats';

function FoursChildren() {
  return (
    <>
      <Heading as="h2" size="md" textAlign="center" m="2rem 1rem">
        Standings
      </Heading>
      <StatsTable data={statsData} />
      <Schedule scheduleData={scheduleData} gameTimes={['6:15', '7:30']} />
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
