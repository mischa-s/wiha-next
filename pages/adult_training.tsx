import GenericPage from '../components/GenericPage';
import { GenericContentfulPageInterface } from '../types';
import { fetchEntry } from '../utils/contentfulPages';

export default function AdultTrainingPage({
  fields,
}: GenericContentfulPageInterface) {
  return <GenericPage fields={fields} />;
}

export async function getStaticProps() {
  const { fields } = await fetchEntry('5vQerfVhuUm7Qud5CrFBJM');

  return {
    props: {
      fields,
    },
  };
}
