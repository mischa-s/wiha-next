import GenericPage from '../components/GenericPage';
import { GenericContentfulPageInterface } from '../types';
import { fetchEntry } from '../utils/contentfulPages';

export default function Grade3Page({ fields }: GenericContentfulPageInterface) {
  return <GenericPage fields={fields} />;
}

export async function getStaticProps() {
  const { fields } = await fetchEntry('18ROyvOr2JgbjUhHrXgvJQ');

  return {
    props: {
      fields,
    },
  };
}
