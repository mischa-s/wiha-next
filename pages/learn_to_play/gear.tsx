import { fetchEntry } from '../../utils/contentfulPages';
import { GenericContentfulPageInterface } from '../../types';
import GenericPage from '../../components/GenericPage';
import QuickLinks from '../../components/ltp/QuickLinks';

export default function EquipmentPage({
  fields,
}: GenericContentfulPageInterface) {
  return (
    <GenericPage fields={fields}>
      <QuickLinks activeLink="/learn_to_play/gear" />
    </GenericPage>
  );
}

export async function getStaticProps() {
  const { fields } = await fetchEntry('6sLZd5p37IzM1TxATMB46g');

  return {
    props: {
      fields,
    },
  };
}
