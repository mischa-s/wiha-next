import {
  Image,
  Text,
  Button,
  Box,
  Link as ExternalLink,
} from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { PostInterface } from '../types';

type PostProps = {
  post: PostInterface;
};

export default function Post({ post }: PostProps) {
  const { heroImage, body, title } = post;
  const imageURL = heroImage?.fields?.file?.url;

  return (
    <>
      {imageURL && (
        <div>
          <Image
            mb="2rem"
            w={[350, 550, 700, 800]}
            objectFit="cover"
            src={imageURL}
            alt={`image thumbnail for post ${title}`}
          />
        </div>
      )}
      {title === '2022 Registration Now Open!' && (
        <>
          <Box mb="2rem" w={[350, 550, 700, 800]}>
            <Text fontSize="xl">
              Details regarding the upcoming season can be found below, or just
              click on one of the buttons to register now:
            </Text>
          </Box>
          <ExternalLink
            href="https://secure.esportsdesk.com/login.cfm?leagueID=33110&clientID=6894&regEventID=51150"
            isExternal
          >
            <Button
              mb="2rem"
              mx={['0.2rem', '0.5rem', '1rem', '2rem']}
              size="lg"
              variant="outline"
              colorScheme="blackAlpha"
            >
              Adult League
            </Button>
          </ExternalLink>
          <ExternalLink
            href="https://secure.esportsdesk.com/login.cfm?leagueID=33110&clientID=6894&regEventID=51587"
            isExternal
          >
            <Button
              mb="2rem"
              mx={['0.2rem', '0.5rem', '1rem', '2rem']}
              size="lg"
              variant="outline"
              colorScheme="blackAlpha"
            >
              Youth Training
            </Button>
          </ExternalLink>
          <ExternalLink
            href="https://secure.esportsdesk.com/login.cfm?leagueID=33110&clientID=6894&regEventID=51853"
            isExternal
          >
            <Button
              mb="2rem"
              mx={['0.2rem', '0.5rem', '1rem', '2rem']}
              size="lg"
              variant="outline"
              colorScheme="blackAlpha"
            >
              Adult Training
            </Button>
          </ExternalLink>
        </>
      )}
      <Text as="div">{documentToReactComponents(body)}</Text>
    </>
  );
}
