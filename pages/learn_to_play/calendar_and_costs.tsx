import { fetchEntry } from '../../utils/contentfulPages';
import { GenericContentfulPageInterface } from '../../types';
import GenericPage from '../../components/GenericPage';
import QuickLinks from '../../components/ltp/QuickLinks';

export default function CalendarAndCosts({
  fields,
}: GenericContentfulPageInterface) {
  return (
    <GenericPage fields={fields}>
      <QuickLinks activeLink="/learn_to_play/calendar_and_costs" />
    </GenericPage>
  );
}

export async function getStaticProps() {
  const { fields } = await fetchEntry('5Pn1VljGIe5bHchIoOSs09');

  return {
    props: {
      fields,
    },
  };
}
