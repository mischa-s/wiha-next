import { fetchEntry } from '../utils/contentfulPages';
import { GenericContentfulPageInterface } from '../types';
import GenericPage from '../components/GenericPage';

export default function SealsPage({ fields }: GenericContentfulPageInterface) {
  return <GenericPage fields={fields} />;
}

export async function getStaticProps() {
  const { fields } = await fetchEntry('1UIxYHWsT3s5nLIX8dZHBv');

  return {
    props: {
      fields,
    },
  };
}
