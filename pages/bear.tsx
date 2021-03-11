import GenericPage from '../components/GenericPage';
import Schedule from '../components/Schedule';
import { GenericContentfulPageInterface } from '../types';
import { fetchEntry } from '../utils/contentfulPages';

export default function BearPage({ fields }: GenericContentfulPageInterface) {
  const sheet = '1jsZI8NV0KhKXbzwys6jdhOZbuLxwP1dm2EhCdTrTq1c';

  return (
    <GenericPage fields={fields}>
      <Schedule sheet={sheet} />
    </GenericPage>
  );
}

export async function getStaticProps() {
  const { fields } = await fetchEntry('51JlQodms0sVItGZWI5PMO');

  return {
    props: {
      fields,
    },
  };
}
