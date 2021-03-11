import GenericPage from '../components/GenericPage';
import Schedule from '../components/Schedule';
import { GenericContentfulPageInterface } from '../types';
import { fetchEntry } from '../utils/contentfulPages';
import scheduleData from '../sheetsData/bearSchedule';

export default function BearPage({ fields }: GenericContentfulPageInterface) {
  return (
    <GenericPage fields={fields}>
      <Schedule scheduleData={scheduleData} />
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
