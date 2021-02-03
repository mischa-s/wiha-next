import GenericPage from '../components/GenericPage';
import { GenericContentfulPageInterface } from '../types';
import { fetchEntry } from '../utils/contentfulPages';

export default function FrozenFoursPage({
  fields,
}: GenericContentfulPageInterface) {
  return <GenericPage fields={fields} />;
}

export async function getStaticProps() {
  const { fields } = await fetchEntry('5eV48Jtz2fHGZNLMG4iEBc');

  return {
    props: {
      fields,
    },
  };
}
