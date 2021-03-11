import GenericPage from '../components/GenericPage';
import Schedule from '../components/Schedule';
import { GenericContentfulPageInterface } from '../types';
import { fetchEntry } from '../utils/contentfulPages';

export default function FrozenFoursPage({
  fields,
}: GenericContentfulPageInterface) {
  const sheet = '1oVAQjP83uPltfgeyRLZ9S2EHfgnbGwdSA5qrMYtYNC4';

  return (
    <GenericPage fields={fields}>
      <Schedule sheet={sheet} />
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
