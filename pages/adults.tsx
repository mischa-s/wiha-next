// import { Heading } from '@chakra-ui/react';
import GenericPage from '../components/GenericPage';
import { GenericContentfulPageInterface } from '../types';
import { fetchEntry } from '../utils/contentfulPages';

export default function AdultLeaguePage({
  fields,
}: GenericContentfulPageInterface) {
  return <GenericPage fields={fields} />;
}

export async function getStaticProps() {
  const { fields } = await fetchEntry('4HHAFRM9KuE9p0UzRrnBbX');

  return {
    props: {
      fields,
    },
  };
}
