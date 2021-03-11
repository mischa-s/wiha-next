import GenericPage from '../components/GenericPage';
import Schedule from '../components/Schedule';
import { GenericContentfulPageInterface } from '../types';
import { fetchEntry } from '../utils/contentfulPages';
import scheduleData from '../sheetsData/foursSchedule';

export default function FrozenFoursPage({
  fields,
}: GenericContentfulPageInterface) {
  return (
    <GenericPage fields={fields}>
      <Schedule scheduleData={scheduleData} gameTimes={['6:15', '7:30']} />
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
