import GenericPage from '../components/GenericPage';
import { GenericContentfulPageInterface } from '../types';
import { fetchEntry } from '../utils/contentfulPages';

export default function Grade1Page({ fields }: GenericContentfulPageInterface) {
  return <GenericPage fields={fields} />;
}

export async function getStaticProps() {
  const { fields } = await fetchEntry('3ZpTFfywlAm4hcdp48OuR2');

  return {
    props: {
      fields,
    },
  };
}
