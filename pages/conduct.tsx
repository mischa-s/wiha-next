import Head from 'next/head';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import Layout from '../components/Layout';
import { GenericContentfulPageInterface } from '../types';

export default function ConductPage({
  fields,
  children,
}: GenericContentfulPageInterface) {
  const {
    title,
    description,
    subtitle1,
    contentBlock1,
    subtitle2,
    contentBlock2,
    images,
    ogDescript,
  } = fields;

  const genericImages = images?.map((image) => image.fields);

  return (
    <Layout>
      <Head>
        <meta property="og:title" content={title} key="ogtitle" />
        {ogDescript && (
          <meta property="og:description" content={ogDescript} key="ogdesc" />
        )}
        <title>Code of Conduct</title>
      </Head>

      <Flex direction="column" align="center" bg="blackAlpha.200" py="2rem">
        <Heading as="h1" size="lg" textAlign="center" my={2}>
          Code of Conduct
        </Heading>
        <Text fontSize="lg" my="1rem" w={[350, 550, 700, 800]} px="1rem">
          Hockey isn't only the best sport, it's also a competitive one. Our club recognises that ice hockey can be a physical game, and that emotions will sometimes run high. However, we as a club cannot accept poor and potentially dangerous behavior from individual players

          Going hard for a puck in the corner? Great! But if your momentum carries you into another player that's dangerous, and it's on you to make sure it doesn't happen.

          Battling hard in front of the net? Coach will be happy. But keep your stick out of it, leave the chopping to the lumberjacks.

          Got dangled? Hard luck. Get your feet moving, hustle back, and get your stick on the puck. No knees. No elbows. No stick in the hands. No slashing.

          The above are all penalties and the refs are doing their best to call them. We are constantly improving our reffing program. We are currently working on organising ref training for all Wellington referees (please get in touch if you'd like to participate).

          Example of poor misconduct that will be reviewed could be:

          <ul>
            <li>Aggressive physical contact with another player or the referee</li>
            <li>Use of foul language or threatening gestures directed at referees or players</li>
            <li>Having a win at all costs mentality</li>
          </ul>

          Inappropriate behaviour by players can result in:

          <ul>
            <li>Being penalised during the game or reprimanded afterwards</li>
            <li>Potential impacts to WIHA, i.e. Fewer people wanting to play or willing to volunteer for official positions</li>
          </ul>

          The easiest way to clean up the game is for players to play clean hockey. The fundamental principles are:

          <ul>
            <li>Use your stick for hitting the puck, not other skaters</li>
            <li>Use your body to press against but never strike</li>
            <li>If you receive a penalty, accept it and skate to the bench, no feedback required</li>
          </ul>

          If you think penalties are being missed, have your team manager let the refs know during period break.

          Don't take matters into your own hands, a slash for slash escalates quickly. If you want to get into a scrum, we recommend rugby.

          This is a community effort and it's on all of us to do our part to help the great sport of hockey grow in a safe way in Wellington!
        </Text>
      </Flex>

      <Flex direction="column" align="center" py="2rem">
        {children}

        <Heading as="h2" size="md" textAlign="center" m="2rem 1rem 0">
          {subtitle1}
        </Heading>

        <Box my="1rem" w={[350, 550, 700, 800]} px="1rem">
          {documentToReactComponents(contentBlock1)}
        </Box>

        {genericImages?.map((image) => {
          const { title: imageTitle, file } = image;
          const imageURL = file?.url;

          return (
            <Box key={imageTitle} w={[350, 550, 700, 800]} my="1rem">
              <Image
                mb="2rem"
                w={[350, 550, 700, 800]}
                objectFit="cover"
                src={imageURL ?? '/wiha-logos/logo.png'}
                alt={title}
              />
            </Box>
          );
        })}

        <Heading as="h2" size="md" textAlign="center" m="2rem 1rem 0">
          {documentToReactComponents(subtitle2)}
        </Heading>

        <Box my="1rem" w={[350, 550, 700, 800]} px="1rem">
          {documentToReactComponents(contentBlock2)}
        </Box>
      </Flex>
    </Layout>
  );
}
