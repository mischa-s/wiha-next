import { fetchEntry } from '../utils/contentfulPages';
import { GenericContentfulPageInterface } from '../types';
import GenericPage from '../components/GenericPage';

export default function StatsPage({ fields }: GenericContentfulPageInterface) {
  return <GenericPage fields={fields} />;
}

export async function getStaticProps() {
  const { fields } = await fetchEntry('Jlpg71MQ7X5cGDCPCQLWz');

  return {
    props: {
      fields,
    },
  };
}
