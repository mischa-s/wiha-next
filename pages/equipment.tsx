import { fetchEntry } from '../utils/contentfulPages';
import { GenericContentfulPageInterface } from '../types';
import GenericPage from '../components/GenericPage';

export default function EquipmentPage({
  fields,
}: GenericContentfulPageInterface) {
  return <GenericPage fields={fields} />;
}

export async function getStaticProps() {
  const { fields } = await fetchEntry('23ammL7Cd8c51oaEIp9G85');

  return {
    props: {
      fields,
    },
  };
}
