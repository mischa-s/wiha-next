import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from '@emotion/styled';
import { Box, Heading, Flex, Text, AspectRatio } from '@chakra-ui/react';
import { fetchEntry } from '../../utils/contentfulPages';
import { GenericContentfulPageInterface } from '../../types';
import FreeTrialForm from '../../components/ltp/FreeTrialForm';
import QuickLinks from '../../components/ltp/QuickLinks';
import Layout from '../../components/Layout';

export async function getStaticProps() {
  const { fields } = await fetchEntry('4zrX35RSdsaIqxVMy0N5FE');

  return {
    props: {
      fields,
    },
  };
}

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50em;
  align-items: left;
  max-width: 100%;
  margin: 2em auto;

  p {
    padding: 0.75em 0;
  }
`;

export default function Index({ fields }: GenericContentfulPageInterface) {
  // const [isValidated, setIsValidated] = useState(true);
  const { title, description, videoLink, subtitle1, contentBlock1 } = fields;

  // const genericImages = images?.map((image) => image.fields);

  return (
    <Layout>
      <Flex direction="column" align="center" bg="blackAlpha.200" py="2rem">
        <Heading as="h1" size="lg" textAlign="center" my={2}>
          {title}
        </Heading>
        <Text fontSize="lg" my="1rem" w={[350, 550, 700, 800]} px="1rem">
          {description}
        </Text>
      </Flex>
      <ContentWrapper>
        <QuickLinks activeLink="/ltp" />
        <Box w={[350, 550, 700, 800]} pb="1rem">
          {documentToReactComponents(contentBlock1)}
        </Box>
        <Box pe="2rem">
          <AspectRatio h={[200, 300, 400]} ratio={4 / 3}>
            <iframe
              title="Learn to play video on youtube"
              src={videoLink}
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </AspectRatio>
        </Box>
        <Heading as="h2" fontSize="2xl" mt="3rem">
          {subtitle1}
        </Heading>
        <FreeTrialForm />
      </ContentWrapper>
    </Layout>
  );
}
