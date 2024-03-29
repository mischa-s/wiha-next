import GenericPage from '../components/GenericPage';
import { GenericContentfulPageInterface } from '../types';
import { fetchEntry } from '../utils/contentfulPages';

export default function BeginnersPage({
  fields,
}: GenericContentfulPageInterface) {
  return <GenericPage fields={fields} />;
}

export async function getStaticProps() {
  const { fields } = await fetchEntry('4LXLPBcUWUrepdgxqJ8psy');

  return {
    props: {
      fields,
    },
  };
}
